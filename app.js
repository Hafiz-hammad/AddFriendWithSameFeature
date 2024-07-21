let unknown = document.getElementById("Unknown");
let add = document.getElementById("add-btn");
let task = 0 ;
add.addEventListener("click",function(){
    if (task == 0){
        unknown.innerHTML="Friend"
        unknown.style.color= "green"
        task=1
    }else{
        unknown.innerHTML="Unknown"
        unknown.style.color= "red"
        task=0
    }
})