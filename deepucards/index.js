const fileinput = document.getElementById("customerimg")
const showimage = document.getElementById("showimg")
fileinput.onchange = function () {
    let reader = new FileReader();
    reader.onload = function (e) {
        showimage.src = e.target.result;
    }
    reader.readAsDataURL(customerimg.files[0]);
}

document.getElementById("customername").addEventListener('input',()=>{
    var a = document.getElementById("customername").value
    document.getElementById("custname").innerText = a
})



document.getElementById("customernum").addEventListener('input',()=>{
    var a = document.getElementById("customernum").value
    document.getElementById("custnum").innerText = a
})



document.getElementById("customeraddress").addEventListener('input',()=>{
    var a = document.getElementById("customeraddress").value
    document.getElementById("custaddress").innerText = a
})









document.getElementById("submitbtn").addEventListener("click",()=>{
    
    document.getElementsByClassName("card")[0].style.display = "block"
})