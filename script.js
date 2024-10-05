// loader
var myVar;

loader=()=>{
    myVar = setTimeout(showPage, 3000);
}
showPage=()=>{
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}