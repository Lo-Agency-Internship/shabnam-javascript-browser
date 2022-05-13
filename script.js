function changeBackgroundColor(){
let hex_num=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
   let hex='';
for(i=0;i<6;i++){
        let randomColor=Math.floor(Math.random()*hex_num.length)
        hex +=hex_num[randomColor];
    } 
document.getElementById("btn").innerHTML=hex;
document.getElementsByTagName("body")[0].style.background="#"+hex;
}