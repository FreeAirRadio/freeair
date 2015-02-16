function stickyHeader(){
  var fixed = document.getElementsByTagName("header");
  $(fixed).sticky({ topSpacing: 0 });
}

function menuFooter(){

var menu = document.getElementsByTagName("menu");
   if (document.body.clientWidth < 620){
    	$("menu").hide();
      $('.b-menu').click(function(){
        $('.b-menu').each(function() {
          $(this).next(':visible').stop().slideToggle("normal");
        });
        $(this).next().stop().slideToggle("normal");
		  });
    } else {
      $("menu").show();
      $('.b-menu').unbind('click');
    }
}

function myPlayers(){
  var options = {
    swfPath: "/js",
    supplied: "mp3,oga",
    globalVolume: true,
    play: function() { 
      $(this).jPlayer("pauseOthers");
    },
    wmode: "window",
    globalVolume: true,
    smoothPlayBar: true,
    noVolume: false,
    keyEnabled: true,
  };

  $("#jquery_jplayer_1").jPlayer(options, {
    ready: function () {
      $(this).jPlayer("setMedia", {
        mp3: "audio/Rammstein-Du_riechst_so_gut.mp3"
      });
    },
    cssSelectorAncestor: "#jp_container_1",
    timeupdate: function(event) {
      var status = event.jPlayer.status,
      remaining = status.duration - status.currentTime;
      $('.jtimer').text($.jPlayer.convertTime(remaining));  
    }
  });

  $("#jquery_jplayer_2").jPlayer(options,{
    ready: function () {
      $(this).jPlayer("setMedia", {
        mp3: "audio/Kitniss-Derevo_Viselnika.mp3"
      });
    },
  	cssSelectorAncestor: "#jp_container_2",
    timeupdate: function(event) {
      var status = event.jPlayer.status,
      remaining = status.duration - status.currentTime;
      $('.jtimer2').text($.jPlayer.convertTime(remaining));  
    }
  });

  $("#jquery_jplayer_3").jPlayer(options,{
    ready: function () {
      $(this).jPlayer("setMedia", {
        mp3: "audio/Bi2-Serebro.mp3"
      });
    },
    cssSelectorAncestor: "#jp_container_3",
    timeupdate: function(event) {
      var status = event.jPlayer.status,
      remaining = status.duration - status.currentTime;
      $('.jtimer3').text($.jPlayer.convertTime(remaining));  
    }
  });

  $("#jquery_jplayer_4").jPlayer(options,{
    ready: function () {
      $(this).jPlayer("setMedia", {
        mp3: "audio/Nickelback-Edge_Of_A_Revolution.mp3"
      });
    },
      cssSelectorAncestor: "#jp_container_4",
    timeupdate: function(event) {
      var status = event.jPlayer.status,
      remaining = status.duration - status.currentTime;
      $('.jtimer4').text($.jPlayer.convertTime(remaining));  
    }
  });

  $("#jquery_jplayer_5").jPlayer(options,{
    ready: function () {
      $(this).jPlayer("setMedia", {
        mp3: "audio/Bi2-Serebro.mp3"
      });
    },
    cssSelectorAncestor: "#jp_container_5",
    timeupdate: function(event) {
      var status = event.jPlayer.status,
      remaining = status.duration - status.currentTime;
      $('.jtimer5').text($.jPlayer.convertTime(remaining));  
    }
  });

  $("#jquery_jplayer_6").jPlayer(options,{
    ready: function () {
      $(this).jPlayer("setMedia", {
        mp3: "audio/Kitniss-Derevo_Viselnika.mp3"
      });
    },
    cssSelectorAncestor: "#jp_container_6",
    timeupdate: function(event) {
      var status = event.jPlayer.status,
      remaining = status.duration - status.currentTime;
      $('.jtimer6').text($.jPlayer.convertTime(remaining));  
    }
  });
}

function bMore(){
  var heightBanner = $('.item-banner').height();
  var heightFont = $('.item-height').height();
  var heightMore = $('.b-more').height();
  var heightDJ = $('.item-banner').height() - heightFont - heightMore;
  var heightDJbig = $('.item-banner').height() - heightFont - heightMore - heightMore;
  if (document.body.clientWidth > 602){
    $('.b-dj-ul').css({'height':heightDJ});
  }
  $(".arrow-hide-dj").hide();
  $(".arrow-down-dj").click(function(){
      $(".b-dj-ul").stop().animate({scrollTop:'+=' + 100 + 'px'});
      $(".arrow-hide-dj").show();
      $('.b-dj-ul').css({'height':heightDJbig});
    });
    $(".arrow-top-dj").click(function(){
      $(".b-dj-ul").stop().animate({scrollTop: "0"});
        $(".arrow-hide-dj").hide();
        $('.b-dj-ul').css({'height':heightDJ});
    });
}

function moreArrow(){
  var heightPlus = $('.item-block-right').outerHeight();
  var heightFavorite = $('.b-title-favorite').outerHeight();
  var heightMoreA = $('.b-more').height();
  var heightUl = $('.item-block-left').height() - heightFavorite - heightMoreA - heightPlus;
  var heightUlbig = $('.item-block-left').height() - heightFavorite - heightMoreA - heightMoreA - heightPlus;
  if (document.body.clientWidth > 603){
    $('.b-faces-voting').css({'height':heightUl});
  }
  $(".arrow-hide").hide();
  $(".arrow-down").click(function(){
    $(".b-faces-voting").stop().animate({scrollTop:'+=' + 100 + 'px'});
    $(".arrow-hide").show();
    $('.b-faces-voting').css({'height':heightUlbig});
  });
  $(".arrow-top").click(function(){
    $(".b-faces-voting").stop().animate({scrollTop: "0"});
    $(".arrow-hide").hide();
    $('.b-faces-voting').css({'height':heightUl});
  });
}

function gradient(){
  var heightGradient = $('#horiz_container_inner').outerHeight();
  $('.gradient-left').css({'height':heightGradient});
  $('.gradient-right').css({'height':heightGradient});
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
            zoomType: 'x',
            backgroundColor:'#f58271'
        },
        colors: ['#fff'],
        title: {
            text: 'Popularity',
            align: 'left',
            style: {
              color: '#c75545'
            }
        },
        xAxis: {
            type: 'datetime',
            gridLineWidth:0,
            lineColor: 'none',
            tickColor: 'none',
            labels: {
                enabled: false
            },
            plotLines: [{
                color: '#c16558',
                width: 10,
                value: 0
            }]
        },
        yAxis: {
            title: {
                text: null
            },
            gridLineWidth:0,
            step: 5000,
            tickPositions: [1000, 2000, 3000, 4000, 5000],
            tickColor: '#a44b3f',
            tickWidth: 1,
            tickmarkPlacement: 'on',
            minorGridLineWidth: 0,
            minorTickInterval: 200,
            minorTickColor: '#a44b3f',
            minorTickWidth: 1,
            minorTickLength: 5,
            labels: {
              style: {
                fontSize:'8',
                color:"#fff"
              }
            },
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
                        [0, 'rgba(255,255,255,.7)'],
                        [1, 'rgba(255,255,255,.05)']
                    ]
                },

                lineWidth: 0,

                threshold: null
            },
            series: {
                marker: {
                    states: {
                        hover: {
                            enabled: false
                        }
                    }
                }
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

  gradient();
});

$(window).load(function() {
  bMore();
});

$(window).resize(function(){
  bMore();

  moreArrow();

	menuFooter();

	clickly();

  scrollnews();

  gradient();
});