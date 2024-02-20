/*** 패 분배 ***/
function give(){


    turn();

    let rndArr3 = [];
    let rndArr4 = [];
    let userArr = [];

    rndArr3 = rnd1();
    rndArr4 = rnd2();
    

    let card = [];
    let card2 = [];
    let location_main = [1, 2, 3, 4, 5, 6];
    let location_user = [1, 2, 3];

    console.log(rndArr4);

    if(user>com){
        
        let change1 = rndArr4[1];
        rndArr4[1] = rndArr4[0];
        rndArr4[0] = change1;

        let change2 = rndArr4[3];
        rndArr4[3] = rndArr4[2];
        rndArr4[2] = change2;

        for(let i = 0; i<rndArr4.length; i++){

            let location = document.getElementById("imgBox"+location_main[i]);
            let card = location.getElementsByClassName("num"+rndArr4[i]);
            
            card[0].style.display = "block";
        }
        
        userArr.push(rndArr4[1]);
        userArr.push(rndArr4[3]);
    }

    else{
        userArr.push(rndArr4[1]);
        userArr.push(rndArr4[3]);

        for(let i = 0; i<rndArr4.length; i++){

            let location = document.getElementById("imgBox"+location_main[i]);
            let card = location.getElementsByClassName("num"+rndArr4[i]);
            
            card[0].style.display = "block";
        }
    }

    console.log(com);
    console.log(userArr);

   

    // for(let i = 0; i<rndArr4.length; i++){

    //     let location = document.getElementById("imgBox"+location_main[i]);
    //     let card = location.getElementsByClassName("num"+rndArr4[i]);
        
    //     card[0].style.display = "block";
    // }

    for(let j = 0; j<location_user.length-1; j++){
        let location2 = document.getElementById("pbox"+location_user[j]);
        let card2 =location2.getElementsByClassName("num"+userArr[j]);

        card2[0].style.display = "block";
    }

    console.log(rndArr3);
    console.log(rndArr4);
    // console.log(card[0]);
    

}