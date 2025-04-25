function table() {
 	const a = parseInt(document.getElementById("num1").value);
 	const b = parseInt(document.getElementById("num2").value);
 	let display = document.getElementById("output");
 	
 	if (a > 2 && a < 10 && b > 2 && b <10){
 		let ans ="<table>";
 		for (let x=1; x<=a; x++){
 			ans +="<tr>";
 			for (let y=1;y<=b; y++){
 				ans+= "<td>" + (x*y) + "</td>";
 				}
 		ans += "</tr>"
 	}
 	ans+= "</table>";
 	display.innerHTML = ans;
 	}
 	else{
 		alert("Please enter numbers between 2 and 10");
 		display.innerHTML="";
 	}
 }