function stickyHeader(){
  var fixed = document.getElementsByTagName("header");
    $(fixed).sticky({ topSpacing: 0 });
}

function menuFooter(){
var menu = document.getElementsByTagName("menu");
   if (document.body.clientWidth < 520){
    	$("menu").hide();
      	$('.b-menu').click(function(){
			$(this).next().slideToggle("normal");
		});
    } else {
      $("menu").show();
    }
}

function myPlayers(){
$("#jquery_jplayer_1").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            mp3: "audio/Bi2-Serebro.mp3"
          });
        },
        swfPath: "/js",
        supplied: "mp3,oga",
        globalVolume: true,
        play: function() { 
            $(this).jPlayer("pauseOthers");
        },
        swfPath: "js",
        supplied: "mp3,oga",
		wmode: "window",
		globalVolume: true,
		smoothPlayBar: true,
		keyEnabled: true,
        cssSelectorAncestor: "#jp_container_1"
      });

$("#jquery_jplayer_2").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            mp3: "audio/Kitniss-Derevo_Viselnika.mp3"
          });
        },
        swfPath: "/js",
        supplied: "mp3,oga",
        globalVolume: true,
        play: function() { 
            $(this).jPlayer("pauseOthers");
        },
		swfPath: "js",
        supplied: "mp3,oga",
		wmode: "window",
		globalVolume: true,
		smoothPlayBar: true,
		keyEnabled: true,
		cssSelectorAncestor: "#jp_container_2"
      });

$("#jquery_jplayer_3").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            mp3: "audio/Bi2-Serebro.mp3"
          });
        },
        swfPath: "/js",
        supplied: "mp3,oga",
        globalVolume: true,
        play: function() { 
            $(this).jPlayer("pauseOthers");
        },
		swfPath: "js",
        supplied: "mp3,oga",
		wmode: "window",
		globalVolume: true,
		smoothPlayBar: true,
		keyEnabled: true,
        cssSelectorAncestor: "#jp_container_3"
      });

$("#jquery_jplayer_4").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            mp3: "audio/Kitniss-Derevo_Viselnika.mp3"
          });
        },
        swfPath: "/js",
        supplied: "mp3,oga",
        globalVolume: true,
        play: function() { 
            $(this).jPlayer("pauseOthers");
        },
        swfPath: "js",
        supplied: "mp3,oga",
		wmode: "window",
		globalVolume: true,
		smoothPlayBar: true,
		keyEnabled: true,
        cssSelectorAncestor: "#jp_container_4"
      });


$("#jquery_jplayer_5").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            mp3: "audio/Bi2-Serebro.mp3"
          });
        },
        swfPath: "/js",
        supplied: "mp3,oga",
        globalVolume: true,
        play: function() { 
            $(this).jPlayer("pauseOthers");
        },
        swfPath: "js",
        supplied: "mp3,oga",
		wmode: "window",
		globalVolume: true,
		smoothPlayBar: true,
		keyEnabled: true,
        cssSelectorAncestor: "#jp_container_5"
      });


$("#jquery_jplayer_6").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            mp3: "audio/Kitniss-Derevo_Viselnika.mp3"
          });
        },
        swfPath: "/js",
        supplied: "mp3,oga",
        globalVolume: true,
        play: function() { 
            $(this).jPlayer("pauseOthers");
        },
        swfPath: "js",
        supplied: "mp3,oga",
		wmode: "window",
		globalVolume: true,
		smoothPlayBar: true,
		keyEnabled: true,
        cssSelectorAncestor: "#jp_container_6"
      });
}

function bMore(){
  $(".b-more").click(function(){
      $(".b-dj-ul").animate({scrollTop: "+=97"});
    });
}

function moreArrow(){
  $(".more-arrow").click(function(){
    $(".b-faces-voting").animate({scrollTop: "+=97"});
  });
}

function clickly(){
	var heightTrack = $('.item-track').outerHeight();
	var heightBTrack = heightTrack + heightTrack + heightTrack - 1;
		$('#vertical-ticker').css({'height':heightBTrack});
}

function personVoting(){
	$(".item-photo-person").hover(function(){
	     $(this).find(".total").css("background","none");
	    }, function(){
	    $(".total").css("background-color"," #f58271");
  	});
}

function heightDJ(){
	if (document.body.clientWidth > 603){
		var heightFont = $('.item-height').height();
		var heightMore = $('.b-more').height();
		var heightDJ = $('.item-banner').height() - heightFont - heightMore;
			$('.b-dj-ul').css({'height':heightDJ});
	}
}

function heightUl(){
	if (document.body.clientWidth > 603){
		var heightPlus = $('.item-block-right').outerHeight();
		var heightFavorite = $('.b-title-favorite').outerHeight();
		var heightMoreA = $('.b-more-arrow').height();
		var heightUl = $('.item-block-left').height() - heightFavorite - heightMoreA - heightPlus;
			$('.b-faces-voting').css({'height':heightUl});
	} else {
		$('.b-faces-voting').css({'height':'95'});
	}
}

function playList(){
  $('#vertical-ticker').totemticker({
    row_height  : '37px',
    next    : '#ticker-next',
    previous  : '#ticker-previous',
    mousestop : true,
  });
}

function scrollNews(){
	if (document.body.clientWidth > 520){
		window.addEvent('domready', function(){
			var myProducts = new ScrollBar('b-news', 'bar', 'knob', {
				scroll: {
					duration: 2000,
					transition: 'elastic:out',
					onStart: function(){
					//	console.log('start ' + this.to[0]);
					},
					onComplete: function(){
					//	console.log('complete ' + this.to[0]);
					}
				},
				slider: {
					offset: -1,
					onChange: function(pos){
					//	console.log('change ' + pos);
					},
					onComplete: function(pos){
					//	console.log('complete ' + pos);
					}
				},
				knob: {
					duration: 1200,
					transition: 'elastic:out',
					onStart: function(){
					//	console.log('start ' + this.to[0].value); // knob position
					}
				}
			});
		});
	}
}


$(document).ready(function(){
  stickyHeader();

  menuFooter();

  myPlayers();

  bMore();

  moreArrow();

  personVoting();

  heightDJ();

  heightUl();

  playList();

  scrollNews();

  clickly();
});

$(window).resize(function(){
	heightDJ();

	heightUl();

	menuFooter();

	clickly();

	scrollNews();
});