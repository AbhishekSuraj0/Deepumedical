// index.js

document.getElementById("myForm").addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        address: document.getElementById("address").value,
        gmail: document.getElementById("gmail").value
    };

    // Google Apps Script Web App URL
    const scriptURL = "";

    try {

        const response = await fetch(scriptURL, {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const result = await response.text();

        alert("Data Submitted Successfully");

        document.getElementById("myForm").reset();

    } catch (error) {

        console.log(error);

        alert("Error submitting form");

    }

});