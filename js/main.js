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
            mp3: "audio/Rammstein–Du_riechst_so_gut.mp3"
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
            mp3: "audio/Nickelback-Edge_Of_A_Revolution.mp3"
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
  if (document.body.clientWidth > 603){
    var heightFont = $('.item-height').height();
    var heightMore = $('.b-more').height();
    var heightDJ = $('.item-banner').height() - heightFont - heightMore;
    var heightDJbig = $('.item-banner').height() - heightFont - heightMore - heightMore;
    $('.b-dj-ul').css({'height':heightDJ});
  }
  $(".arrow-hide-dj").hide();
  $(".arrow-down-dj").click(function(){
      $(".b-dj-ul").animate({scrollTop: "+=100"});
      $(".arrow-hide-dj").show();
      $('.b-dj-ul').css({'height':heightDJbig});
    });
    $(".arrow-top-dj").click(function(){
      $(".b-dj-ul").animate({scrollTop: "0"});
        $(".arrow-hide-dj").hide();
        $('.b-dj-ul').css({'height':heightDJ});
    });
}

function moreArrow(){
  if (document.body.clientWidth > 603){
    var heightPlus = $('.item-block-right').outerHeight();
    var heightFavorite = $('.b-title-favorite').outerHeight();
    var heightMoreA = $('.b-more').height();
    var heightUl = $('.item-block-left').height() - heightFavorite - heightMoreA - heightPlus;
    var heightUlbig = $('.item-block-left').height() - heightFavorite - heightMoreA - heightMoreA - heightPlus;
    $('.b-faces-voting').css({'height':heightUl});
  }
  $(".arrow-hide").hide();
  $(".arrow-down").click(function(){
    $(".b-faces-voting").animate({scrollTop: "+=100"});
    $(".arrow-hide").show();
    $('.b-faces-voting').css({'height':heightUlbig});
  });
  $(".arrow-top").click(function(){
    $(".b-faces-voting").animate({scrollTop: "0"});
    $(".arrow-hide").hide();
    $('.b-faces-voting').css({'height':heightUl});
  });
}

function clickly(){
	var heightTrack = $('.item-track').outerHeight();
	var heightBTrack = heightTrack + heightTrack + heightTrack - 1;
		$('#vertical-ticker').css({'height':heightBTrack});
}

function personVoting(){
	$(".item-photo-person").hover(function(){
	     $(this).find("#total").css("background","none");
	    }, function(){
	    $("#total").css("background-color"," #f58271");
  	});
}

function playList(){
  $('#vertical-ticker').totemticker({
    row_height  : '37px',
    next    : '#ticker-next',
    previous  : '#ticker-previous',
    mousestop : true,
  });
}

function scrollnews(){
  if (document.body.clientWidth > 515){
    $('#b-news').horizontalScroll();
  }
}

function diagram(){
  $(function () {
    $('#container').highcharts({
        chart: {
            type: 'spline',
            zoomType: 'x'
        },
        title: {
            text: 'Popularity'
        },
        xAxis: {
            type: 'datetime',
        },
        yAxis: {
            title: {
                text: null
            }
        },

        labels: {
            align: 'left',
            format: '{value:.0f}'
        },

        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 0,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            type: 'area',
            name: 'votes',
            pointInterval: 31 * 24 * 3600 * 1000,
            pointStart: Date.UTC(2014, 0),
            data: [
                3300, 2000, 4100, 3150, 4000, 3150, 4500, 3285, 3750, 3850, 2650
            ]
        }]
    });
});
}

function vote(){
    dojo.addOnLoad(function() {
    var vote_btn = dojo.byId("vote_btn");

    var total   = 0;

    
    dojo.connect(vote_btn, "onclick", function() {

      dojo.xhrPost({
        url: "../php/vote.php",
        content: {act: 'vote'},
        form: "total",
        handleAs: "json",
        load: function(response, ioArgs) {
          total = response.total;
            
          show_vote_results(total);
  
          return response;
        },
        error: function(response, ioArgs) {
          console.error("HTTP status code: ", ioArgs.xhr.status);
          return response;
        }
      });
    });

  });

  function show_vote_results(total) {
    dojo.byId("total").innerHTML = total;
  }
}

$(document).ready(function(){
  stickyHeader();

  menuFooter();

  myPlayers();

  bMore();

  moreArrow();

  personVoting();

  playList();

  clickly();

  scrollnews();

  diagram();

  vote();
});

$(window).resize(function(){
  bMore();

  moreArrow();

	menuFooter();

	clickly();

  scrollnews();
});