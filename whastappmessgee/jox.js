fetch("https://opensheet.elk.sh/1G5kY3GGIv-wyA8qq-Um_SazeQgzUzyVMCfRtXXAzrVA/whatsappdata")
    .then(res => res.json())
    .then(data => {

        data.forEach(element => {
            console.log(element);
            const div = document.createElement("div");
            div.classList.add("div1");
            div.innerHTML = `${element.numberx}`

            if(element.color === "green"){
                div.style.backgroundColor = "rgb(68, 232, 9)";
            } else {
                div.style.backgroundColor = "rgb(238, 80, 12)";
            }

            div.addEventListener("click", () => {
                window.open(`https://wa.me/${element.numberx}`)
            })







            document.querySelector(".maindiv").appendChild(div);
        })






    })
    .catch(err => { console.log(err) })