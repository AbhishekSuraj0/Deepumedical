const scdata =
"https://script.google.com/macros/s/AKfycbyc8dj5vgdZ9jH9LsCvv-2FIlqKbxwrSxOiv_pTB8Q0zUq-0diOpntaqbQaIM2Acuf4/exec";

fetch("https://opensheet.elk.sh/1G5kY3GGIv-wyA8qq-Um_SazeQgzUzyVMCfRtXXAzrVA/whatsappdata")
.then(res => res.json())
.then(data => {

    document.querySelector(".maindiv").innerHTML = "";

    data.forEach(element => {

        const div = document.createElement("div");

        div.classList.add("div1");

        div.innerHTML = element.numberx;

        // Color set
        if(element.color.trim().toLowerCase() === "green"){

            div.style.backgroundColor = "rgb(68, 232, 9)";

        }else{

            div.style.backgroundColor = "rgb(238, 80, 12)";
        }

        // Click Event
        div.addEventListener("click", () => {
            fetch(scdata,{
                method:"POST",
                mode:"no-cors",          
                body:JSON.stringify({
                    number: element.numberx,
                    color: "red"
                })
            })
            .then(res => res.text())
            .then(result => {
                div.style.backgroundColor = "rgb(238, 80, 12)";

            })            
            .catch(err => console.log(err));
            window.open(`https://wa.me/${element.numberx}`,"_blank")
        });

        document.querySelector(".maindiv").appendChild(div);

    });

})
.catch(err => console.log(err));