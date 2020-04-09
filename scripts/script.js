document.querySelector(".details").addEventListener("submit", (e) => {
  e.preventDefault();

  localStorage.setItem("date", e.target.elements.date.value);
  localStorage.setItem("firstName", e.target.elements.firstName.value);
  localStorage.setItem("lastName", e.target.elements.lastName.value);
  localStorage.setItem("address", e.target.elements.address.value);
  localStorage.setItem("postCode", e.target.elements.postCode.value);
  localStorage.setItem("amount", e.target.elements.amount.value);
  window.open("invoice.html");
});

document.getElementById("datePicker").valueAsDate = new Date();
// console.log(test);
