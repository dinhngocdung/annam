// JavaScript Document

if (typeof(km_scripts) == 'undefined') var km_scripts = new Object();
km_myclass_import('../js/array.js');

if (typeof(km_scripts1) == 'undefined') var km_scripts1 = new Object();
km_myclass_import1('../js/array_index.js');


if (typeof(km_scripts2) == 'undefined') var km_scripts2 = new Object();
km_myclass_import2('../js/table_array.js');

if (typeof(km_scripts3) == 'undefined') var km_scripts3 = new Object();
km_myclass_import3('../js/table_array_index.js');



function km_myclass_import(jsFile) {
if (km_scripts[jsFile] != null) return;
var scriptElt = document.createElement('script');
scriptElt.type = 'text/javascript';
scriptElt.src = jsFile;
document.getElementsByTagName('head')[0].appendChild(scriptElt);
km_scripts[jsFile] = jsFile; // or whatever value your prefer
}

function km_myclass_import1(jsFile) {
if (km_scripts1[jsFile] != null) return;
var scriptElt1 = document.createElement('script');
scriptElt1.type = 'text/javascript';
scriptElt1.src = jsFile;
document.getElementsByTagName('head')[0].appendChild(scriptElt1);
km_scripts1[jsFile] = jsFile; // or whatever value your prefer
}


function km_myclass_import2(jsFile) {
if (km_scripts2[jsFile] != null) return;
var scriptElt2 = document.createElement('script');
scriptElt2.type = 'text/javascript';
scriptElt2.src = jsFile;
document.getElementsByTagName('head')[0].appendChild(scriptElt2);
km_scripts2[jsFile] = jsFile; // or whatever value your prefer
}

function km_myclass_import3(jsFile) {
if (km_scripts3[jsFile] != null) return;
var scriptElt3 = document.createElement('script');
scriptElt3.type = 'text/javascript';
scriptElt3.src = jsFile;
document.getElementsByTagName('head')[0].appendChild(scriptElt3);
km_scripts3[jsFile] = jsFile; // or whatever value your prefer
}

function firstLoad()
{
	document.search.search_txt.focus();
}

function checkradio(theRadio)
{
	if(theRadio.getAttribute("wasChecked") == "true")
	{
		theRadio.checked = false;
		theRadio.setAttribute("wasChecked","false");
	}
	else
	{
		theRadio.setAttribute("wasChecked","true");
	}
}


function checkSearchHTML(){
	var form = document.search;
	if(form.search_txt.value == "" || form.search_txt.value == null)
	{
		alert("Please input information for searching");
		form.search_txt.focus();
		return false;
	}
	else if(form.search_char.checked == false && form.search_table.checked == false)
	{
		alert("Please choose a type / types for searching");
		return false;
	}
	else
	{
		var text = form.search_txt.value.replace(/^\s+/,'').replace(/\s+$/,'') ;
		if(form.search_char.checked == true && form.search_table.checked == true)
		{
			searchCharacterAndTable(text);
		}
		else if(form.search_char.checked)
		{
			// search only words that user input
			searchWordToWord(text);
		}
		else if(form.search_table.checked)
		{
			searchTableAnalytic(text);
		}
	}
	return false;
	
}




function hasItem(array,value)
{
	for(x = 0; x < array.length; x++)
	{		
		if(array[x] == value)
		{
			return true;
		}
	}
	return false;
}



function changeViewFrame()
{
	var framesetView = parent.document.getElementById("frameset_body");
	framesetView.cols = "0%,0%,0%,100%";
}



function searchWordToWord(text)
{
	var form = document.search;
	text = text.toLowerCase();
	if(text.indexOf(".") > -1)
	{
		text = text.replace(".", text);
	}
	var word_array = new Array();
	var word_searched_array = new Array();
	word_array = text.split(" ");
	remember_page_array = new Array();
	var checkExist = true;
	var no = 0;
	var nu = 0;
	for(i = 0; i < word_array.length; i++)
	{
		var word_string = "" + word_array[i];
		if(word_string in data_index_array)
		{	
			for(j = 0; j < data_index_array[word_string].length; j++)
			{
					if(i == 0)
					{
						remember_page_array[no] = "" + data_index_array[word_string][j];
						no++;
					}
					else
					{
						if(hasItem(remember_page_array,data_index_array[word_string][j]))
						{
							if(!hasItem(word_searched_array,data_index_array[word_string][j]))
							{
								word_searched_array[nu] = "" + data_index_array[word_string][j];
								nu++;
							}							
						}
					}
				
				}// end for of for(j = 0; j < data_index_array[word_string].length; j++)
			
			if( i != 0)
			{
				if(word_searched_array.length >= 1)
				{
					remember_page_array = new Array();
					for(t = 0; t < word_searched_array.length; t++)
					{
						remember_page_array[t] = word_searched_array[t];
					}
					word_searched_array = new Array();
					nu = 0;
				}
				else
				{
					checkExist = false;
					break;
				}
			}
		}
		else
		{
			checkExist = false;
			break;
		}
	}
	
	if(checkExist)
	{
		var n =0;
		for(z = 0; z < remember_page_array.length; z++)
		{
			if(!hasItem(word_searched_array,remember_page_array[z]))
			{
				word_searched_array[n] = remember_page_array[z];
				n++;
			}
			 
		}
			// short array ascending
		word_searched_array.sort( function(a,b){return a-b} );
		
		var display_array = new Array();	 
		for (i=0; i < word_searched_array.length; i++) 
		{
			var sliptResult = word_searched_array[i].split(".");
			display_array[i] = new Array();
			display_array[i][0] = "" + sliptResult[0]; 
			display_array[i][1] = "" + data_normal_array[sliptResult[0]][sliptResult[1] - 1];			
		}		  
		displayCharacter(display_array);
	}
	else
	{
		document.getElementById('gridWithScroll').innerHTML = "<i>No result.</i>";
	}
}



function searchTableAnalytic(text)
{
	var form = document.search;
	text = text.toLowerCase();
	if(text.indexOf(".") > -1)
	{
		text = text.replace(".", text);
	}
	var word_array = new Array();
	var word_searched_array = new Array();
	word_array = text.split(" ");
	remember_page_array = new Array();
	var checkExist = true;
	var no = 0;
	var nu = 0;
	for(i = 0; i < word_array.length; i++)
	{
		var word_string = "" + word_array[i];
		if(word_string in data_table_index_array)
		{	
			for(j = 0; j < data_table_index_array[word_string].length; j++)
			{
					if(i == 0)
					{
						remember_page_array[no] = "" + data_table_index_array[word_string][j];
						no++;
					}
					else
					{
						if(hasItem(remember_page_array,data_table_index_array[word_string][j]))
						{
							if(!hasItem(word_searched_array,data_table_index_array[word_string][j]))
							{
								word_searched_array[nu] = "" + data_table_index_array[word_string][j];
								nu++;
							}							
						}
					}
				}// end for of for(j = 0; j < data_index_array[word_string].length; j++)
			
			if( i != 0)
			{
				if(word_searched_array.length >= 1)
				{
					remember_page_array = new Array();
					for(t = 0; t < word_searched_array.length; t++)
					{
						remember_page_array[t] = word_searched_array[t];
					}
					word_searched_array = new Array();
					nu = 0;
				}
				else
				{
					checkExist = false;
					break;
				}
			}
		}
		else
		{
			checkExist = false;
			break;
		}
	}
	
	if(checkExist)
	{
		var n =0;
		for(z = 0; z < remember_page_array.length; z++)
		{
			if(!hasItem(word_searched_array,remember_page_array[z]))
			{
				word_searched_array[n] = remember_page_array[z];
				n++;
			}
			 
		}
			// short array ascending
		word_searched_array.sort( function(a,b){return a-b} );
		
		var display_array = new Array();	 
		for (i=0; i < word_searched_array.length; i++) 
		{
			var sliptResult = word_searched_array[i].split(".");
			display_array[i] = new Array();
			display_array[i][0] = "" + sliptResult[0]; 
			display_array[i][1] = "" + data_table_normal_array[sliptResult[0]][sliptResult[1] - 1];			
		}		  
		displayTable(display_array);
	}
	else
	{
		document.getElementById('gridWithScroll').innerHTML ="<i>No result.</i>";
	}
}



function searchCharacterAndTable(text)
{
	var form = document.search;
	text = text.toLowerCase();
	if(text.indexOf(".") > -1)
	{
		text = text.replace(".", text);
	}
	
	// search table
	var word_array = new Array();
	var word_searched_array = new Array();
	word_array = text.split(" ");
	remember_page_array = new Array();
	var checkExist = true;
	var no = 0;
	var nu = 0;
	for(i = 0; i < word_array.length; i++)
	{
		var word_string = "" + word_array[i];
		if(word_string in data_table_index_array)
		{	
			for(j = 0; j < data_table_index_array[word_string].length; j++)
			{
					if(i == 0)
					{
						remember_page_array[no] = "" + data_table_index_array[word_string][j];
						no++;
					}
					else
					{
						if(hasItem(remember_page_array,data_table_index_array[word_string][j]))
						{
							if(!hasItem(word_searched_array,data_table_index_array[word_string][j]))
							{
								word_searched_array[nu] = "" + data_table_index_array[word_string][j];
								nu++;
							}							
						}
					}
				}// end for of for(j = 0; j < data_index_array[word_string].length; j++)
			
			if( i != 0)
			{
				if(word_searched_array.length >= 1)
				{
					remember_page_array = new Array();
					for(t = 0; t < word_searched_array.length; t++)
					{
						remember_page_array[t] = word_searched_array[t];
					}
					word_searched_array = new Array();
					nu = 0;
				}
				else
				{
					checkExist = false;
					break;
				}
			}
		}
		else
		{
			checkExist = false;
			break;
		}
	}
	
	
	//search character
	var word_array_char = new Array();
	var word_searched_array_char = new Array();
	word_array_char = text.split(" ");
	remember_page_array_char = new Array();
	var checkExist_char = true;
	var no_char = 0;
	var nu_char = 0;
	for(i_char = 0; i_char < word_array_char.length; i_char++)
	{
		var word_string_char = "" + word_array_char[i_char];
		if(word_string_char in data_index_array)
		{	
			for(j_char = 0; j_char < data_index_array[word_string_char].length; j_char++)
			{
					if(i_char == 0)
					{
						remember_page_array_char[no_char] = "" + data_index_array[word_string_char][j_char];
						no_char++;
					}
					else
					{
						if(hasItem(remember_page_array_char,data_index_array[word_string_char][j_char]))
						{
							if(!hasItem(word_searched_array_char,data_index_array[word_string_char][j_char]))
							{
								word_searched_array_char[nu_char] = "" + data_index_array[word_string_char][j_char];
								nu_char++;
							}							
						}
					}
				
				}// end for of for(j = 0; j < data_index_array[word_string].length; j++)
			
			if( i_char != 0)
			{
				if(word_searched_array_char.length >= 1)
				{
					remember_page_array_char = new Array();
					for(t_char = 0; t_char < word_searched_array_char.length; t_char++)
					{
						remember_page_array_char[t_char] = word_searched_array_char[t_char];
					}
					word_searched_array_char = new Array();
					nu_char = 0;
				}
				else
				{
					checkExist_char = false;
					break;
				}
			}
		}
		else
		{
			checkExist_char = false;
			break;
		}
	}
	
	
		
	
	if(checkExist == true && checkExist_char == true)
	{
		var temp_char_table_array = new Array();
		//search character
		var n_char =0;
		var temp_char_table_num = 0;
		for(z_char = 0; z_char < remember_page_array_char.length; z_char++)
		{
			if(!hasItem(word_searched_array_char,remember_page_array_char[z_char]))
			{
				word_searched_array_char[n_char] = remember_page_array_char[z_char];
				n_char++;
			}
			 
		}
			// short array ascending
		word_searched_array_char.sort( function(a,b){return a-b} );
		
		var display_array_char = new Array();	 
		for (i_char = 0; i_char < word_searched_array_char.length; i_char++) 
		{
			var sliptResult_char = word_searched_array_char[i_char].split(".");
			display_array_char[i_char] = new Array();
			display_array_char[i_char][0] = "" + sliptResult_char[0]; 
			temp_char_table_array[temp_char_table_num] = "" + sliptResult_char[0] + ".8";
			display_array_char[i_char][1] = "" + data_normal_array[sliptResult_char[0]][sliptResult_char[1] - 1];		
			temp_char_table_num++;
		}		 
		
		//search analytic
		var n =0;
		for(z = 0; z < remember_page_array.length; z++)
		{
			if(!hasItem(word_searched_array,remember_page_array[z]))
			{
				word_searched_array[n] = remember_page_array[z];
				n++;
			}
			 
		}
			// short array ascending
		word_searched_array.sort( function(a,b){return a-b} );
		
		var display_array = new Array();	 
		for (i=0; i < word_searched_array.length; i++) 
		{
			var sliptResult = word_searched_array[i].split(".");
			display_array[i] = new Array();
			display_array[i][0] = "" + sliptResult[0]; 
			temp_char_table_array[temp_char_table_num] = "" + sliptResult[0] + ".9";
			display_array[i][1] = "" + data_table_normal_array[sliptResult[0]][sliptResult[1] - 1];	
			temp_char_table_num++;
		}		  
		displayTableAndCharacter(display_array_char, display_array,temp_char_table_array);
	}
	else if(checkExist_char)
	{
		var n_char =0;
		for(z_char = 0; z_char < remember_page_array_char.length; z_char++)
		{
			if(!hasItem(word_searched_array_char,remember_page_array_char[z_char]))
			{
				word_searched_array_char[n_char] = remember_page_array_char[z_char];
				n_char++;
			}
			 
		}
			// short array ascending
		word_searched_array_char.sort( function(a,b){return a-b} );
		
		var display_array_char = new Array();	 
		for (i_char = 0; i_char < word_searched_array_char.length; i_char++) 
		{
			var sliptResult_char = word_searched_array_char[i_char].split(".");
			display_array_char[i_char] = new Array();
			display_array_char[i_char][0] = "" + sliptResult_char[0]; 
			display_array_char[i_char][1] = "" + data_normal_array[sliptResult_char[0]][sliptResult_char[1] - 1];			
		}		  
		displayCharacter(display_array_char);
	}
	else if(checkExist)
	{
		var n =0;
		for(z = 0; z < remember_page_array.length; z++)
		{
			if(!hasItem(word_searched_array,remember_page_array[z]))
			{
				word_searched_array[n] = remember_page_array[z];
				n++;
			}
			 
		}
			// short array ascending
		word_searched_array.sort( function(a,b){return a-b} );
		
		var display_array = new Array();	 
		for (i=0; i < word_searched_array.length; i++) 
		{
			var sliptResult = word_searched_array[i].split(".");
			display_array[i] = new Array();
			display_array[i][0] = "" + sliptResult[0]; 
			display_array[i][1] = "" + data_table_normal_array[sliptResult[0]][sliptResult[1] - 1];			
		}		  
		displayTable(display_array);
	}
	else
	{
		document.getElementById('gridWithScroll').innerHTML = "<i>No result.</i>";
	}
}

function displayTable(display_array)
{
	var table_string = "<table width = '100%'>";
	var number_check = 0;
	var change_type = "";
	for(o in display_array)
	{
		
		table_string += "<tr><td width='90%'>&nbsp;&nbsp;&nbsp;<a href='../view_page/view"+ display_array[o][0] +".html' onclick='changeViewFrame();loadPageHeaderEn();' target='view_page' class='tableColor'>" + display_array[o][1] + "</a></td>";
		table_string += "<td width='10%' align='left'> "+ display_array[o][0] + "</td></tr>";
	}
	table_string += "</table>";
	document.getElementById('gridWithScroll').innerHTML = table_string;
}

function displayCharacter(display_array)
{
	var table_string = "<table width = '100%'>";
	var number_check = 0;
	var change_type = "";
	for(o in display_array)
	{
		
		table_string += "<tr><td width='90%'>&nbsp;&nbsp;&nbsp;<a href='../view_page/view"+ display_array[o][0] +".html' onclick='changeViewFrame(); loadPageHeaderEn();' target='view_page' class='charColor'>" + display_array[o][1] + "</a></td>";
		table_string += "<td width='10%' align='left'> "+ display_array[o][0] + "</td></tr>";
	}
	table_string += "</table>";
	document.getElementById('gridWithScroll').innerHTML = table_string;
}

function displayTableAndCharacter(display_array_char, display_array,temp_char_table_array)
{
	var table_string = "<table width = '100%'>";
	var number_check = 0;
	var change_type = "";
	var table_no = 0;
	var char_no = 0;
	temp_char_table_array.sort( function(a,b){return a-b} );	
	for(o in temp_char_table_array)
	{
		var sliptResult = temp_char_table_array[o].split(".");
		if(sliptResult[1] == "8") // character
		{
			table_string += "<tr><td width='90%'>&nbsp;&nbsp;&nbsp;<a href='../view_page/view"+ display_array_char[char_no][0] +".html' onclick='changeViewFrame(); loadPageHeaderEn();' target='view_page' class='charColor'>" + display_array_char[char_no][1] + "</a></td>";
			table_string += "<td width='10%' align='left'> "+ display_array_char[char_no][0] + "</td></tr>";
			char_no++;
		}
		else // table analytic
		{
			table_string += "<tr><td width='90%'>&nbsp;&nbsp;&nbsp;<a href='../view_page/view"+ display_array[table_no][0] +".html' onclick='changeViewFrame(); loadPageHeaderEn();' target='view_page' class='tableColor'>" + display_array[table_no][1] + "</a></td>";
			table_string += "<td width='10%' align='left'> "+ display_array[table_no][0] + "</td></tr>";
			table_no++;
		}
	}
	table_string += "</table>";
	document.getElementById('gridWithScroll').innerHTML = table_string;
}
