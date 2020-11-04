var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /*when an item is clicked, update the original select box,
        and the selected item:*/
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

//
const colors = document.querySelector(".colors");
const body = document.querySelector("body");
//if the user clicks any of the colors ,it gets highlighted with focus on the
// clicked colors
const colorNames = ["#0392BF", "#ED48BA", "#FBEC06", "#B3D4E0"];
colors.addEventListener("click", (event) => {
  for (let i = 0; i < colors.children.length; i++) {
    if (event.target.className === colors.children[i].className) {
      for (let j = 0; j < colors.children.length; j++) {
        colors.children[j].style.border = "1px solid";
      }
      event.target.style.border = "3px solid";
      body.style.backgroundColor = colorNames[i];
      // body.style.backgroundColor=
    }
  }
});

const toggleBtn = document.querySelector(".toggle-btn");
const toggleBar1 = document.querySelector(".toggle-bar-1");
const toggleBar2 = document.querySelector(".toggle-bar-2");
const toggleBar3 = document.querySelector(".toggle-bar-3");
const mainNav = document.querySelector(".main-nav");

let click = 0; //counter for the toggle btn
let msg;
toggleBtn.addEventListener("click", function () {
  //this controls what happens when the toggle button is clicked
  if (click % 2 == 0) {
    mainNav.style.left = "0";
    toggleBar1.style.opacity = "0";
    toggleBar2.style.transform = "rotateZ(45deg) translateX(6px)";
    toggleBar3.style.transform =
      "rotateZ(-45deg) translateX(4px) translateY(2px)";
  } else {
    mainNav.style.left = "-300px";
    toggleBar1.style.opacity = "1";
    toggleBar2.style.transform = "rotateZ(0) translateX(0)";
    toggleBar3.style.transform = "rotateZ(0) translateX(0) translateY(0)";
  }
  click++;
});
mainNav.addEventListener("click", function () {
  for (let i = 0; i < mainNav.children.length; i++) {
    if (event.target.textContent == mainNav.children[i].textContent) {
      click++;
      mainNav.style.left = "-300px";
      toggleBar1.style.opacity = "1";
      toggleBar2.style.transform = "rotateZ(0) translateX(0)";
      toggleBar3.style.transform = "rotateZ(0) translateX(0) translateY(0)";
      break;
    }
  }
});
