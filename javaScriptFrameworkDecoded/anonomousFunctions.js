function greet(){
    console.log('hi');
}
var anoGreet = function(){
    console.log('hi');
}
anoGreet();

function log(a){
    a();
}

log(function(){
    console.log('log function inside a fucntion');
});