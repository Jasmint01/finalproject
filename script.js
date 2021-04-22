// username: cool 
// password:password
var list=[];
function validate(){
 var valEle=document.body.querySelector(".valMess");
  var username=document.body.querySelector(".username").value;
  var password=document.body.querySelector(".password").value;
if(username==="cool"){
  valEle.innerHTML=""
  document.body.querySelector(".username").style.visibility="hidden";
  document.body.querySelector(".password").style.visibility="hidden";
  document.body.querySelector(".validate").style.visibility="hidden";
    document.body.querySelector(".write").style.visibility="visible";
  document.body.querySelector(".submit").style.visibility="visible";
  document.body.querySelector(".nav").style.visibility="visible";
}else{
  valEle.innerHTML="Invalid Username or Password. Try Again."
}  
if(password==="password"){
  valEle.innerHTML=""
   document.body.querySelector(".username").style.visibility="hidden";
  document.body.querySelector(".password").style.visibility="hidden";
  document.body.querySelector(".validate").style.visibility="hidden";
    document.body.querySelector(".write").style.visibility="visible";
    document.body.querySelector(".submit").style.visibility="visible";
  document.body.querySelector(".nav").style.visibility="visible";
}else{
  valEle.innerHTML="Invalid Username or Password. Try Again."
}    
}
document.body.querySelector(".validate").addEventListener("click",function(){
  validate();
})

document.body.querySelector(".nav").style.visibility="hidden";
 var write=document.body.querySelector(".write").style.visibility="hidden";

function renderList(){
  var listEle=document.body.querySelector(".list");
  listEle.innerHTML="";
  for(var i=0; i<list.length; i++){
    var element=document.createElement("div");
    element.innerHTML=list[i];
    listEle.appendChild(element);
  }
}
function submit(){
   var text=document.body.querySelector(".itemText").value;
   var importance=document.body.querySelector(".importance").value;
  if(text.length>0&&importance.length>0){
      list.push("Student Name: "+text+  "  Grade: "+importance+"%");
    document.body.querySelector(".itmMess").innerHTML="" ;
  }else{
    window.alert("Not enough characters.");
  }
  renderList();
  if (isNaN(importance)){
    window.alert("Make sure you enter a number for the grade. Return to Add Grade to try again.");
    document.body.querySelector(".list").innerHTML="" ;
  }
  GradePage();
}

document.body.querySelector(".submit").addEventListener("click",function(){
  submit();
})
renderList();
var nav= document.body.querySelector(".nav");
var display= document.body.querySelector(".display");
var pages= [
    {
    title:"Grade View",
    content:""
  },
    {
    title:"Add Grade",
    content:""
  }
]
for(var i=0; i<pages.length; i++){
new pageMaker(pages[i]);
}

function pageMaker(pg){
  this.button=document.createElement("button");
  this.button.addEventListener("click", function(){    
   writestuff(pg.content,pg.title);
  })
  this.button.innerHTML=pg.title;
  nav.appendChild(this.button);
}
function writestuff(stuff,pg){
  if(pg=="Grade View") {
  GradePage();  
  }if (pg=="Add Grade") {
    AddPage();
  }
}
function GradePage(){
display.innerHTML="";
var heading = document.createElement("h1");
var subheading=document.createElement("h3");
  heading.innerHTML="Grades";
  subheading.innerHTML="Here you can view student grades."
  display.appendChild(heading);
  display.appendChild(subheading);
     document.body.querySelector(".write").style.visibility="hidden";
    document.body.querySelector(".submit").style.visibility="hidden";
}
function AddPage(){
display.innerHTML="";
var addheading = document.createElement("h1");
var titleheading = document.createElement("h3");  
  addheading.innerHTML="Add grade";
  titleheading.innerHTML="Input a student name and grade from 0-100.";
  display.appendChild(addheading);
  display.appendChild(titleheading);
     document.body.querySelector(".write").style.visibility="visible";
    document.body.querySelector(".submit").style.visibility="visible";
}
writestuff(pages[0].content,"Grade","Add Grade");