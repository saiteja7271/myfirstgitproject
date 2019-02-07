function getfile(file,callback)
{
	var htp=new XMLHttpRequest();
	htp.overrideMimeType("application/json");
	htp.open('GET',file,true);
	htp.onreadystatechange=function()
	{
		if(htp.readyState===4 && htp.status=='200')
		{
			callback(htp.responseText);
		}
	}
	htp.send(null);
}
getfile("dynamic.json",function(text)
{
	var data=JSON.parse(text);
	console.log(data);
	profile(data.profile);
	career(data.career);
	education(data.education);
	languages(data.languages);
});
var left=document.querySelector(".left");
function profile(p)
{
   var pimg=document.createElement("img");
   pimg.src=p.img;
   left.appendChild(pimg);

   var name=document.createElement("h1");
   name.textContent=p.name;
   left.appendChild(name);

   var roll=document.createElement("h3");
   roll.textContent=p.rollnumber;
   left.appendChild(roll);

   var chr=document.createElement("hr");
   left.appendChild(chr);

   var college=document.createElement("h3");
   college.textContent=p.college;
   left.appendChild(college);

   var pla=document.createElement("h3");
   pla.textContent=p.place;
   left.appendChild(pla);
}
var right=document.querySelector(".right");
function career(c)
{
	var car=document.createElement("h3");
	car.textContent=c.info;
	right.appendChild(car);
	var chr=document.createElement("hr");
	right.appendChild(chr);
}
function education(e)
{
	var ed=document.querySelector("h2");
	ed.innerHTML="educational details:";
	right.appendChild(ed);
	var etable=document.createElement("table");
	etable.border="1";
	 var tr1="<tr><td>sno</td><td>class</td><td>institution</td><td>yop</td></tr>";
	 var tr2="";
	 for (var i=0;i<e.length;i++) {
	 	tr2=tr2+"<tr><td>"+e[i].sno+"</td><td>"+e[i].class+"</td><td>"+e[i].institution+"</td><td>"+e[i].yop+"</td></tr>";

	 }
	 etable.innerHTML=tr1+tr2;
	 right.appendChild(etable);
	 var chr=document.createElement("hr");
	 right.appendChild(chr);
}
function languages(lan)
{
	var ed=document.createElement("h2");
	ed.innerHTML="languages known:";
	right.appendChild(ed); 
	var ul=document.createElement("ul");
	right.appendChild(ul);
	for(i=0;i<lan.length;i++)
	{  
		var su=document.createElement("li");
		su.textContent=lan[i].lang;
		ul.appendChild(su);
	}

}