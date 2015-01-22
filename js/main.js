$(document).ready(function(){
  stickyHeader();

  menuFooter();

  myPlayers1();
  myPlayers2();

  bMore();

  moreArrow();

  personVoting();
});

function stickyHeader(){
  var fixed = document.getElementsByTagName("header");
    $(fixed).sticky({ topSpacing: 0 });
}

function menuFooter(){
var menu = document.getElementsByTagName("menu");
   if (document.body.clientWidth <= 520){
    	$("menu").hide();
      	$('.b-name-menu').click(function(){
			$(this).next().slideToggle("normal");
		});
    } else {
      $("menu").show();
    }
}

function myPlayers1(){
$("#jquery_jplayer_1").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            mp3: "audio/Kitniss-Derevo_Viselnika.mp3"
          });
        },
        swfPath: "/js",
        supplied: "mp3,oga"
      });
}

function myPlayers2(){
$("#jquery_jplayer_2").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            mp3: "audio/Bi2-Serebro.mp3"
          });
        },
        swfPath: "/js",
        supplied: "mp3,oga"
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

function personVoting(){
	$(".person-voting").hover(function(){
	    $(".total").css("background","none");
	    }, function(){
	    $(".total").css("background-color"," #f58271");
  	});
}