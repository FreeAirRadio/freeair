$(document).ready(function(){
  stickyHeader();

  menuFooter();

  myPlayers1();
  myPlayers2();
  myPlayers3();
  myPlayers4();
  myPlayers5();
  myPlayers6();

  bMore();

  moreArrow();

  personVoting();

  heightDJ();

  heightUl();
});

function stickyHeader(){
  var fixed = document.getElementsByTagName("header");
    $(fixed).sticky({ topSpacing: 0 });
}

function menuFooter(){
var menu = document.getElementsByTagName("menu");
   if (document.body.clientWidth <= 520){
    	$("menu").hide();
      	$('.b-menu').click(function(){
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
            mp3: "audio/Bi2-Serebro.mp3"
          });
        },
        swfPath: "/js",
        supplied: "mp3,oga",
        cssSelectorAncestor: "#jp_container_1"
      });
}

function myPlayers2(){
$("#jquery_jplayer_2").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            mp3: "audio/Kitniss-Derevo_Viselnika.mp3"
          });
        },
        swfPath: "/js",
        supplied: "mp3,oga",
        cssSelectorAncestor: "#jp_container_2"
      });
}

function myPlayers3(){
$("#jquery_jplayer_3").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            mp3: "audio/Bi2-Serebro.mp3"
          });
        },
        swfPath: "/js",
        supplied: "mp3,oga",
        cssSelectorAncestor: "#jp_container_3"
      });
}

function myPlayers4(){
$("#jquery_jplayer_4").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            mp3: "audio/Kitniss-Derevo_Viselnika.mp3"
          });
        },
        swfPath: "/js",
        supplied: "mp3,oga",
        cssSelectorAncestor: "#jp_container_4"
      });
}

function myPlayers5(){
$("#jquery_jplayer_5").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            mp3: "audio/Bi2-Serebro.mp3"
          });
        },
        swfPath: "/js",
        supplied: "mp3,oga",
        cssSelectorAncestor: "#jp_container_5"
      });
}

function myPlayers6(){
$("#jquery_jplayer_6").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            mp3: "audio/Kitniss-Derevo_Viselnika.mp3"
          });
        },
        swfPath: "/js",
        supplied: "mp3,oga",
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

function personVoting(){
	$(".person-voting").hover(function(){
	    $(".total").css("background","none");
	    }, function(){
	    $(".total").css("background-color"," #f58271");
  	});
}

function heightDJ(){
	$(window).resize(function () {
		var heightFont = $('.height').height();
		var heightMore = $('.b-more').height();
		var heightDJ = $('.item-banner').height() - heightFont - heightMore;
			$('.b-dj-ul').css({'height':heightDJ});
		});
}

function heightUl(){
	$(window).resize(function () {
		var heightPlus = $('.plus').outerHeight();
		var heightFavorite = $('.b-title-favorite').outerHeight(true);
		var heightMoreA = $('.b-more-arrow').height();
		var heightUl = $('.left').height() - heightFavorite - heightMoreA - heightPlus;
			$('.b-faces-voting').css({'height':heightUl});
		});
}