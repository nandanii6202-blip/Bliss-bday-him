
function playMusic(){
document.getElementById('music').play();
}
function openGift(){
document.getElementById('letter').style.display='block';
}

const target=new Date('August 4, 2026 00:00:00').getTime();
setInterval(()=>{
const now=new Date().getTime();
const diff=target-now;
if(diff>0){
const d=Math.floor(diff/(1000*60*60*24));
document.getElementById('countdown').innerHTML='🎂 '+d+' days until birthday';
}
},1000);
