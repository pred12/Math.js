function r(n, floor){
    if(typeof n !== "number"){
        console.error(`Prameter one [n]: no number: Error Code ::/[1897/N]/`);
        return;
    } else if(typeof floor != "boolean"){
        console.error(`Prameter two [floor]: no boolean: Error Code::/[1897/B]/`);
        return;
    }else if(floor){
        math = Math.floor(Math.random() * n);
        return math;
    }else if(!floor){
        math = Math.random()* n;
        return math;
    }
    return;
}
function pi(n, floor){
    if(typeof n !== "number"){
        console.log(typeof n);
        console.error(`Prameter one [n]: no number: Error Code::/[1897/N]/`);
        return;
    }else if(typeof floor !== "boolean"){
        console.error(`Prameter two [floor]: no boolean: Error Code::/[1897/B]/`);
        return;
    }else if(!floor){
        math = Math.PI * n;
        return math; 
    } else if(floor){
        math = Math.floor(Math.PI * n);
        return math;
    }
    return;
}
function f(n){
    if(typeof n != "number"){
        console.error(`Prameter one [n]: no number: Error Code::/[1897/N]/`);
        return;
    } else{
        math = Math.floor(n);
        return math;
    }
    return;
}