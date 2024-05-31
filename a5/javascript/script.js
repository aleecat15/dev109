var myImages =["https://wallpapers.com/images/hd/funny-cute-animals-jx4uj1opdoli2wpp.jpg", "https://t3.ftcdn.net/jpg/06/24/60/74/360_F_624607440_KOxghj1Ly2vZuD3cDXULwt3I0BRPDc2t.jpg","https://www.simplyrecipes.com/thmb/Fcmmaes0w7YULxi6BO1jc0_asfM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-20-Min-Lunch-Recipes-LEAD-1c3e69f3eb244880895cc0749a38b41d.jpg","https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjEqnOpoXPu84Ubrdt9abBFEc6kxNGR5B_Wi6I2yCxZ0AN4wAjAfp-HP2FUNZRjKPQNvA3J5T6jlqTQNIH2WWQg5BB_quBQYirePbLIj3RhOVf94-DyCBoIdnru3JdCPEC8q7y6Cphh8fY/s1600/funny-animals-308-01.jpg","https://hips.hearstapps.com/hmg-prod/images/family-quotes-1573234196.jpg?crop=0.667xw:1.00xh;0.0737xw,0&resize=1200:*"];


var captionImages =["Laugh","Love","Lunch","Happiness","Family"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 

//AutoSlide
function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}


setInterval(autoSlide,2000); // Next
