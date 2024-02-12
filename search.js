

async function get(searchname) {
    let arr = [];
    let data1 = await fetch("songs.json");
    let decode = await data1.json();
    let datalength = decode.length;
    searchname = searchname.toLowerCase();

    for (let i = 0; i < datalength; i++) {
        let songName = decode[i].name.toLowerCase();
        if (songName.includes(searchname)) {
            arr.push(decode[i]);
        }
    }
    console.log(arr);



    for (let j = 0; j < arr.length; j++) {
        let name = arr[j].name;
        let source = arr[j].src;
        let image = arr[j].img;
        let duration = arr[j].duration;

        let ul = document.getElementsByClassName("searchul")[0];
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
        sno.textContent = j + 1 + ".";
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

        await nonecreator("searchul")


        document.getElementsByClassName("musicbox")[j].addEventListener("click", async () => {
            select(j, arr.length)

        })


        document.getElementsByClassName("musicbox")[j].addEventListener("click", async () => {

            document.getElementsByClassName("imgbottom")[0].setAttribute("src", image)
            document.getElementsByClassName("sname")[0].textContent = name;
            document.getElementsByClassName("aud")[0].setAttribute("src", source)
            document.getElementsByClassName("p")[1].setAttribute("src", "images/icons8-pause-50.png")
            await playbar1()
        }
        )












        //previous
        document.getElementsByClassName("p")[0].addEventListener("click", () => {
            console.log(j)
            if (j == 0) {
                console.log(j)
                j = arr.length - 1;
                document.getElementsByClassName("imgbottom")[0].setAttribute("src", arr[j].img)
                document.getElementsByClassName("sname")[0].textContent = arr[j].name;
                document.getElementsByClassName("aud")[0].setAttribute("src", arr[j].src)

                select(j, arr.length)
            }
            else {
                console.log(j)
                document.getElementsByClassName("imgbottom")[0].setAttribute("src", arr[j - 1].img)
                document.getElementsByClassName("sname")[0].textContent = arr[j - 1].name;
                document.getElementsByClassName("aud")[0].setAttribute("src", arr[j - 1].src)
                j = j - 1
                select(j, arr.length)
            }

            document.getElementsByClassName("p")[1].setAttribute("src", "images/icons8-pause-50.png")

        })

        //next

        document.getElementsByClassName("p")[2].addEventListener("click", () => {
            console.log(j)
            if (j == arr.length - 1) {
                console.log(j, "1")
                j = 0;
                document.getElementsByClassName("imgbottom")[0].setAttribute("src", arr[j].img)
                document.getElementsByClassName("sname")[0].textContent = arr[j].name;
                document.getElementsByClassName("aud")[0].setAttribute("src", arr[j].src)
                select(j, arr.length)
            }
            else {
                console.log(j, "2")
                document.getElementsByClassName("imgbottom")[0].setAttribute("src", arr[j + 1].img)
                document.getElementsByClassName("sname")[0].textContent = arr[j + 1].name;
                document.getElementsByClassName("aud")[0].setAttribute("src", arr[j + 1].src)
                if (j + 1 == arr.length - 1) {
                    j = j + 1
                }
                else {
                    j = j + 1
                }
            }
            select(j, arr.length)

            document.getElementsByClassName("p")[1].setAttribute("src", "images/icons8-pause-50.png")
           
        })




    }

}

async function playbar1() {
    document.getElementsByClassName("seekbar")[0].hidden = false
    document.getElementsByClassName("pp")[0].hidden = false
    document.getElementsByClassName("p")[0].hidden = false
    document.getElementsByClassName("p")[1].hidden = false
    document.getElementsByClassName("p")[2].hidden = false
    document.getElementById("soundlevel").hidden = false
    document.getElementById("mutednot").hidden = false
    document.getElementsByClassName("repeat1")[0].hidden = true
    document.getElementsByClassName("loopPL")[0].hidden = true
}









search.addEventListener("click", () => {

    document.getElementsByClassName("right")[0].innerHTML = ""
    document.getElementsByClassName("right")[0].innerHTML = searchcontent

    document.getElementsByClassName("sea")[0].addEventListener("click", async () => {
        console.log("s running")
        let c = document.getElementsByClassName("content")[0].value
        let searchresult = `            <div class="install1">
      <div class="install">
      
      <div class="navigate">
      </div>
          <a class="install" target="_blank" href="payment.html">Support Us</a>
      </div>
      </div>
      <div class="searchresult head">
      <none></none>
      <div class="thumb"><img src="images/Group 3.png" alt=""></div>
      <h2>${c.toUpperCase()}</h2>
      </div>
      <div class="nonee"></div>
      <ul class="searchul">
      
      
      </ul>`

        document.getElementsByClassName("right")[0].innerHTML = searchresult;
        console.log(c)
        await get(c)
        await audio_duration()
    })

})