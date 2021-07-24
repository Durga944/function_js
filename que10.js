function add(a,b,symbol) {
    if(symbol=="+") {
        var sum = a+b;
    }
    return sum;
}

function sub(c,d) {
    if(symbol=="-") {
        var diff = c-d;
    }
    return diff;
}

function mul(e,f) {
    if(symbol=="*"){
        var mult = e*f; 
    }
    return mult;
}

add(45,65,"+");
sub(45,65,"-");
mul(45,65,"*");

