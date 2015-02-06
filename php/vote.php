<?
	@$f = fopen('vote.dat', 'r');
	if ($f) {
		@$total = trim(fgets($f));
		@fclose($f);
	}
	
	if ($_REQUEST['act'] == 'vote') {
			$total++;
	}
	
	@$f = fopen('vote.dat', 'w');
	if ($f) {
		@flock($f, LOCK_EX);
		@fwrite($f, $total."\r\n");
		@flock($f, LOCK_UN);
		@fclose($f);
	}
	
	echo "{'total': '".intval($total)."'}";
?>