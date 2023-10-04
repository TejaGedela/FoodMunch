function switchOff(){
	document.getElementById('bulbimage').src=
	"https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
	document.getElementById('catimage').src=
	"https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
	document.getElementById('swicthstatus').textcontent= "switched Off";
	document.getElementById('offswitch').style.backgroundcolor= "#cbd2d9";
	document.getElementById('onswitch').style.backgroundcolor= "#22c55e";

}
function switchOn(){
	document.getElementById('bulbimage').src=
	"https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
	document.getElementById('catimage').src=
	"https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
	document.getElementById('switchstatus').textcontent="switched on";
	document.getElementById('offswitch').style.backgroundcolor= "#e12d39";
	document.getElementById("onswitch").style.backgroundcolor= "#cbd2d9";

}