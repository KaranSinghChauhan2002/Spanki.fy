

let p3 = ` <div class="install1">
<div class="install">
<div class="navigate">
<div class="preev"><img src="images/top_previous.png" alt=""></div>
<div class="neext"><img src="images/top_next.png" alt=""></div>
</div>
    <a class="install" target="_blank" href="payment.html">Support Us</a>
</div>
</div>
<div class="head head2 head3">
<none></none>
<div class="thumb"><img src="images/ncs.png" alt=""></div>
<h2>NCS (No Copyright Sound)</h2>
</div>
<div class="nonee"></div>
<ul class="three">



</ul>
`



//navhome then click
home.addEventListener("click", async (e) => {
    document.getElementsByClassName("p3")[0].addEventListener("click", async () => {
        document.getElementsByClassName("right")[0].innerHTML = p3;
        
 await caller("ncs.json","three");
 await last("three")
 await audio_duration()
 await next3()
 await previous3()
    })
})



//direct click to p3

document.getElementsByClassName("p3")[0].addEventListener("click", async () => {
    document.getElementsByClassName("right")[0].innerHTML = p3;
    await caller("ncs.json","three");
    await last("three")        
    await audio_duration()
    await next3()
    await previous3()
})





///////////////////////////////////////////////////////////////
async function next3(){
document.getElementsByClassName("neext")[0].addEventListener("click",async ()=>{
    document.getElementsByClassName("right")[0].innerHTML = p4;
        
    await caller("bhakti.json","four");
    await last("four")
    await audio_duration()
    await next4()
    await previous4()
})
}
async function previous3(){
    document.getElementsByClassName("preev")[0].addEventListener("click",async ()=>{
        document.getElementsByClassName("right")[0].innerHTML = p2;
        await caller("90s.json","two")
       await next2()
        await last("two")
        await audio_duration()
        await previous2()
      

    })
}