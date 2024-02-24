function color() {
	if (document.getElementById("theme").innerHTML == "Dark Mode") {
		document.getElementById("bod").style = "color:white;background-color:#000033;";
		document.getElementById("theme").innerHTML = "Light Mode";
		var links = document.getElementsByTagName("a");
		for (var i = 0; i < links.length; i++) {
			links[i].style.color = "red";
		}
	}
	else {
		document.getElementById("bod").style = "color:black;background-color:white;";
		document.getElementById("theme").innerHTML = "Dark Mode";
		var links = document.getElementsByTagName("a");
		for (var i = 0; i < links.length; i++) {
			links[i].style.color = "blue";
		}
	}
}