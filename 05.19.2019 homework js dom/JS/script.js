var mainTab = document.querySelector("#newTab");
var infoHome = document.querySelector("#change1");
var infoServices = document.querySelector("#change2");
var infoAbout = document.querySelector("#change3");
var infoContact = document.querySelector("#change4");

var click1=document.querySelector(".change1")
var click2=document.querySelector(".change2")
var click3=document.querySelector(".change3")
var click4=document.querySelector(".change4")


click1.addEventListener("click",function(){
     infoHome.classList.toggle("newChangeOne");
     click1.classList.toggle("newChangeTwo");
     infoServices.classList.remove("newChangeOne")
    click2.classList.remove("newChangeTwo")
    infoAbout.classList.remove("newChangeOne")
    click3.classList.remove("newChangeTwo")
    infoContact.classList.remove("newChangeOne");
    click4.classList.remove("newChangeTwo");
     
})

click2.addEventListener("click",function(){
    infoServices.classList.toggle("newChangeOne");
    click2.classList.toggle("newChangeTwo");
    infoHome.classList.remove("newChangeOne")
    click1.classList.remove("newChangeTwo")
    infoAbout.classList.remove("newChangeOne")
    click3.classList.remove("newChangeTwo")
    infoContact.classList.remove("newChangeOne");
    click4.classList.remove("newChangeTwo");
    
     
})


click3.addEventListener("click",function(){
    infoAbout.classList.toggle("newChangeOne");
    click3.classList.toggle("newChangeTwo");
    infoServices.classList.remove("newChangeOne")
    click2.classList.remove("newChangeTwo")
    infoHome.classList.remove("newChangeOne")
    click1.classList.remove("newChangeTwo")
    infoContact.classList.remove("newChangeOne");
    click4.classList.remove("newChangeTwo");

})


click4.addEventListener("click",function(){
    infoContact.classList.toggle("newChangeOne");
    click4.classList.toggle("newChangeTwo");
    infoServices.classList.remove("newChangeOne")
    click2.classList.remove("newChangeTwo")
    infoHome.classList.remove("newChangeOne")
    click1.classList.remove("newChangeTwo")
    infoAbout.classList.remove("newChangeOne")
    click3.classList.remove("newChangeTwo")
})

