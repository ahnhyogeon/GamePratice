/*** 순서 정하기 ***/
let user;
let com;
let turnArr = []

function turn(){
    user = Number(prompt("0 또는 1을 입력하세요 : ", "빈칸 입력시 0으로 자동 입력됩니다."));

    if(user>1 || user<0){
        alert("0 또는 1만 입력하세요!");
        return turn();

    }
    com = Math.floor(Math.random()*2);
    
    console.log(com);

    if(user > com){
        alert("유저 먼저");
        
    }
    else if(user == com){
        alert("비겼네요 다시하겠습니다.");
        turn();
    }
    else{
        alert("컴퓨터 먼저");
    }
   
    turnArr.push(user);
    turnArr.push(com);

    return com, user;
}
