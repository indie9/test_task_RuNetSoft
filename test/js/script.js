
var showCount=0;
var showButton=document.getElementById('showMore_button');
var collContent=document.getElementById('collapse_Content');
function showMore(){
    switch(showCount){
        case 0:
            collContent.setAttribute('id','collapse_Content_visible');
            showButton.innerHTML='Свернуть';
            showCount=1;
            break;
        case 1:
            collContent.setAttribute('id','collapse_Content');
            showButton.innerHTML='Развернуть';
            showCount=0;
            break;
    }
 
}

var arrL=document.getElementById('arrow_left');
var arrR=document.getElementById('arrow_right');

var i=1;
var cards = document.getElementsByClassName('situation_item');
cards[2].style.display="none";
cards[3].style.display="none";

function rrol(){
    if (window.innerWidth>768){
        i++;
        arrL.setAttribute('onclick','lrol()');
        if (i==cards.length){
            arrR.removeAttribute('onclick'); 
            i--;   
        } else {
            cards[i].style.display="";
            cards[i-2].style.display="none";
            
        }
    } else{
        i++;
        arrL.setAttribute('onclick','lrol()');
        if (i>cards.length){
            arrR.removeAttribute('onclick'); 
            i--;   
        } else {
            cards[i-1].style.display="";
            cards[i-2].style.display="none";
            
        }
    }
   
}
function lrol(){
    i--;
    arrR.setAttribute('onclick','rrol()'); 
    if (window.innerWidth>768){
        
        if (i==0){
            arrL.removeAttribute('onclick');   
            i++;   
        } else {
            cards[i-1].style.display="";
            cards[i+1].style.display="none";  
        }
    } else{
       
        if (i==0){
            arrL.removeAttribute('onclick');  
            i++;   
        } else {
            cards[i-1].style.display="";
            cards[i].style.display="none";      
        }
    }


}





var arrLBot=document.getElementById('arrow_left_bot');
var arrRBot=document.getElementById('arrow_right_bot');
var j=1;
var cardsBot = document.getElementsByClassName('service_item');

cardsBot[3].style.display="none";
cardsBot[4].style.display="none";
cardsBot[5].style.display="none";

if (window.innerWidth<1440){
    cardsBot[2].style.display="none";
}
if (window.innerWidth<769){
    cardsBot[1].style.display="none";
    cards[1].style.display="none";
}

function rrolBot(){
    j++;
    arrLBot.setAttribute('onclick','lrolBot()');
    if (window.innerWidth>1440){
       
        
        if (j==cardsBot.length-1){
            arrRBot.removeAttribute('onclick'); 
            j--;   
        } else {
            cardsBot[j+1].style.display="";
            cardsBot[j-2].style.display="none";  
        }
    } else if (window.innerWidth>767){
        if (j==cardsBot.length){
            arrRBot.removeAttribute('onclick'); 
            j--;   
        } else {
            cardsBot[j].style.display="";
            cardsBot[j-2].style.display="none";  
        }
    } else {
        if (j==cardsBot.length+1){
            arrRBot.removeAttribute('onclick'); 
            j--;   
        } else {
            cardsBot[j-1].style.display="";
            cardsBot[j-2].style.display="none";  
        }
    }
}

function lrolBot(){
    j--;
    arrRBot.setAttribute('onclick','rrolBot()'); 
    if (window.innerWidth>1440){
       
        if (j==0){
            arrLBot.removeAttribute('onclick');   
            j++; 
        } else {
            cardsBot[j-1].style.display="";
            cardsBot[j+2].style.display="none";
        }
    } else if (window.innerWidth>767){
        if (j==0){
            arrLBot.removeAttribute('onclick');   
            j++; 
        } else {
            cardsBot[j-1].style.display="";
            cardsBot[j+1].style.display="none";
        }
    } else {
        if (j==0){
            arrLBot.removeAttribute('onclick');   
            j++; 
        } else {
            cardsBot[j-1].style.display="";
            cardsBot[j].style.display="none";
        }
    }

}


let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.navbar');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});