var searchList = document.getElementById("searchList")
const sh = "1cb28gYunLwsO9v6Jpxbhxg6NqGYN_9v0MwCJ5e-GyzQ"
var inputNumber = document.getElementById("inputNumber")



function doserach() {
    searchList.innerHTML = "";

    fetch(`https://opensheet.elk.sh/${sh}/customermdicine`)
        .then(res => res.json())
        .then(d => {
            console.log(Object.keys(d[2]))
            const searchValue = inputNumber.value.trim();
            if (!searchValue) {
                alert("Please enter number");
                return;
            }
            
            // 8948 ko d1,d2,d3... me search karo
            const column = Object.keys(d[0]).find(key => {
                return d.some(row =>
                    String(+[key]).trim() === searchValue
                );
            });
            if (!column) {
                alert("Number not found");
                return;
            }
            // console.log("Found Column:", column);

            // Found column ka poora data
            const result = d.map(row => row[column]);
            // console.log(result);
            // Screen par show
            result.forEach((value, index) => {
                const div = document.createElement("div");
                div.innerHTML = `
                    <p>
                        Row ${index + 1} :
                        <strong>${value}</strong>
                    </p>
                `;
                searchList.appendChild(div);
            });
        })
        .catch(error => {
            console.error("Error:", error);
        });
}





document.getElementById("serachnumber").addEventListener("click", () => {
    doserach()
})