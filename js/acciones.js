//JavaScript
	var audio;
$(document).ready(function(e){
	$('#Principal').height($('#page').height());
	document.addEventListener("deviceready",function(){
    audio=window.plugins.LowLatencyAudio;
	audio.preloadFX('do','audio/C.mp3',function(msg){},function(msg){alert('error: '+msg);});
	audio.preloadFX('re','audio/D.mp3',function(msg){},function(msg){alert('error: '+msg);});
	audio.preloadFX('mi','audio/E.mp3',function(msg){},function(msg){alert('error: '+msg);});
	audio.preloadFX('fa','audio/F.mp3',function(msg){},function(msg){alert('error: '+msg);});
	audio.preloadFX('sol','audio/G.mp3',function(msg){},function(msg){alert('error: '+msg);});
	audio.preloadFX('la','audio/A.mp3',function(msg){},function(msg){alert('error: '+msg);});
	audio.preloadFX('si','audio/B.mp3',function(msg){},function(msg){alert('error: '+msg);});
	
	$('.nota').bind('touchstart',function(e){
		$(this).addClass('tocada');
		audio.play($(this).attr('id'));
	}).bind('touchend',function(e){
		$(this).removeClass('tocada');
	});//device
	
	
	
 },false); //deviceready
});//ready