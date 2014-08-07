//JavaScript
	var audio
$(document).ready(function(e){
	$ ("#principal").height ($("#page").height())  ;
	document.addEventListener("deviceready",function(){
audio=window.plugins.lowlatencyAudio;
audio.preoladFX('do','audio/C.mp3',function (msg) {},
function(msg){alert ('error: '+ msg);});
audio.preoladFX('re','audio/D.mp3',function (msg) {},
function(msg){alert ('error: '+ msg);});
audio.preoladFX('mi','audio/E.mp3',function (msg) {},
function(msg){alert ('error: '+ msg);});
audio.preoladFX('fa','audio/F.mp3',function (msg) {},
function(msg){alert ('error: '+ msg);});
audio.preoladFX('sol','audio/G.mp3',function (msg) {},
function(msg){alert ('error: '+ msg);});
audio.preoladFX('la','audio/A.mp3',function (msg) {},
function(msg){alert ('error: '+ msg);});
audio.preoladFX('si','audio/B.mp3',function (msg) {},
function(msg){alert ('error: '+ msg);});
$ ('.nota').bind('touchstart',function (e) {
	$(this).addClass('tocada');
	audio.play($(this).attr('id'));
}).bind('touched',function(e){
	$(this).removeClass('tocada');
});






 },false); //deviceready
});//ready