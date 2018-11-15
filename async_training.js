
//Callbacks 
    //Set Timeout async code
    function first() {
        setTimeout(() => console.log("first fired"),1000);  
    }
    function second() {
        console.log("second fired")
    }
    //first function actually fires second because it's async and must wait one second to fire.
    first();
    second();
    
    