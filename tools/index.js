// DOM Elements
const mrpInput = document.getElementById("mrpvalue");
const discountInput = document.getElementById("discountvalue");
const gstInput = document.getElementById("gst");
const rateInput = document.getElementById("ratedata");
const checkRateBtn = document.getElementById("checkrate");
const checkDiscountBtn = document.getElementById("checkdiscount");
const productDetailsBtn = document.getElementById("productdetails");
const toolselector = document.getElementById("toolselector");
const resultData = document.getElementById("resultdata1");

// Toggle visibility based on dropdown selection
toolselector.addEventListener("change", () => {
    document.getElementsByClassName("discountCheck")[0].style.display = "block";

    if (toolselector.value === "checkDiscount") {
        mrpInput.style.display = "block";
        discountInput.style.display = "block";
        gstInput.style.display = "none";
        rateInput.style.display = "none";
        checkRateBtn.style.display = "block";
        checkDiscountBtn.style.display = "none";
        productDetailsBtn.style.display = "none";

    } else if (toolselector.value === "checkrate") {
        mrpInput.style.display = "block";
        discountInput.style.display = "none";
        gstInput.style.display = "none";
        rateInput.style.display = "block";
        checkRateBtn.style.display = "none";
        checkDiscountBtn.style.display = "block";
        productDetailsBtn.style.display = "none";

    } else if (toolselector.value === "ProductDetails") {
        mrpInput.style.display = "block";
        discountInput.style.display = "block";
        gstInput.style.display = "block";
        rateInput.style.display = "block";
        checkRateBtn.style.display = "none";
        checkDiscountBtn.style.display = "none";
        productDetailsBtn.style.display = "block";
    }
});

// Function 1: Calculate Final Price based on MRP and Discount %
function checkmrp() {
    let mrp = parseFloat(mrpInput.value);
    let discount = parseFloat(discountInput.value);

    if (mrp && discount) {
        let finalPrice = mrp - (mrp * discount / 100);
        resultData.innerHTML = `Yaha pe appko ${finalPrice.toFixed(2)} Rs Padha`;
    } else {
        alert("Please Enter MRP and Discount Percentage");
    }
}

// Function 2: Calculate Discount % based on MRP and Current Rate
function checkdiscount() {
    let rate = parseFloat(rateInput.value);
    let mrp = parseFloat(mrpInput.value);

    if (rate && mrp) {
        // Correct Formula: ((MRP - Rate) / MRP) * 100
        let discountPercentage = ((mrp - rate) / mrp) * 100;
        resultData.innerHTML = `Yaha pe appko ${discountPercentage.toFixed(2)}% discount mila`;
    } else {
        alert("Please Enter MRP and Rate");
    }
}

// Function 3: Handle product details

var arraydiv = new Array()

function productdetails() {
    // 1. Inputs ko numbers mein convert karein (parseFloat use karke)
    let mrp = parseFloat(mrpInput.value) || 0;
    let discount = parseFloat(discountInput.value) || 0;
    let gst = parseFloat(gstInput.value) || 0;
    let rate = parseFloat(rateInput.value) || 0;

    // 2. Sahi Math Calculations (Brackets ke saath)
    let tradeDiscountPercent = ((mrp - rate) / mrp) * 100;
    let priceAfterDiscount = rate - (rate * discount / 100);
    let priceAfterGst = priceAfterDiscount + (priceAfterDiscount * gst / 100);
    let totalSavingsPercent = ((mrp - priceAfterGst) / mrp) * 100;

    // 3. Data ko labels ke saath array mein set karein taaki screen par samajh aaye
    let detailsArray = [
        `MRP: ₹${mrp.toFixed(2)}`,
        `Basic Discount: ${discount.toFixed(2)}%`,
        `GST: ${gst.toFixed(2)}%`,
        `Purchase Rate: ₹${rate.toFixed(2)}`,
        `Trade Discount: ${tradeDiscountPercent.toFixed(2)}%`,
        `Final Price (with GST): ₹${priceAfterGst.toFixed(2)}`,
        `Total Net Discount on MRP: ${totalSavingsPercent.toFixed(2)}%`
    ];

    // 4. Purana result saaf karein (taaki naya calculation dabane par pichla wala delete ho jaye)
    const resultBox = document.getElementById("resultdata1");
    resultBox.innerHTML = "";

    // 5. Loop chalakar har ek value ke liye naya element banayein aur append karein
    detailsArray.forEach(text => {
        let textDiv = document.createElement("div"); // Naya div create kiya
        textDiv.innerText = text;                    // Usme actual value daali
        textDiv.style.marginBottom = "6px";          // Thodi gap ke liye styling
        resultBox.appendChild(textDiv);              // Main box mein jod diya
    });
}