function r(range1, floor){
    if(typeof range1 !== "number"){
        console.error(`Prameter one [range1]: no number: Error Code ::/[1897/N]/`);
        return;
    }
    else if(floor){
        math = Math.floor(Math.random() * range1);
        return math;
    }else if(!floor){
        math = Math.random()* range1;
        return math;
    }else if(typeof floor != "boolean" || "undefined"){
        console.error(`Prameter two [floor]: no boolean: Error Code::/[1897/B]/`);
        return;
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
    } /*else if(n.toString().length < 100){
        console.warn("Number to large: Warn Code::/[1987/LN]/");
        return  parseInt(n);
    }*/ else if(!floor){
        math = Math.PI * n;
        return math; 
    } else if(floor){
        math = Math.floor(Math.PI * n);
        return math;
    }
}