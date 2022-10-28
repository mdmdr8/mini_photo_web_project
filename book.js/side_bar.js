//장바구니
const sidebar = document.querySelector(".side_bar_overlay");
//close button
const close = document.querySelector(".side_bar_close button");
//open button
const open = document.querySelector(".basket");

// open.addEventListener("click", function () {
//   sidebar.classList.add("show");
// });

// close.addEventListener("click", function () {
//   sidebar.classList.remove("show");
// });

function closeToggle() {
  close.classlist.toggle("active");
}
close.addEventListener("click", closeToggle);
