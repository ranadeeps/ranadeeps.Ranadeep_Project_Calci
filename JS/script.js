function disp(val){
    document.getElementById("screen").value += val;
}
function clr(){
    document.getElementById("screen").value = "";
}
function cal(){
    let x = document.getElementById("screen").value;
    let y = eval(x);
    document.getElementById("screen").value = y;
}
var inp = document.getElementById("screen");
inp.addEventListener('keyup',function(event){
    console.log(event.key);
    if(event.key === 'Enter'){
        event.preventDefault();
        document.getElementById("ca").click();
    }
})