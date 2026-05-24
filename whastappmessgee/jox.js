const scdata =
    "https://script.google.com/macros/s/AKfycbyc8dj5vgdZ9jH9LsCvv-2FIlqKbxwrSxOiv_pTB8Q0zUq-0diOpntaqbQaIM2Acuf4/exec";

fetch("https://opensheet.elk.sh/1G5kY3GGIv-wyA8qq-Um_SazeQgzUzyVMCfRtXXAzrVA/whatsappdata")
    .then(res => res.json())
    .then(data => {

        document.querySelector(".maindiv").innerHTML = "";

        data.forEach(element => {

            const div = document.createElement("div");
            div.classList.add("div1");
            div.innerHTML = "Message on Different Number";

            // Color set
            if (element.color.trim().toLowerCase() === "green") {
                div.style.backgroundColor = "rgb(141, 236, 106)";
            } else {
                div.style.backgroundColor = "rgb(247, 151, 109)";
            }
            // Click Event
            div.addEventListener("click", () => {
                fetch(scdata, {
                    method: "POST",
                    mode: "no-cors",
                    body: JSON.stringify({
                        number: element.numberx,
                        color: "red"
                    })
                })
                    .then(res => res.text())
                    .then(result => {
                        div.style.backgroundColor = "rgb(246, 127, 76)";

                    })
                    .catch(err => console.log(err));
                window.open(`https://wa.me/91${element.numberx}`)
            });

            document.querySelector(".maindiv").appendChild(div);

        });

    })
    .catch(err => console.log(err));



document.getElementById("inputdata").addEventListener("change", (e) => {
    fetch('https://api.npoint.io/38bf6272169995caf595')
        .then(res => res.json())
        .then(data => {
            if(e.target.value === data.password){
                e.target.style.display = "none";
                document.querySelector(".maindiv").style.display = "block";
                
            }
        })
        .catch(err => console.log(err));
});


