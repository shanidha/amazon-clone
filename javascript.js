import { todayDeal } from "./todayDeal.js";

console.log(todayDeal);

let leftBtn = document.getElementById("btn-cntr-left");
let rightBtn = document.getElementById("btn-cntr-right");
let imageItem = document.querySelectorAll(".image-item");

/**---------------------------Sliding Images Section---------------------------*/
console.log(imageItem.length);
let start = 0;
let end = (imageItem.length - 1) * 100;
leftBtn.addEventListener("click", handleLeftBtn);
rightBtn.addEventListener("click", handleRightBtn);
function handleLeftBtn() {
  if (start < 0) {
    start = start + 100;
  }

  imageItem.forEach((i) => {
    i.style.transform = `translateX(${start}%)`;
  });
}
function handleRightBtn() {
  if (start >= -end + 100) {
    start = start - 100;
  }
  imageItem.forEach((i) => {
    i.style.transform = `translateX(${start}%)`;
  });
}
//Automatic transition
function renderAuto() {
  if (start >= -end + 100) handleRightBtn();
  else start = 0;
}
//Setting Interval timing for automatic transitions

// setInterval(renderAuto,4000)

/**---------------------------SideBar Listing Menu---------------------------*/
const sidebarElemnt = document.getElementById("sidebar-cntr-show");
const menuAllElement = document.getElementById("open-menu");
const closeMenu = document.getElementById("sidebar-close");
menuAllElement.addEventListener("click", () => {
  sidebarElemnt.classList.toggle("sidebar-show");
});
closeMenu.addEventListener("click", () => {
  sidebarElemnt.classList.toggle("sidebar-show");
});

/**---------------------------Today's Deal Sliding Button Container---------------------------*/

//Replacing large Html Elemnt with For Loop
let todayDealProductListContainerElement = document.querySelector(
  ".todays-deal-product-list"
);
console.log(todayDealProductListContainerElement);
let htmlElement = "";
let todayDealLength = todayDeal.length;
for (let i = 0; i < todayDealLength; i++) {
  htmlElement += `
                <div class="todays-list-product-item">
                    <img src=${todayDeal[i].img} alt=""/>
                   
                </div>
    `;
}
todayDealProductListContainerElement.innerHTML = htmlElement;
console.log(htmlElement);

//Left and Right Button Sliding
let dealLeftBtn = document.getElementById("today-deal-btn-left");
let dealRightBtn = document.getElementById("today-deal-btn-right");

let todayDealProductItemElement = document.querySelectorAll(
  ".todays-list-product-item"
);
let startDeal = 0;

dealLeftBtn.addEventListener("click", () => {
  // alert("left")

  if (startDeal < 0) {
    startDeal += 400;
  }
  if (startDeal > -1500) {
    todayDealProductItemElement.forEach((element) => {
      element.style.transform = `translateX(${startDeal}%)`;
    });
  }
});
dealRightBtn.addEventListener("click", () => {
  //  alert("right")
  // startDeal -= 100
  if (startDeal > -1500) {
    startDeal -= 400;
  }
  if (startDeal < 0) {
    todayDealProductItemElement.forEach((element) => {
      element.style.transform = `translateX(${startDeal}%)`;
    });
  }
});
