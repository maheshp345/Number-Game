
let number = document.getElementById("number");

let randomnumber = Math.ceil(Math.random()* 100); 

let result = document.getElementById("para1");

let enteredNumbers = document.getElementByClassName("enterednumbers");


   

function myFunction(){
    let guessnumber = parseInt(number.value);
    
    
    
    if(  guessnumber > randomnumber){

        result.innerHTML = "Too High! Try Again" ;
        result.style.color = "red";
        
    }

    else if(guessnumber < randomnumber ) {
        result.innerHTML = "Too low! Try Again.";
        result.style.color = "blue";
    }

    

    else if(randomnumber === guessnumber){
        result.innerHTML = "Congratulations! You got it right.";
        result.style.color = "green";
    }
    else{
        result.innerHTML = "Please provide a valid input.";
        result.style.color = "red";
    }
    var parentElement = document.getElementById("myList");
    var repeatCount = 1;
    for (var i = 0; i < repeatCount; i++) {
      var listItem = document.createElement("li");
      listItem.textContent = ` Number ${guessnumber}`;
      parentElement.appendChild(listItem);
    }

  
    
   
    number.value = "";

    

    
};





