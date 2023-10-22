
preload();
function preload(){
    let newname=window.location.search;
    let newname1=new URLSearchParams(newname);
    let newname2=newname1.get('name');
    let newname3=document.getElementById("n1");
    let newname4=document.getElementById("n2");
    newname3.innerHTML=newname2;
    newname4.innerHTML=newname2;
}


function pre(){
    let newname=document.getElementById("entername").value;
    let oldname=document.getElementById("n1");
    let oldname1=document.getElementById("n2");
    oldname.innerHTML=newname;
    oldname1.innerHTML=newname;
}

function share()
{
    let newname=document.getElementById("entername").value;
    let sha=document.getElementById("lin");
    sha.style.display="block";
    sha.value=`https://deviladk.github.io/diwali/?name=${newname}`;
}


var x=0;
function rot(y)
{
    x=x+y;
    let ele=document.getElementById("rote");
    ele.style.transform=`rotate(${x}deg)`;
    ele.style.transition="all 5s ease-in-out";
}
