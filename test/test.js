var list = ["abhishek", "Suraj", "Mohini", "Paytm", "apple",
    "abhishek", "Suraj", "Mohini", "Paytm", "apple", "abhishek",
    "Suraj", "Mohini", "Paytm", "apple", "abhishek", "Suraj", "Mohini", "Paytm", "apple",
    "abhishek", "Suraj", "Mohini", "Paytm", "apple", "abhishek",
    "Suraj", "Mohini", "Paytm", "apple", "abhishek", "Suraj", "Mohini", "Paytm", "apple",
    "abhishek", "Suraj", "Mohini", "Paytm", "apple", "abhishek",
    "Suraj", "Mohini", "Paytm", "apple", "abhishek", "Suraj", "Mohini", "Paytm", "apple",
    "abhishek", "Suraj", "Mohini", "Paytm", "apple", "abhishek",
    "Suraj", "Mohini", "Paytm", "apple","abhishek", "Suraj", "Mohini", "Paytm", "apple",
    "abhishek", "Suraj", "Mohini", "Paytm", "apple", "abhishek",
    "Suraj", "Mohini", "Paytm", "apple", "abhishek", "Suraj", "Mohini", "Paytm", "apple",
    "abhishek", "Suraj", "Mohini", "Paytm", "apple", "abhishek",
    "Suraj", "Mohini", "Paytm", "apple", "abhishek", "Suraj", "Mohini", "Paytm", "apple",
    "abhishek", "Suraj", "Mohini", "Paytm", "apple", "abhishek",
    "Suraj", "Mohini", "Paytm", "apple", "abhishek", "Suraj", "Mohini", "Paytm", "apple",
    "abhishek", "Suraj", "Mohini", "Paytm", "apple", "abhishek",
    "Suraj", "Mohini", "Paytm", "apple"];

var m = document.getElementById("m");

for (let i = 0; i < list.length / 5; i++) {
    var div = document.createElement('div');
    div.className = "div1";

    // CHANGED 'var' TO 'let' HERE
    let o = i + 1;

    // This displays: 3, 6, 9, 12, etc.
    div.innerHTML = `${o * 1}`;

    div.addEventListener("click", () => {
        alert(o); // Now it correctly alerts 1, 2, 3... corresponding to the box clicked!
    });

    m.append(div);
}