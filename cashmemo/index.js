var tabledata = document.getElementById("tabledata")
var ka = 0;



function addRow() {

    var medicineName = document.getElementById("medicinename").value;
    var quantity = document.getElementById("qty").value;
    var price = document.getElementById("mrp").value;
    var batchNo = document.getElementById("batchno").value;
    var expiry = document.getElementById("expiry").value;


    if (!medicineName || !quantity || !price || !batchNo || !expiry) {
        alert("Please fill all the fields");
        return;
    }

    ka += (quantity * price);

    let row = tabledata.insertRow();
    row.insertCell(0).innerHTML = quantity;
    row.insertCell(1).innerHTML = medicineName;
    row.insertCell(2).innerHTML = price;
    row.insertCell(3).innerHTML = batchNo;
    row.insertCell(4).innerHTML = expiry;
    row.insertCell(5).innerHTML = (quantity * price).toFixed(2);
    document.getElementById("totalAamount").innerHTML = `Total Amount: ₹${ka}`;


    document.getElementById("medicinename").value = "";
    document.getElementById("qty").value = "";
    document.getElementById("mrp").value = "";
    document.getElementById("batchno").value = "";
    document.getElementById("expiry").value = "";
}


document.getElementById("closebtn").addEventListener("click", () => {
    document.getElementById("inputdata").style.display = "none";
})


function ai() {
    document.getElementById("inputdata").style.display = "block";
}


async function s() {
    const element = document.getElementById("maindiv");

    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/svg");

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    pdf.addImage(imgData, "SVG", 10, 10, 190, 0);
    pdf.save(`${document.getElementById("patientname").value}.pdf`);
}
