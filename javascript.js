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
	d.getElementById("oldwarr3").value=(oldwar*0.75).toFixed(2)
	d.getElementById("deadlygracer3").value=(dgrace*0.70).toFixed(2)
	d.getElementById("strflaskr3").value=(str_flask*0.70).toFixed(2)
	d.getElementById("agiflaskr3").value=(agi_flask*0.70).toFixed(2)
	d.getElementById("stamflaskr3").value=(sta_flask*0.70).toFixed(2)
	d.getElementById("intflaskr3").value=(int_flask*0.70).toFixed(2)
	d.getElementById("cauldronprice").value=(int_flask*5 + str_flask*5 + agi_flask*5 +sta_flask*5).toFixed(2)
	d.getElementById("cauldronpriceAH").value=((int_flask*5 + str_flask*5 + agi_flask*5 +sta_flask*5)*0.95).toFixed(2)
}


d.getElementById("calcbutton").onclick = calcPrices;
}
