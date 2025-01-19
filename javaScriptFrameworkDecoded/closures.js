function buildFunction(){
    var arr = [];
    for(var i = 0; i< 3; i++){
        arr.push(function() {
            
                console.log(i);
        });
        
    }
    return arr;
}

var fs = buildFunction();
fs[0]();
fs[1]();
fs[2]();

//output will be i = 3 all time because inside the function arr is in inner fucntion, where i is not changes it lingering means closerur fucntion so it picks up when loop ends