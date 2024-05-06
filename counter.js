var value=document.getElementById("value");
const incbtn=document.getElementById("incbtn");
const decbtn=document.getElementById("decbtn");
let count=0;

incbtn.addEventListener("click",()=>{
count++;
  value.textContent=count;
  if(count>0){
    value.style.color="green";
   }
   else if(count==0){
    value.style.color="black";
   }
})
decbtn.addEventListener("click",()=>{
   count--;
   value.textContent=count;
   if(count<0){
    value.style.color="red";
   }
   else if(count==0){
    value.style.color="black";
   }
})