/*** 섞인 패 순서 배열로 저장***/
let rndArr1 = [];
let rndArr2 = [];


/*** 카드패 섞기 ***/
function rnd1(){

    let i = 0;

    while(i<20){
        let num1 = Math.floor((Math.random()*20))+1;

        if(!numRnd1(num1)){
            rndArr1.push(num1);
            i++
        }
    }

    function numRnd1(num1){
        for(let i = 0 ; i < rndArr1.length; i++){
            if(num1 == rndArr1[i]){
                return true;
            }

        }
        return false;
    }

    
    return rndArr1;
}

/*** 섞인 패에서 패 뽑기 ***/
function rnd2(){

    let i = 0;

    while(i<4){
        let num2 = Math.floor(Math.random()*rndArr1.length);

        if(!numRnd2(num2)){
            rndArr2.push(num2);
            i++
        }
    }

    function numRnd2(num2){
        for(let i = 0 ; i < rndArr2.length; i++){
            if(num2 == rndArr2[i]){
                return true;
            }

        }
        return false;
    }

    return rndArr2;
}