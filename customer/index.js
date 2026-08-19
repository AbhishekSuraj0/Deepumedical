var contactData = document.getElementById("contactData");

var sheet = "1cb28gYunLwsO9v6Jpxbhxg6NqGYN_9v0MwCJ5e-GyzQ";

fetch(`https://opensheet.elk.sh/${sheet}/customer`)
  .then(res => res.json())
  .then(data => {

    data.forEach(k => {

      var div = document.createElement("div");

      div.className = "datalist";

      div.innerHTML = `
        <label>${k.customerName} - (${k.customerNumber})</label>

        <div class="btnd" style="display: none;">
          <button class="whatappbtn">WhatsApp</button>
          <button class="callNow">Call Now</button>
        </div>
      `;

      contactData.append(div);

      var whatsappbtn = div.querySelector(".whatappbtn");
      var callNow = div.querySelector(".callNow");
      var seetbn = div.querySelector(".btnd");


      // Customer div click
      div.addEventListener("click", () => {

        // Sabhi buttons hide karo
        document.querySelectorAll(".btnd").forEach(btn => {
          btn.style.display = "none";
        });

        // Current customer ka button show karo
        seetbn.style.display = "block";

      });


      // WhatsApp
      whatsappbtn.addEventListener("click", (e) => {

        e.stopPropagation();

        window.open(`https://wa.me/91${k.customerNumber}`, "_blank");

      });


      // Call
      callNow.addEventListener("click", (e) => {

        e.stopPropagation();

        window.location.href = `tel:${k.customerNumber}`;

      });

    });

  })
  .catch(err => {
    console.log("Error:", err);
  });