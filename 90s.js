var check = 0;

let p2 = ` <div class="install1">
<div class="install">
<div class="navigate">
<div class="preev"><img src="images/top_previous.png" alt=""></div>
<div class="neext"><img src="images/top_next.png" alt=""></div>
</div>
    <a class="install" target="_blank" href="payment.html">Support Us</a>
</div>
</div>
<div class="head head2">
<none></none>
<div class="thumb"><img src="images/90s.jpg" alt=""></div>
<h2>90s</h2>
</div>
<div class="nonee"></div>
<ul class="two">



</ul>
`
//dont touch******************************************************

document.getElementsByClassName("playbar")[0].hidden=true




//navhome then click
home.addEventListener("click", async(e) => {
    document.getElementsByClassName("p2")[0].addEventListener("click", async () => {
        document.getElementsByClassName("right")[0].innerHTML = p2;
       await caller("90s.json","two")
   
            await last("two")
 
            await audio_duration()
       
await next2()
await previous2()

    })
})







//direct click to p2

document.getElementsByClassName("p2")[0].addEventListener("click", async () => {
    document.getElementsByClassName("right")[0].innerHTML = p2;
    await caller("90s.json","two")
   await next2()
    await last("two")
    await audio_duration()
    await previous2()
})



///////////////////////////////////////////////////////////////



async function next2(){
    document.getElementsByClassName("neext")[0].addEventListener("click",async()=>{
        document.getElementsByClassName("right")[0].innerHTML = p3;
        document.getElementsByClassName("playbar")[0].hidden=true
        await next3()
        await previous3()
        await caller("ncs.json","three");
        await last("three")
        await audio_duration()
    })
}
async function previous2(){
    document.getElementsByClassName("preev")[0].addEventListener("click",async()=>{
        document.getElementsByClassName("right")[0].innerHTML = p1;
        await caller("80s.json", "one")
    
    
        await last("one")
        await audio_duration()
        await next1()
     
        document.getElementsByClassName("preev")[0].setAttribute("style","filter: opacity(0.2);")
    
    })
}
