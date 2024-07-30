// //control statements (based on the condition it will control the program)
var email="info@rampex.in"
var pwd="123456"
var userTypingEmail=" info@tamp.in"
var userTypingPwd=" "
if(userTypingEmail===email){
        if(userTypingPwd===pwd){
            console.log("Login Successful");

        }
        else{
            console.log("password is incorrect.");
        }
}else{
    console.log("user Email is not in the DB");
}


//signup code in git hub
userName="Siddharth"
pwd="Sid@1234"
cnfpwd="Sid@123"
if(userName){
    if(pwd){
        if(cnfpwd){
        if(pwd===cnfpwd){
            console.log("signup successful");

        }else
        {
            console.log("Password and confirm password does not match");
        }
        }else{
            console.log("Type your cnfpwd");
        }
    }
    else{
        console.log("Type your password");
    }
}
else{
    console.log("Type your Username");
}

//1.Without arguement and without return type.

function evenodd(){
    var a= 1000;
    if(a%2==0){
        console.log("Number is even");
    }else{
        console.log("Number is odd");
    }
}
evenodd();


//2.Without arguement and return type.

function evenodd(){
    var a= 1000;
    if(a%2==0){
        return("Number is even");
    }else{
        return("Number is odd");
    }
}
console.log(evenodd());

//3.With arguement and without return type.
function evenodd(a){
    if(a%2==0){
        console.log("Number is even");
    }else{
        console.log("Number is odd");
    }
}
evenodd(109);

//4.With arguements and with return type.

function evenodd(a){
    
    if(a%2==0){
        return("Number is even");
    }else{
        return("Number is odd");
    }
}
console.log(evenodd(100));

