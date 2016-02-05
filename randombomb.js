
var isNull = true;
while(isNull){
	var name = prompt("Please enter your name.")
	if(name){
		isNull = false;
	}
}

var seconds_left = 20;
var interval = setInterval(function() {
    document.getElementById('timer_div').innerHTML = "<h3>Timer: "+--seconds_left+"</h3>";
    console.log("test");
    if (seconds_left <= 0)
    {
        document.getElementById('timer_div').innerHTML = '<h3>Time out!</h3>';
        clearInterval(interval);

    	for(var k = 1; k<=6;k++){
			for(var l = 1; l<=6 ;l++){
				var temp = document.getElementById("tile"+k+l)
				if(temp.className=="col-md-2 decor bomb"){
					temp.innerHTML="BOOM BITCH";
				} else {
					temp.innerHTML="NO BOMB KRUB EI";
					}
			}
		}

    }
}, 1000);

document.getElementById("name").innerHTML = "Your name: "+name;
var bombs = new Array(36);
var count = 0;
for( var i = 0 ; i< bombs.length; i++){
	console.log(count);
	bombs[i] = Math.round(Math.random());
	if(count > 10){
		bombs[i] = 0;
		continue;

	}
	if(bombs[i]==1){
		count++;
	}
}
console.log(bombs);
var j = 0
for(var k = 1; k<=6;k++){
	for(var l = 1; l<=6 ;l++){
		var div = document.getElementById("tile"+k+l);
		div.className = div.className + " decor"
		if(bombs[j]){
			div.className = div.className+" bomb";
		}
		j++;
	}
}

console.log(bombs.length);
var sc = 0
for(var k = 1; k<=6;k++){
	for(var l = 1; l<=6 ;l++){
		document.getElementById("tile"+k+l).addEventListener("click",function(){
			console.log("clicked");
			if(this.className=="col-md-2 decor bomb"){
				sc+=1;
				this.innerHTML="BOOM BITCH";
				document.getElementById("score").innerHTML = "Your score: "+sc;
			} else {
				this.innerHTML="NO BOMB KRUB EI";
			}
		});
	}
}
