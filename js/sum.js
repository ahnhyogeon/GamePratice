function sum(){
    const pa1 = document.getElementById("imgBox1");
    const pa2 = document.getElementById("pbox1")

    const pa3 = pa1.children;
    const pa4 = pa2.children;

    

    console.log(pa1);
    console.log(pa3[0]);
    console.log(pa3[0].style);
    console.log(pa2);
    console.log(pa2.style);


    // for(let i = 0 ; i<pa3.length; i++){
    // console.log(pa1.children[i].style);
    // }
    

    // for(let i = 0; i<test.length; i++){
    //     if(pa1.children[i].style.display == "none"){
    //         console.log(pa1.children[i]);
    //     }
    //     else{
    //         console.log("?");
    //     }
    // }

    // if(pa1.children.style.display == "block"){
    //     if(pa2.style.display == "block"){
    //         console.log("1+2 = 3끗");
    //     }

    //     console.log("?");
    // }
    // else{
    // console.log("!")
    // }
}