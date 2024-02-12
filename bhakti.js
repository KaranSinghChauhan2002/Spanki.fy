let p4 = ` <div class="install1">
<div class="install">
<div class="navigate">
<div class="preev"><img src="images/top_previous.png" alt=""></div>
<div class="neext"><img src="images/top_next.png" alt=""></div>
</div>
    <a class="install" target="_blank" href="payment.html">Support Us</a>
</div>
</div>
<div class="head head2 head3 head4">
<none></none>
<div class="thumb"><img src="images/bhakti.jpg" alt=""></div>
<h2>Bhakti</h2>
</div>
<div class="nonee"></div>
<ul class="four">



</ul>
`

//navhome then click
home.addEventListener("click", async (e) => {
    document.getElementsByClassName("p4")[0].addEventListener("click", async () => {
        document.getElementsByClassName("right")[0].innerHTML = p4;
        
 await caller("bhakti.json","four");
 await last("four")
 await audio_duration()
 await next4()
 await previous4()
    })
})



//direct click to p3

document.getElementsByClassName("p4")[0].addEventListener("click", async () => {
    document.getElementsByClassName("right")[0].innerHTML = p4;
    await caller("bhakti.json","four");
    await last("four")
    await audio_duration()
    await next4()
    await previous4()
})

////////////////////////////////////////////////////////////////////



async function next4(){
    document.getElementsByClassName("neext")[0].addEventListener("click",async()=>{
        document.getElementsByClassName("right")[0].innerHTML = p5;
        await caller("ign.json","five")
        await last("five")
        await audio_duration()
        document.getElementsByClassName("neext")[0].setAttribute("style","filter: opacity(0.2);")
        await previous5()

    })
}
async function previous4(){
    document.getElementsByClassName("preev")[0].addEventListener("click",async()=>{
        document.getElementsByClassName("right")[0].innerHTML = p3;
        await caller("ncs.json","three")
        await last("three")
        await audio_duration()
        await next3()
        await previous3()
    })
}