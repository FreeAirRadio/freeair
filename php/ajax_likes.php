<?php

error_reporting( 22527 );

define( 'PATH_TBASE', 'tbase' );

//----------------------------------------------------------------
// isInteger
//----------------------------------------------------------------
function isInteger( $v )
{
	if ( strlen( $v ) == 0 ) return false;
	if ( !is_numeric( $v ) ) return false;
	if ( doubleval( $v ) - intval( $v ) != 0 ) return false;
	return true;
}

//----------------------------------------------------------------
// CAjaxLikes
//----------------------------------------------------------------
class CAjaxLikes
{
	function setup()
	{
		$this->items = array();
		$this->result = 'OK';
	}

	function validatefilename( $filename )
	{
		if ( $filename == '' )
			return false;

		if ( $filename == "null" )
			return false;

		if ( strpos( $filename, ".." ) !== false )
			return false;

		if ( strpos( $filename, '/' ) !== false )
			return false;

		return true;
	}

	function initTB()
	{
		$this->items = array();
		$this->items['likes'] = '0';
	}

	function parseTB( $txt )
	{
		$this->items = array();
		$txt = str_replace( "\r", "", $txt );
		$ax = split( "\n", $txt );
		foreach( $ax as $ln )
		{
			if ( strpos( $ln, "=" ) !== false )
			{
				$bx = split( "=", $ln );
				$this->items[$bx[0]] = $bx[1];
			}
		}
	}

	function combTB()
	{
		foreach( $this->items as $key => $val )
		{
			if ( $key != '' )
				$ax[] =  $key . '=' . $val;
		}
		return implode( "\r\n", $ax );
	}

	function vote2()
	{
		$dir = dirname(__FILE__) . "/" . PATH_TBASE;
		if ( !is_writable( $dir ) )
		{
			$this->result = "data folder[tbase] is not writable";
			return false;
		}

		if ( !isset( $_REQUEST['filename'] ) )
		{
			$this->result = "[filename] is not set";
			return false;
		}

		$filename = $_REQUEST['filename'];
		if ( $filename == '' )
		{
			$this->result = "[filename] is empty";
			return false;
		}

		if ( !$this->validatefilename($filename) )
		{
			$this->result = "invalid [filename] ({$filename})";
			return false;
		}

		//-- get content of text　file
		$path = $dir . "/{$filename}.txt";
		if ( !file_exists( $path ) )
		{
			$this->initTB();
			@file_put_contents( $path, $this->combTB() );
		}

		$handle = @fopen( $path, "r+" );

		//-- do an exclusive lock
		if ( !( @flock( $handle, LOCK_EX ) ) )
		{
			$this->result = "Can not write data in [tbase] " .
				"(Could not get the lock!)";
			return false;
		}

		$txt = fread( $handle, filesize( $path ) );
		$this->parseTB( $txt );

		//-- add votes
		$vote = '';
		if ( isset( $_REQUEST['vote'] ) )
			$vote = $_REQUEST['vote'];

		if ( !empty( $vote ) )
		{
			if ( isset( $this->items[$vote] ) )
			{
				$x = $this->items[$vote];
				if ( !isInteger( $x ) ) $x = 0;
				$x = intval( $x );
				$this->items[$vote] = $x + 1;
			}

			//-- truncate file
			fseek( $handle, 0 );
			ftruncate( $handle, 0 );

			//-- write votes to txt file
			fwrite( $handle, $this->combTB() );
		}

		//-- release the lock
		flock( $handle, LOCK_UN );

		//-- close the file
		fclose($handle);

		return true;
	}

	function vote()
	{
		$ret = array();
		$ret[] = "cmd:'vote'";

		if ( $this->vote2() )
		{
			foreach( $this->items as $key => $val )
			{
				$ix[] = $key . ":" . $val;
			}
			$json_items = "{" . implode( ",", $ix ) . "}";
			$ret[] = "items:{$json_items}";
		}
		$ret[] = "result:'" . $this->result . "'";

		//-- json
		$json = "{" . implode( ",", $ret ) . "}";

		echo $json;
	}

	function process( $cmd )
	{
		switch( $cmd )
		{
		case 'vote':
			$this->vote();
			break;
		}
	}
}

if ( isset( $_REQUEST['cmd'] ) )
{
	$obj = new CAjaxLikes();
	$obj->setup();
	$obj->process( $_REQUEST['cmd'] );
}

?>
