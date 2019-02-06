var trigger = document.getElementById("highlight2");
var close = document.getElementById("modal-close");
var modal = document.getElementById("modal-wrapper");
var dollar = document.getElementById("text");
var dollars = dollar.value;
var counter ;
var per = 70;
var progress = document.getElementById("progress");
var bubble = document.getElementById("bubble1");


	trigger.onclick = function(){
  modal.style.display = "block";

  }
  
  close.onclick = function(){
  modal.style.display = "none"
  }
  

 
   dollar.onkeyup = function(){
   var key = event.keyCode || event.charCode;
     if (dollar.value < 167  && dollar.value!= "" ){
    		counter = (dollar.value/557*100)
      	progress.style.width = per + counter + "%";
        bubble.innerHTML = "$" + (167 - dollar.value ) +" left to reach the goal!";
     }
     
    else if( key == 8 || key == 46){
    	counter = (dollar.value/557*100)
    	progress.style.width = per + counter + "%";
      bubble.innerHTML ="$" + (167 - dollar.value) +" still needed for this project" ; 
    }
     
     else if(dollar.value == 167){
     	progress.style.width = 100 + "%";
      bubble.innerHTML = "This donation will help us meet our goal!";
     }
     else if(dollar.value > 167){
     	progress.style.width = 100 + "%";
      bubble.innerHTML = "This donation will help us exceed our goal, thank you!";
     }
  }
  

  
