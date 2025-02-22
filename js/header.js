// JavaScript Document

//here you place the ids of every element you want.
var ids=new Array('a1','a2','a3','b1','b2','b3','c1','c2','c3','d1','d2','d3');

function switchid(id1,id2,id3,id4){	
	hideallids();
	showdiv(id1,id2,id3,id4);
}

function hideallids(){
	//loop through the array and hide each element by id
	for (var i=0;i<ids.length;i++){
		hidediv(ids[i]);
	}		  
}

function hidediv(id) {
	//safe function to hide an element with a specified id
	if (document.getElementById) { // DOM3 = IE5, NS6
		document.getElementById(id).style.display = 'none';
	}
	else {
		if (document.layers) { // Netscape 4
			document.id.display = 'none';
		}
		else { // IE 4
			document.all.id.style.display = 'none';
		}
	}
}

function showdiv(id1,id2,id3,id4) {
	//safe function to show an element with a specified id
		  
	if (document.getElementById) { // DOM3 = IE5, NS6
		document.getElementById(id1).style.display = 'block';
		document.getElementById(id2).style.display = 'block';
		document.getElementById(id3).style.display = 'block';
		document.getElementById(id4).style.display = 'block';
	}
	else {
		if (document.layers) { // Netscape 4
			document.id1.display = 'block';
			document.id2.display = 'block';
			document.id3.display = 'block';
			document.id4.display = 'block';
		}
		else { // IE 4
			document.all.id1.style.display = 'block';
			document.all.id2.style.display = 'block';
			document.all.id3.style.display = 'block';
			document.all.id4.style.display = 'block';
		}
	}
}






