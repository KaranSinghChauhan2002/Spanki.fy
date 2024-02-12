
var d = 0;
let home = document.getElementsByClassName("home")[0]
home.addEventListener("click", (e) => {
    document.getElementById("home1").setAttribute("src", "gif/icons8-home.gif")
    setTimeout(() => {
        document.getElementById("home1").setAttribute("src", "images/icons8-home-48.png")
    }, 1000)

})
let search = document.getElementsByClassName("search")[0]
search.addEventListener("click", (e) => {
    document.getElementById("search1").setAttribute("src", "gif/output-onlinegiftools.gif")

    setTimeout(() => {
        document.getElementById("search1").setAttribute("src", "images/icons8-search-50.png")
    }, 1000)

})
let lib = document.getElementsByClassName("libsearch1")[0]
lib.addEventListener("click", (e) => {
    lib.setAttribute("src", "gif/output-onlinegiftools.gif")
    setTimeout((e) => {
        lib.setAttribute("src", "images/icons8-search-lib.png")
    }, 1000);

})
let libsearch = document.getElementById("searchlib")
libsearch.hidden = true


let x = lib.addEventListener("click", (event) => {
    libsearch.hidden = false;
    setTimeout(() => {
        libsearch.setAttribute("Style", "width: 60%;")
    }, 10);
    document.getElementById("searchlib").focus()
    event.stopPropagation()


})



libsearch.addEventListener("focus", (event) => {
    libsearch.hidden = false
    event.stopPropagation()

});


libsearch.addEventListener("focusout", (event) => {
    libsearch.hidden = true
    libsearch.setAttribute("Style", "width: 0%;")
    event.stopPropagation()

});

let libblock = document.getElementsByClassName("lib")[0];
libblock.addEventListener("mouseover", (e) => {
    document.getElementById("lib1").setAttribute("src", "gif/icons8-playlist.gif")
    setTimeout(() => {
        document.getElementById("lib1").setAttribute("src", "images/icons8-playlist-48.png")
    }, 1000);
    e.stopPropagation()
})


//selected music uska color change kr dega
function select(n) {
    for (let i = 0; i < 8; i++) {

        document.getElementsByClassName("musicbox")[i].style.backgroundColor = "rgba(0, 0, 0, 0.323)";
    }
    document.getElementsByClassName("musicbox")[n].style.backgroundColor = "rgba(0, 0, 0, .8)";

}
let homecontent = `  <div class="install1">
                <div class="install">
                <div class="navigate"></div>
                    <a class="install" target="_blank" href="payment.html">Support Us</a>
                </div>
            </div>
            <div class="homeplaylist">
                <h2>Spank.ify Playlist</h2>
            </div>
            <div class="spl">
                <div class="p1 hov" id="a">
                    <img src="images/80s.jpg" alt="">
                    <h2>80s</h2>
                    <p>A mixture of american 80s era music which can turn you onn !!!</p>
           

                </div>
                <div class="p2 hov" id="123">
                    <img src="images/90s.jpg" alt="">
                    <h2>90s</h2>
                    <p>90s? Indian era bollywood songs which has a meaning of life</p>
                
                </div>
                <div class="p3 hov">
                    <img src="images/ncs.png" alt="">
                    <h2>Electro </h2>
                    <p>From the NCS music by the ncs music for the ncs fans...</p>
              
                </div>
                <div class="p4 hov">
                    <img src="images/bhakti.jpg" alt="">
                    <h2>Bhakti</h2>
                    <p>It have the most listened songs during India's Golden Age 2014-20xx</p>
                   
                </div>
                <div class="p5 hov">
                    <img src="images/ign.jpg" alt="">
                    <h2>IGN</h2>
                    <p>Vice city, Max payne, Now GTA 6, having all in game music/scores...</p>
                    
                </div>

                
            </div>

            <div class="about">
                <h2>Spank.ify ®</h2>

                <h2>If you have any compliance contant us at karanabhinav2002@gmail.com</h2>
                <h2>This is a free website to listen music </h2>
            </div> `
let searchcontent = `    <div class="install1">
<div class="install">
<div class="navigate"></div>
    <a class="install" target="_blank" href="payment.html">Support Us</a>
</div>
</div>


<div class="simg">
<img src="images/Group_2-removebg.png" alt="">
<div class="searchbtn">
    <input class="content" name="searchbar1" type="text" placeholder="Search Songs...">
    <button class="sea">Search</button>
</div>
</div>      `


let p1 = `            <div class="install1">
<div class="install">

<div class="navigate">
<div class="preev"><img class="preev"  src="images/top_previous.png" alt=""></div>
<div class="neext"><img class="neext" src="images/top_next.png" alt=""></div>
</div>
    <a class="install" target="_blank" href="payment.html">Support Us</a>
</div>
</div>
<div class="head">
<none></none>
<div class="thumb"><img src="images/80s.jpg" alt=""></div>
<h2>80s</h2>
</div>
<div class="nonee"></div>
<ul class="one">


</ul>`

//dont touch******************************************************


var lenn = 0;
async function fn(pointer) {
    let f1 = await fetch("90s.json")
    let output = await f1.json()

    lenn = output.length
    let name = output[pointer].name;
    let source = output[pointer].src;
    let image = output[pointer].img;
    let duration = output[pointer].duration;

}


//selected music uska color chnage ho jayega
function select(n, l) {
    for (let j = 0; j < l; j++) {
        document.getElementsByClassName("musicbox")[j].style.backgroundColor = "rgba(0, 0, 0, 0.323)";
    }
    document.getElementsByClassName("musicbox")[n].style.backgroundColor = "rgba(0, 0, 0, .8)";
}



async function licreator(i, classname, file) {

    let f1 = await fetch(file)
    let output = await f1.json()

    let lennn = output.length
    let name = output[i].name;
    let source = output[i].src;
    let image = output[i].img;
    let duration = output[i].duration;






    let ul = document.getElementsByClassName(classname)[0];
    let li = document.createElement("li");
    let none = document.createElement("none");
    let div = document.createElement("div");
    let sno = document.createElement("div");
    let photo = document.createElement("div");
    let photoimage = document.createElement("img");
    let songname = document.createElement("div");
    let duraa = document.createElement("div");
    let dil = document.createElement("div")
    ul.appendChild(li);
    li.appendChild(div);
    div.setAttribute("class", "musicbox")
    div.appendChild(none);
    div.appendChild(sno);
    sno.setAttribute("class", "sno");
    sno.textContent = i + 1 + ".";
    div.appendChild(photo);
    photo.setAttribute("class", "photo")
    photo.appendChild(photoimage);
    photoimage.setAttribute("src", image)
    div.appendChild(songname);
    songname.setAttribute("class", "name")
    songname.innerText = name;
    div.appendChild(duraa);
    duraa.setAttribute("class", "duration");
    duraa.innerText = duration;
    div.appendChild(dil)
    dil.setAttribute("class", "heart")
    await nonecreator(classname)
    await clicker(i, file,classname)
    document.getElementsByClassName("musicbox")[i].addEventListener("click", async () => {
        select(i, lennn)

    })

}
async function nonecreator(classname) {
    let ul = document.getElementsByClassName(classname)[0]
    let none1 = document.createElement("div")
    none1.setAttribute("class", "nonee")
    ul.appendChild(none1)
}
async function clicker(i, file,classname) {

    let f1 = await fetch(file)
    let output = await f1.json()
    let len = output.length;

    let name = output[i].name;
    let source = output[i].src;
    let image = output[i].img;
    let duration = output[i].duration;


    document.getElementsByClassName("musicbox")[i].addEventListener("click", async () => {

        document.getElementsByClassName("imgbottom")[0].setAttribute("src", image)
        document.getElementsByClassName("sname")[0].textContent = name;
        document.getElementsByClassName("aud")[0].setAttribute("src", source)
        document.getElementsByClassName("p")[1].setAttribute("src", "images/icons8-pause-50.png")
        await playbar()

        let audio = document.getElementsByClassName("aud")[0];
        let tog = 0;
        document.getElementsByClassName("loopPL")[0].addEventListener("click", async () => {

            if (tog == 0) {

                document.getElementsByClassName("loopPL")[0].setAttribute("src", "images/icons8-loop-50.png")
                console.log("looped")
                await loopplaylist(i, file)

                tog = 1

            }

            else {
                console.log("not looped")
                document.getElementsByClassName("loopPL")[0].setAttribute("src", "images/noloop.png");
             await remove(i,len,file,classname)

                document.getElementById("seek").setAttribute("value", "0")

                tog = 0
            }
            document.getElementsByClassName("p")[1].setAttribute("src", "images/icons8-pause-50.png")

        })



        //previous
        document.getElementsByClassName("p")[0].addEventListener("click", () => {
            console.log(i)
            if (i == 0) {
                console.log(i)
                i = len - 1;
                document.getElementsByClassName("imgbottom")[0].setAttribute("src", output[i].img)
                document.getElementsByClassName("sname")[0].textContent = output[i].name;
                document.getElementsByClassName("aud")[0].setAttribute("src", output[i].src)

                select(i, len)
            }
            else {
                console.log(i)
                document.getElementsByClassName("imgbottom")[0].setAttribute("src", output[i - 1].img)
                document.getElementsByClassName("sname")[0].textContent = output[i - 1].name;
                document.getElementsByClassName("aud")[0].setAttribute("src", output[i - 1].src)
                i = i - 1
                select(i, len)
            }

            document.getElementsByClassName("p")[1].setAttribute("src", "images/icons8-pause-50.png")

        })

        //next

        document.getElementsByClassName("p")[2].addEventListener("click", () => {
            console.log(i)
            if (i == len - 1) {
                console.log(i, "1")
                i = 0;
                document.getElementsByClassName("imgbottom")[0].setAttribute("src", output[i].img)
                document.getElementsByClassName("sname")[0].textContent = output[i].name;
                document.getElementsByClassName("aud")[0].setAttribute("src", output[i].src)
                select(i, len)
            }
            else {
                console.log(i, "2")
                document.getElementsByClassName("imgbottom")[0].setAttribute("src", output[i + 1].img)
                document.getElementsByClassName("sname")[0].textContent = output[i + 1].name;
                document.getElementsByClassName("aud")[0].setAttribute("src", output[i + 1].src)
                if (i + 1 == len - 1) {
                    i = i + 1
                }
                else {
                    i = i + 1
                }
            }
            select(i, len)

            document.getElementsByClassName("p")[1].setAttribute("src", "images/icons8-pause-50.png")
        })


    })

    //automatic to play once the song ended
    document.getElementsByClassName("aud")[0].addEventListener('ended', () => {
        document.getElementsByClassName("p")[1].setAttribute("src", "images/icons8-circled-play-50.png")
    })


}


async function playbar() {
    document.getElementsByClassName("seekbar")[0].hidden = false
    document.getElementsByClassName("pp")[0].hidden = false
    document.getElementsByClassName("p")[0].hidden = false
    document.getElementsByClassName("p")[1].hidden = false
    document.getElementsByClassName("p")[2].hidden = false
    document.getElementById("soundlevel").hidden = false
    document.getElementById("mutednot").hidden = false
    document.getElementsByClassName("repeat1")[0].hidden = false
    document.getElementsByClassName("loopPL")[0].hidden = false
}
async function caller(file, classname) {
    let f1 = await fetch(file)
    let output = await f1.json()
    let len = output.length;







    for (let i = 0; i < len; i++) {

        let name = output[i].name;
        let source = output[i].src;
        let image = output[i].img;
        let duration = output[i].duration;



        await licreator(i, classname, file);




    }



}

async function last(classname) {
    let end = document.createElement("li");
    end.setAttribute("id", "sendmail");
    end.textContent = "If you need more songs send us mail at karanabhinav2002@gmail.com"
    document.getElementsByClassName(classname)[0].appendChild(end)
}







//dont touch******************************************************



//loop playlist


let audio;

async function loopplaylist(i, file) {
    let f1 = await fetch(file);
    let output = await f1.json();
    let len = output.length;

    audio = document.getElementsByClassName("aud")[0];

    audio.addEventListener('ended', async () => {
        i = (i + 1) % len;
        let name = output[i].name;
        let source = output[i].src;
        let image = output[i].img;

        document.getElementsByClassName("imgbottom")[0].setAttribute("src", image);
        document.getElementsByClassName("sname")[0].textContent = name;
        document.getElementsByClassName("aud")[0].setAttribute("src", source);
        document.getElementsByClassName("p")[1].setAttribute("src", "images/icons8-pause-50.png");
        await playbar();
        select(i, len)

    });


}
async function remove(i,len,file,classname) {

    document.getElementsByClassName("loopPL")[0].setAttribute("src", "images/noloop.png");
    audio.removeEventListener('ended', loopplaylist);
    document.getElementsByClassName("aud")[0].addEventListener('ended',()=>{
        document.getElementsByClassName("aud")[0].pause()
        select(i+2, len)
        document.getElementsByClassName("p")[1].setAttribute("src", "images/icons8-circled-play-50.png")
        document.getElementsByClassName("p")[1].addEventListener("click",()=>{
            
        })
    })
    


}






















//loop playlist







async function audio_duration() {
    let audio = document.getElementsByTagName("audio")[0];
    let sb = document.getElementsByClassName("sb")[0]
    audio.addEventListener('loadedmetadata', function () {
        d = audio.duration;
        console.log(typeof (d), d);
    });
    audio.addEventListener('timeupdate', () => {
        sb.value = audio.currentTime / audio.duration * 100
    })
    sb.addEventListener('input', () => {
        audio.currentTime = audio.duration * (sb.value / 100)
    })
}


//direct click to p2


document.getElementsByClassName("seekbar")[0].hidden = true
document.getElementsByClassName("pp")[0].hidden = true
document.getElementsByClassName("p")[0].hidden = true
document.getElementsByClassName("p")[1].hidden = true
document.getElementsByClassName("p")[2].hidden = true
document.getElementById("soundlevel").hidden = true
document.getElementById("mutednot").hidden = true
document.getElementsByClassName("repeat1")[0].hidden = true
document.getElementsByClassName("loopPL")[0].hidden = true


document.getElementsByClassName("p1")[0].addEventListener("click", async () => {
    document.getElementsByClassName("right")[0].innerHTML = p1;
    await caller("80s.json", "one")


    await last("one")
    await audio_duration()
    await next1()
    document.getElementsByClassName("preev")[1].setAttribute("style", "filter: opacity(0.2);")
})

document.getElementsByClassName("home")[0].addEventListener("click", () => {
    document.getElementsByClassName("right")[0].innerHTML = homecontent;
    document.getElementsByClassName("p1")[0].addEventListener("click", async () => {
        document.getElementsByClassName("right")[0].innerHTML = p1;

        await caller("80s.json", "one")

        await last("one")
        await audio_duration()
        await next1()
        document.getElementsByClassName("preev")[1].setAttribute("style", "filter: opacity(0.2);")
        await loopplaylist(0, "80s.json")
    })

})






async function next1() {
    document.getElementsByClassName("neext")[0].addEventListener("click", async () => {

        document.getElementsByClassName("playbar")[0].hidden = true

        document.getElementsByClassName("right")[0].innerHTML = p2;
        await caller("90s.json", "two")

        await last("two")
        await next2()
        await audio_duration()
        await previous2()
        document.getElementsByClassName("preev")[1].setAttribute("style", "cursor: not-allowed;")
        await loopplaylist(0, "80s.json")

    })

}














search.addEventListener("click", () => {

    document.getElementsByClassName("right")[0].innerHTML = ""
    document.getElementsByClassName("right")[0].innerHTML = searchcontent
    console.log("run2")

})












//

