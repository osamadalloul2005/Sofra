
var menuBtn =document.getElementById("menuBtn");
var menu =document.getElementById("menu");
var headerList =document.getElementById("headerList");

menuBtn.onclick= function(){
    if(headerList.style.right=="-100%")
    {
        headerList.style.right="0";
        menu.src="images/close.png";
    }
    else
    {
        headerList.style.right="-100%";
        menu.src="images/menu.png";
    }
}