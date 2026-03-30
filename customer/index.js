
var customerNumber = document.getElementById("customernumber")
var searchvalue = document.getElementById('searchvalue')
let close = document.getElementById('customerDetails')
var customerMedicine = ''
var medicinedata = document.getElementById('medicinedata')


customerNumber.addEventListener('input', () => {
  fetch("https://opensheet.elk.sh/1cb28gYunLwsO9v6Jpxbhxg6NqGYN_9v0MwCJ5e-GyzQ/Customer")
    .then((res) => res.json())
    .then((data) => {
      const value = customerNumber.value;
      searchvalue.innerHTML = '';
      close.style.display = "none"

      if (!value) return;

      if (data === 0) {
        searchvalue.innerHTML = "this Number is not avaiable"
        return
      }

      const result = data.filter((item) => {
        // console.log(item)
        const number = item.customerNumber;
        const name = (item.customerName).toLowerCase() ;
        return number.includes(value) || name.includes(value) || item.category.toLowerCase().includes(value)
      })
      

      // console.log(result)

      if (result.length === 0) {
        searchvalue.innerHTML = "this cutomer is not here"
        return
      }
      result.forEach((item) => {
        const div = document.createElement('div');
        div.style.border = "1px solid #000";
        div.style.padding = "8px";
        div.style.background = "white"
        div.style.margin = "6px 0px";
        div.style.cursor = "pointer";
        div.innerHTML = `
      <b>${item.customerNumber}</b>`;
        searchvalue.appendChild(div)


        div.addEventListener('click', () => {
          let custname = document.getElementById('custName')
          let custnumber = document.getElementById('custMobile')
          let Catagories = document.getElementById('custCatagories')
          viewmedicien.style.display = "none"
          medicinedata.innerHTML = ""
          customerMedicine = item.customermedicine
          custname.innerHTML = `${item.customerName}`
          custnumber.innerHTML = item.customerNumber
          Catagories.innerHTML = item.category
          document.getElementById('lastvist').innerText = item.lastvisit


          close.style.display = "block"
        })
      })
    })

    .catch(err => { console.log(err) })
}
)





function close1() {
  close.style.display = "none"
}

let viewmedicien = document.getElementsByClassName('viewmedicien')[0]

function close2() {
  viewmedicien.style.display = "none"
}





function checkmedicine() {
  fetch("https://opensheet.elk.sh/1cb28gYunLwsO9v6Jpxbhxg6NqGYN_9v0MwCJ5e-GyzQ/customermdicine")
    .then(res => res.json())
    .then(data => {

      medicinedata.innerHTML = "";
      let found = false; // 🔥 track karega data mila ya nahi

      data.forEach(items => {
        let value = items[customerMedicine];      
        if (value && value.trim() !== "") {
          found = true;

          if (found) {
            let li = document.createElement("li");
            li.style.color = "black";
            li.innerText = value;

            medicinedata.appendChild(li);
          }
        }
      });

      // 🔥 loop ke baad check
      if (!found) {
        alert("No medicine found");
      }

      viewmedicien.style.display = "block";
    })
    .catch(err => console.log(err));
}
