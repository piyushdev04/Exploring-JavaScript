function findsum(n){
    let ans = 0;
    for(let i = 0; i<n; i++){
        ans += i;
    }
    return ans;
}

function findsumTill100(){
    console.log(findsum(100));
}

function syncSleep(){
    let a= 1;
    for (let i=0; i<100000000; i++){
      a++;
    }
}

syncSleep();
findsumTill100();

console.log("RAM RAM!!"); 