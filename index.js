
// function nam(){
//     let con=document.getElementById("rewrite");
//     let cha=document.getElementById("change").value;
//     con.innerHTML=cha;
// }
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

