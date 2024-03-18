  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

            // Check if the viewport width is less than or equal to 768 pixels
            if (viewportWidth >= 993) {
              if ( window.getComputedStyle(document.getElementById("firstTab")).display === 'block' ){
     document.getElementById("s-bookmark").classList.add("borderclass");
} else if(window.getComputedStyle(document.getElementById("SecondTab")).display==='block'){
    
    document.getElementById("speedy").classList.add("borderclass");
} else if(window.getComputedStyle(document.getElementById("ThirdTab")).display==='block'){
    
    document.getElementById("Easy").classList.add("borderclass");
}

    }

if ( window.getComputedStyle(document.getElementById("firstTab")).display === 'block' ){
     document.getElementById("s-bookmark").classList.add("borderclass");
} else if(window.getComputedStyle(document.getElementById("SecondTab")).display==='block'){
    
    document.getElementById("speedy").classList.add("borderclass");
} else if(window.getComputedStyle(document.getElementById("ThirdTab")).display==='block'){
    
    document.getElementById("Easy").classList.add("borderclass");
}



document.getElementById("s-bookmark").addEventListener("click",function(event){
    event.preventDefault();
    if( window.getComputedStyle(document.getElementById("firstTab")).display==='none'){
        
        document.getElementById("s-bookmark").classList.add("borderclass");
       document.getElementById("firstTab").style.display='block';
        document.getElementById("SecondTab").style.display="none";
        document.getElementById("ThirdTab").style.display="none";
        document.getElementById("speedy").classList.remove("borderclass");
        document.getElementById("Easy").classList.remove("borderclass");
    } 
    
})

document.getElementById("speedy").addEventListener("click",function(event){
    event.preventDefault();
    if( window.getComputedStyle(document.getElementById("SecondTab")).display==='none'){
        
        document.getElementById("s-bookmark").classList.remove("borderclass");
       document.getElementById("firstTab").style.display='none';
        document.getElementById("SecondTab").style.display="block";
        document.getElementById("ThirdTab").style.display="none";
        document.getElementById("speedy").classList.add("borderclass");
        document.getElementById("Easy").classList.remove("borderclass");
    } 
    
})

document.getElementById("Easy").addEventListener("click",function(event){
    event.preventDefault();
    if( window.getComputedStyle(document.getElementById("ThirdTab")).display==='none'){
        
        document.getElementById("s-bookmark").classList.remove("borderclass");
       document.getElementById("firstTab").style.display='none';
        document.getElementById("SecondTab").style.display="none";
        document.getElementById("ThirdTab").style.display="block";
        document.getElementById("speedy").classList.remove("borderclass");
        document.getElementById("Easy").classList.add("borderclass");
    } 
    
})

document.querySelector(".Book").addEventListener("click",function(event){
   
    if(document.querySelector(".first").style.display===""){
        document.querySelector(".first").style.display="block";
           document.querySelector(".arrow1").classList.add("rotate-image")
    } else{
           document.querySelector(".first").style.display="";
          document.querySelector(".arrow1").classList.remove("rotate-image")
    };
    
     event.preventDefault();
    
})

document.querySelector(".How").addEventListener("click",function(event){
    
    if(document.querySelector(".second").style.display===""){
        document.querySelector(".second").style.display="block";
           document.querySelector(".arrow2").classList.add("rotate-image")
    } else{
           document.querySelector(".second").style.display="";
          document.querySelector(".arrow2").classList.remove("rotate-image")
    };
    event.preventDefault();
    
})

document.querySelector(".Is").addEventListener("click",function(event){
    
    if(document.querySelector(".third").style.display===""){
        document.querySelector(".third").style.display="block";
           document.querySelector(".arrow3").classList.add("rotate-image")
    } else{
           document.querySelector(".third").style.display="";
          document.querySelector(".arrow3").classList.remove("rotate-image")
    }
    event.preventDefault();
    
})

document.querySelector(".Other").addEventListener("click",function(event){
    
    if(document.querySelector(".fourth").style.display===""){
        document.querySelector(".fourth").style.display="block";
           document.querySelector(".arrow4").classList.add("rotate-image")
    } else{
           document.querySelector(".fourth").style.display="";
          document.querySelector(".arrow4").classList.remove("rotate-image")
    }
    event.preventDefault();
    
})



 function validateEmail() {
            // Get the value from the email input field
            var userEmail = document.querySelector(".email").value;

            // Define the regular expression pattern for a valid email address
            var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            // Use test() method to check if the email matches the pattern
            if (pattern.test(userEmail)) {
                console.log("Valid email address.");
            } else {
                document.querySelector(".email").style.borderColor="red";
                document.querySelector(".invalid").style.display="block";
                return false;
            }

         
        }

document.querySelector(".images").addEventListener("click",function(){
    if(document.querySelector(".fixedmenu").style.display===""){
        document.querySelector(".fixedmenu").style.display="block";
    }else{
        document.querySelector(".fixedmenu").style.display=""
    }
})
    


