// JavaScript Document

function changeMenuVisibleA()
{
	document.getElementById("menuA").style.backgroundPosition = "-160px 0px";
	document.getElementById("menuB").style.backgroundPosition = "0px 0px";
	document.getElementById("menuC").style.backgroundPosition = "0px 0px";
	document.getElementById("menuD").style.backgroundPosition = "0px 0px";
}

function changeMenuVisibleB()
{
	document.getElementById("menuB").style.backgroundPosition = "-160px 0px";
	document.getElementById("menuA").style.backgroundPosition = "0px 0px";
	document.getElementById("menuC").style.backgroundPosition = "0px 0px";
	document.getElementById("menuD").style.backgroundPosition = "0px 0px";
}

function changeMenuVisibleC()
{
	document.getElementById("menuC").style.backgroundPosition = "-160px 0px";
	document.getElementById("menuA").style.backgroundPosition = "0px 0px";
	document.getElementById("menuB").style.backgroundPosition = "0px 0px";
	document.getElementById("menuD").style.backgroundPosition = "0px 0px";
}

function changeMenuVisibleD()
{
	document.getElementById("menuD").style.backgroundPosition = "-160px 0px";
	document.getElementById("menuA").style.backgroundPosition = "0px 0px";
	document.getElementById("menuB").style.backgroundPosition = "0px 0px";
	document.getElementById("menuC").style.backgroundPosition = "0px 0px";
}

function changeHomeFrame()
{
	var framesetHome = parent.document.getElementById("frameset_body");
	framesetHome.cols = "100%,0%,0%,0%";
	//document.getElementById("").style.
}


function changeGeneralFrame()
{
	var framesetGeneral = parent.document.getElementById("frameset_body");
	framesetGeneral.cols = "0%,100%,0%,0%";
}


function changeSearchFrame()
{
	var framesetSearch = parent.document.getElementById("frameset_body");
	framesetSearch.cols = "0%,0%,100%,0%";	
}

function changeViewFrame()
{
	var framesetView = parent.document.getElementById("frameset_body");
	framesetView.cols = "0%,0%,0%,100%";
	//parent.links.location = "header.html?open&id=4";
	//changeMenuVisibleD();
}


