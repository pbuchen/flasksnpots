window.onload = function(){
var d = document

function calcPrices(){
	var starlight = d.getElementById("starlight").value
	var fjarn = d.getElementById("fjarn").value
	var foxflower = d.getElementById("fox").value
	var dreamleaf = d.getElementById("dreamleaf").value
	var aethril = d.getElementById("aethril").value
	var int_flask = 7*starlight + 10*fjarn + 10*dreamleaf
	var agi_flask = 7*starlight + 10*fjarn + 10*foxflower
	var str_flask = 7*starlight + 10*aethril + 10*foxflower
	var sta_flask = 7*starlight + 10*aethril + 10*dreamleaf
	var oldwar = 2*starlight + 4*foxflower +4*fjarn
	var dgrace = 2*starlight + 4*fjarn + 4*dreamleaf


	
	d.getElementById("oldwar").value=oldwar
	d.getElementById("deadlygrace").value=dgrace
	d.getElementById("strflask").value=str_flask
	d.getElementById("agiflask").value=agi_flask
	d.getElementById("stamflask").value=sta_flask
	d.getElementById("intflask").value=int_flask
	d.getElementById("oldwarpc").value=(oldwar*0.95).toFixed(2)
	d.getElementById("deadlygracepc").value=(dgrace*0.95).toFixed(2)
	d.getElementById("strflaskpc").value=(str_flask*0.95).toFixed(2)
	d.getElementById("agiflaskpc").value=(agi_flask*0.95).toFixed(2)
	d.getElementById("stamflaskpc").value=(sta_flask*0.95).toFixed(2)
	d.getElementById("intflaskpc").value=(int_flask*0.95).toFixed(2)
}

d.getElementById("calcbutton").onclick = calcPrices;
}