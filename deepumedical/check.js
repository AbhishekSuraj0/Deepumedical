var links = "https://opensheet.elk.sh/1cb28gYunLwsO9v6Jpxbhxg6NqGYN_9v0MwCJ5e-GyzQ/Sheet1"

var links1 = "https://api.npoint.io/03185e6a9bfcd7262ccc"


fetch(links)
.then(res => res.json())
.then(data => {
    console.log(data);
})
.catch(err => console.log("Error:", err));
