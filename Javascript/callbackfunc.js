// function formValidation (){
    //     console.log("Form Validation called");
    //     formValidationCompleted();
    // }
    // function formValidationCompleted(){
    //     console.log("Form validation call back successful");
    // }
    // formValidation();
    
    //how to make this code as actual form validation.
    
    // function formValidation (){
    //     setTimeout(()=> {
    //         console.log("Form Validation called");
    //         formValidationCompleted();
    //     },2000); // only after 2 seconds the form validation will be called.
    // }
    // function formValidationCompleted(){
    //     console.log("Form validation call back successful");
    // }
    // formValidation();
    
    
    //how it will be done in industry (more depth)
    // function formValidation (fVC){
    //     setTimeout(()=> {
    //         console.log("Form Validation called");
    //         console.log(fVC);
    //     },2000); // only after 2 seconds the form validation will be called.
    // }
    // function formValidationCompleted(){
    //     console.log("Form validation call back successful");
    // }
    // formValidation(formValidationCompleted);
    
    
    // var a= prompt("Please enter your age.");
    // function dob(){
    //     if(a>=18){
    //         permit();
    //     }else{
    //         notpermit();
    //     }
        
    // }
    // function permit(){
    //     console.log("You are permitted to access the library.");
    // }
    // function notpermit(){
    //     console.log("You are not permitted to access the library.");
    // }
    
    // dob();
    
    
    
    //Promise
    //using resolve/reject is optional
    //there are 3 states of promise they are, pending, reject,fulfill.
    // function proBaseEg(){
    //     let prom=new Promise((resolve)=>{
    //         setTimeout(()=>{
    //             reject("this ia reject example");
    //             resolve("This is a base example");
    //         },1000);
    //     });
    
    //     console.log(
    //         .then((val) =>{
    //             console.log(val);
    //         })
    //         .catch(val=>{
    //             console.log(val);
    //         })
    //     );
    // }
    // proBaseEg();
    
    
    //real time base example
    
    function locationFinder(){
        time=2000
        location="Skcet";
        
        return new Promise((locFound,locNotFound)=>{
            setTimeout(() =>{
                if(isLocationFound(location,time)){
                    locFound("Location Found");
                }else{
                    locNotFound("location not found");
                }
                },time);
        });
    }
    isLocationFound=(location,time)=>{
        isLoc="Skcet";
        time=20000
        // return new Promise((locFound,locNotFound))
        if(loc === isLoc && t<=time){
            return true;
        }else{
            return false;
        }
        
    }
    locationFinder()
        .then((Val))