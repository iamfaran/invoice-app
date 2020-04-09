const firstName = localStorage.getItem("firstName");
const lastName = localStorage.getItem("lastName");
const address = localStorage.getItem("address");
const postCode = localStorage.getItem("postCode");
const date = localStorage.getItem("date");
const amount = localStorage.getItem("amount");

// document.querySelector(".first-name").innerHTML = firstName;
document.querySelector(".last-name").innerHTML = lastName;

document.querySelectorAll(".first-name").forEach((Item) => {
  Item.innerHTML = `${firstName},`;
});
document.querySelectorAll(".last-name").forEach((Item) => {
  Item.innerHTML = `${lastName}`;
});

document.querySelectorAll(".mydate").forEach((Item) => {
  Item.innerHTML = `Date: ${date}`;
});
document.querySelectorAll(".address").forEach((Item) => {
  Item.innerHTML = `${address}`;
});
document.querySelectorAll(".post-code").forEach((Item) => {
  Item.innerHTML = `${postCode}`;
});

document.querySelectorAll(".amount").forEach((Item) => {
  Item.innerHTML = `${amount}`;
});

document.querySelectorAll(".amount-boxes").forEach((item) => {
  item.innerHTML = `${amount}.00`;
});
