const input = document.querySelectorAll("input");
const error = document.querySelectorAll(".error");
const button = document.querySelector(".button__claim");

function ValidateEmail(inputText){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return inputText.match(mailformat) ? true : false;
}

function cekNull(theValue){
    return theValue.length === 0 ? false : true;
}

button.addEventListener("click", function(){
    for(let i=0; i<input.length; i++){
        if(i === 2){
            if(!ValidateEmail(input[i].value)){
                error[i].style.display = "block";
                input[i].style.backgroundSize = "20px";
                input[i].style.border = "1px solid hsl(0, 77%, 59%)";
            }
            else{
                error[i].style.display = "none";
                input[i].style.backgroundSize = "0";
                input[i].style.border = "1px solid rgba(139, 139, 139, 0.5)";
            }
        }
        else{
            if(!cekNull(input[i].value)){
                error[i].style.display = "block";
                input[i].style.backgroundSize = "20px";
                input[i].style.border = "1px solid hsl(0, 77%, 59%)";
            }
            else{
                error[i].style.display = "none";
                input[i].style.backgroundSize = "0";
                input[i].style.border = "1px solid rgba(139, 139, 139, 0.5)";
            }
        }
    }
});