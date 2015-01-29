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

function myPlayers1(){
$("#jquery_jplayer_1").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            mp3: "audio/Bi2-Serebro.mp3"
          });
        },
        swfPath: "/js",
        supplied: "mp3,oga",
        globalVolume: true,
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
        globalVolume: true,
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
        globalVolume: true,
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
        globalVolume: true,
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
        globalVolume: true,
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
        globalVolume: true,
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
	$(".item-photo-person").hover(function(){
	     $(this).find(".total").css("background","none");
	    }, function(){
	    $(".total").css("background-color"," #f58271");
  	});
}

function heightDJ(){
	if (document.body.clientWidth > 500){
		var heightFont = $('.item-height').height();
		var heightMore = $('.b-more').height();
		var heightDJ = $('.item-banner').height() - heightFont - heightMore;
			$('.b-dj-ul').css({'height':heightDJ});
	}
}

function heightUl(){
	if (document.body.clientWidth > 503){
		var heightPlus = $('.item-block-right').outerHeight();
		var heightFavorite = $('.b-title-favorite').outerHeight();
		var heightMoreA = $('.b-more-arrow').height();
		var heightUl = $('.item-block-left').height() - heightFavorite - heightMoreA - heightPlus;
			$('.b-faces-voting').css({'height':heightUl});
	} else {
		$('.b-faces-voting').css({'height':'95'});
	}
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
			
			myProducts.set(1);
			
			document.id('move0').addEvent('click', function(){ myProducts.set(1); });
			document.id('move10').addEvent('click', function(){ myProducts.set(10); });
			document.id('move100').addEvent('click', function(){ myProducts.set(100); });
			document.id('move1000').addEvent('click', function(){ myProducts.set(1000); });
			
			var products = $$('#b-news li');
			document.id('move1st').addEvent('click', function(){ myProducts.set(products[0]); });
			document.id('move2nd').addEvent('click', function(){ myProducts.set(products[1]); });
			document.id('move3rd').addEvent('click', function(){ myProducts.set(products[2]); });
			
			
			/*document.id('getPos').addEvent('click', function(){
				console.log(myProducts.steps);
			});*/
			
			
			// if your link is on the slider
			document.id('theSixth').addEvents({
				'mousedown': function(event){
					event.stop();
				},
				'click': function(){
					myProducts.set(products[5]);
				}
			});
			
		});
	}
}


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

  scrollNews();
});

$(window).resize(function(){
	heightDJ();

	heightUl();

	menuFooter();

	scrollNews();
});