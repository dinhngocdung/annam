// JavaScript Document

function firstLoad()
{
	checkVisibleButton();
}

function first()
{
	document.getElementById("check_no").value = 20;
	document.getElementById("info").innerHTML = "1-20";
	checkVisibleButton();
}

function last()
{
	document.getElementById("check_no").value = 700;
	document.getElementById("info").innerHTML = "681-700";
	checkVisibleButton();
}

function increase()
{
	var check_no_string = document.getElementById("check_no").value;
	var check_no_num = parseInt(check_no_string);
	if(check_no_num < 700)
	{
		document.getElementById("info").innerHTML = (check_no_num + 1) + "-" + (check_no_num + 20);	
		document.getElementById("check_no").value = check_no_num + 20;
	}
	checkVisibleButton();
}

function decrease()
{
	var check_no_string = document.getElementById("check_no").value;
	var check_no_num = parseInt(check_no_string);
	if(check_no_num >= 20)
	{
		document.getElementById("info").innerHTML = (check_no_num - 39) + "-" + (check_no_num - 20);	
		document.getElementById("check_no").value = check_no_num - 20;
	}
	checkVisibleButton();
}

function checkVisibleButton()
{
	var check_no_string = document.getElementById("check_no").value;
	var check_no_num = parseInt(check_no_string);
	if(check_no_num == 700)
	{
		document.getElementById("next").src = "images/next_.gif";
		document.getElementById("last").src = "images/last_.gif";
		document.getElementById("next").disabled = true; 
		document.getElementById("last").disabled = true; 
		document.getElementById("back").src = "images/back.gif";
		document.getElementById("first").src = "images/first.gif";
		document.getElementById("back").disabled = false; 
		document.getElementById("first").disabled = false;
	}
	else if(check_no_num == 20)
	{
		document.getElementById("back").src = "images/previous_.gif";
		document.getElementById("first").src = "images/first_.gif";
		document.getElementById("back").disabled = true; 
		document.getElementById("first").disabled = true; 
		document.getElementById("next").src = "images/next.gif";
		document.getElementById("last").src = "images/last.gif";
		document.getElementById("next").disabled = false; 
		document.getElementById("last").disabled = false; 
	}
	else 
	{
		document.getElementById("next").src = "images/next.gif";
		document.getElementById("last").src = "images/last.gif";
		document.getElementById("back").src = "images/back.gif";
		document.getElementById("first").src = "images/first.gif";
		document.getElementById("back").disabled = false; 
		document.getElementById("first").disabled = false;
		document.getElementById("next").disabled = false; 
		document.getElementById("last").disabled = false; 
	}
}