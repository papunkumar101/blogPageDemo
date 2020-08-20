var liveTime=setInterval(liveClock,1000)
function liveClock(){
  var time= new Date();
  /*var onlyTime=*/document.getElementById('time').innerHTML='Live Time :'+ time.toLocaleTimeString();
  document.getElementById('date').innerHTML='date :'+time.toLocaleDateString();
}
/*___________Image part__________*/
function firstImage(){
  var fi=document.getElementById('images').src='tenor.gif';
}

function secondImage(){
  document.getElementById('images').src='tenor2a.gif';
}
function thirdImage(){
  document.getElementById('images').src='tenor3.gif';
}
function fourthImage(){
  document.getElementById('images').src
  ='tenor4.gif';
} 
/*____________loop__________*/ 
 
function myfun(){
var select= document.getElementById('plz').value;
if(select>=4 && select<8){
  firstImage();
}
else if(select>=9 && select<12){
 secondImage();
}
else if (select >=12  && select < 6) {
thirdImage();
}
else if (select >= 6 && select < 4) {
fourthImage();
}
else{
  fourthImage();
}
}