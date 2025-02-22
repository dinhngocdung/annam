// JavaScript Document

var vn = ["Trang chính", "Tổng hợp","Tìm kiếm", "Chi tiết"];
var en = ["Home page","General view", "Search", "Board"];
var fr = ["Acceuil","Vue générale","Recherche","Planche"];
var language = new Array();


function vietnam()
{
	parent.home_page.location = "vn_/home_vn.html";
	parent.general_view_page.location = "vn_/general_view_vn.html";
	parent.search_page.location = "vn_/search_vn.html";
	parent.view_page.location = "view_page/view1.html";
	language = new Array();
	for(var i = 0; i < vn.length; i++)
	{
		language[i] = vn[i];
	}
	//header_display(language);
	document.getElementById("vn_img").src= "images/vn.png";
	document.getElementById("fr_img").src= "images/fr_.png";
	document.getElementById("us_img").src= "images/us_.png";
	
	//check();
	//parent.links.location = "header.html";
}

function france()
{
	language = new Array();
	for(var i = 0; i < fr.length; i++)
	{
		language[i] = fr[i];
	}
	//header_display(language);
	document.getElementById("vn_img").src= "images/vn_.png";
	document.getElementById("fr_img").src= "images/fr.png";
	document.getElementById("us_img").src= "images/us_.png";
	parent.home_page.location = "home.html";
	parent.general_view_page.location = "general_view.html";
	parent.search_page.location = "search.html";
	parent.view_page.location = "view_page/view1.html";
	//check();
		
}

function english()
{
	language = new Array();
	for(var i = 0; i < en.length; i++)
	{
		language[i] = en[i];
	}
	//header_display(language);
	document.getElementById("vn_img").src= "images/vn_.png";
	document.getElementById("fr_img").src= "images/fr_.png";
	document.getElementById("us_img").src= "images/us.png";
	parent.home_page.location = "en_/home_en.html";
	parent.general_view_page.location = "en_/general_view_en.html";
	parent.search_page.location = "en_/search_en.html";
	parent.view_page.location = "view_page/view1.html";
	//check();
		
}

function header_display(language)
{
	document.getElementById("home_lbl").innerHTML = language[0];
	document.getElementById("general_lbl").innerHTML = language[1];
	document.getElementById("search_lbl").innerHTML = language[2];
	document.getElementById("view_lbl").innerHTML = language[3];
}

/*function check()
{
	var framesetGeneral = parent.document.getElementById("frameset_body");
	if(framesetGeneral.cols == "100%,0%,0%,0%")
	{
		document.getElementById("menuA").style.backgroundPosition = "-160px 0px";
		document.getElementById("menuB").style.backgroundPosition = "0px 0px";
		document.getElementById("menuC").style.backgroundPosition = "0px 0px";
		document.getElementById("menuD").style.backgroundPosition = "0px 0px";
	}
	else if(framesetGeneral.cols == "0%,100%,0%,0%")
	{
		document.getElementById("menuB").style.backgroundPosition = "-160px 0px";
		document.getElementById("menuA").style.backgroundPosition = "0px 0px";
		document.getElementById("menuC").style.backgroundPosition = "0px 0px";
		document.getElementById("menuD").style.backgroundPosition = "0px 0px";
	}
	else if(framesetGeneral.cols == "0%,0%,100%,0%")
	{
		document.getElementById("menuC").style.backgroundPosition = "-160px 0px";
		document.getElementById("menuA").style.backgroundPosition = "0px 0px";
		document.getElementById("menuB").style.backgroundPosition = "0px 0px";
		document.getElementById("menuD").style.backgroundPosition = "0px 0px";
	}
	else if(framesetGeneral.cols == "0%,0%,0%,100%")
	{
		document.getElementById("menuD").style.backgroundPosition = "-160px 0px";
		document.getElementById("menuA").style.backgroundPosition = "0px 0px";
		document.getElementById("menuB").style.backgroundPosition = "0px 0px";
		document.getElementById("menuC").style.backgroundPosition = "0px 0px";
	}
	
}
*/

function changeLanguageGeneralView()
{
	var frameHomePage_url = "" + parent.home_page.location;
	var url_array =  new Array();
	url_array =	frameHomePage_url.split("/");
	var url_name = "" + url_array[url_array.length -1];
	if(url_name == "home_en.html")
	{
		document.getElementById("hinh_lbl1").innerHTML = "Drawing board ";
		document.getElementById("hinh_lbl2").innerHTML = " on 700";
		
	}
	else if(url_name == "home_vn.html")
	{
		document.getElementById("hinh_lbl1").innerHTML = "Hình ";
		document.getElementById("hinh_lbl2").innerHTML = " trong số 700";
	}
	else
	{
		document.getElementById("hinh_lbl1").innerHTML = "Planches ";
		document.getElementById("hinh_lbl2").innerHTML = " sur 700";
	}
}

function changeLanguageView()
{
	var frameHomePage_url = "" + parent.home_page.location;
	var url_array =  new Array();
	url_array =	frameHomePage_url.split("/");
	var url_name = "" + url_array[url_array.length -1];
	if(url_name == "home_en.html")
	{
	//	document.getElementById("changeCSS").href = "../css/view1_en.css";
	//	document.getElementById("changeCSS6").href = "../css/view1_en.css";
	}
	else if(url_name == "home_vn.html")
	{
	//	document.getElementById("changeCSS").href = "../css/view1_vn.css";
	//	document.getElementById("changeCSS6").href = "../css/view1_vn.css";
	}
	else
	{
	//	document.getElementById("changeCSS").href = "../css/view1.css";
	//	document.getElementById("changeCSS6").href = "../css/view1.css";
	}
}


function loadPage()
{
	var framesetGeneral = parent.document.getElementById("frameset_body");
	if(framesetGeneral.cols == "100%,0%,0%,0%")
	{
			document.getElementById("menuA").style.backgroundPosition = "-160px 0px";
			document.getElementById("menuB").style.backgroundPosition = "0px 0px";
			document.getElementById("menuC").style.backgroundPosition = "0px 0px";
			document.getElementById("menuD").style.backgroundPosition = "0px 0px";
	}
	else if(framesetGeneral.cols == "0%,100%,0%,0%")
	{
			document.getElementById("menuB").style.backgroundPosition = "-160px 0px";
			document.getElementById("menuA").style.backgroundPosition = "0px 0px";
			document.getElementById("menuC").style.backgroundPosition = "0px 0px";
			document.getElementById("menuD").style.backgroundPosition = "0px 0px";
	}
	else if(framesetGeneral.cols == "0%,0%,100%,0%")
	{
			document.getElementById("menuC").style.backgroundPosition = "-160px 0px";
			document.getElementById("menuA").style.backgroundPosition = "0px 0px";
			document.getElementById("menuB").style.backgroundPosition = "0px 0px";
			document.getElementById("menuD").style.backgroundPosition = "0px 0px";
	}
	else if(framesetGeneral.cols == "0%,0%,0%,100%")
	{
			document.getElementById("menuD").style.backgroundPosition = "-160px 0px";
			document.getElementById("menuA").style.backgroundPosition = "0px 0px";
			document.getElementById("menuB").style.backgroundPosition = "0px 0px";
			document.getElementById("menuC").style.backgroundPosition = "0px 0px";
	}
	
	var string_check = "";
	string_check = "" + getURLParam("id");
	if(string_check == "7" || string_check == 7)
	{
			document.getElementById("vn_img").src= "images/vn_.png";
			document.getElementById("fr_img").src= "images/fr_.png";
			document.getElementById("us_img").src= "images/us.png";
			switchid('a2','b2','c2','d2');
	}
	else if(string_check == "8" || string_check == 8)
	{
			document.getElementById("vn_img").src= "images/vn.png";
			document.getElementById("fr_img").src= "images/fr_.png";
			document.getElementById("us_img").src= "images/us_.png";
			switchid('a3','b3','c3','d3');
	}
	else
	{
			document.getElementById("vn_img").src= "images/vn_.png";
			document.getElementById("fr_img").src= "images/fr.png";
			document.getElementById("us_img").src= "images/us_.png";
			switchid('a1','b1','c1','d1');			
	}
}

function getURLParam(strParamName){
		  var strReturn = "";
		  var strHref = window.location.href;
		  if ( strHref.indexOf("?") > -1 )
		  {
			var strQueryString = strHref.substr(strHref.indexOf("?")).toLowerCase();
			var aQueryString = strQueryString.split("&");
			for ( var iParam = 0; iParam < aQueryString.length; iParam++ )
			{
			  if (aQueryString[iParam].indexOf(strParamName.toLowerCase() + "=") > -1 )
			  {
				var aParam = aQueryString[iParam].split("=");
				strReturn = "" + aParam[1];
				break;
			  }
			}
		  }
		  return unescape(strReturn);
} 	



function loadPageHeader()
{
	parent.links.location = "header.html";
}

function loadPageHeaderEn()
{
	parent.links.location = "../header.html?open&id=7";
}

function loadPageHeaderVn()
{
	parent.links.location = "../header.html?open&id=8";
}

function checkOnMouseOver(div)
{
		document.getElementById(div).style.backgroundPosition = "-320px 0px";
	
}


function checkOnMouseOut(div1, div2, div3 ,div4)
{
	if((document.getElementById(div1).style.backgroundPosition == "0px 0px")  
		&& (document.getElementById(div2).style.backgroundPosition == "0px 0px") 
		&& (document.getElementById(div3).style.backgroundPosition == "0px 0px"))
	{
		document.getElementById(div4).style.backgroundPosition = "-160px 0px";
	}
	else
	{
		document.getElementById(div4).style.backgroundPosition = "0px 0px";
	}
}