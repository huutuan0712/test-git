const abc = {
  init: function () {
    this.clickActive(".wrapper", ".tab-item", ".layout-item");
  },
  clickToggle: function (button, classRoot, classA) {
    const btn = document.querySelector(button);
    const classRoot = document.querySelector(classRoot);
    btn.addEventListener("click", function () {
      classRoot.classList.toggle(classA);
    });
  },
  // headerScroll: function (header) {
  //   let seft = document.querySelector(header);
  //   let heightH = seft.offsetHeight;
  //   window.addEventListener("scroll", function () {
  //     if (window.pageYOffset > heightH) {
  //       seft.classList.add("Hactive");
  //     } else seft.classList.remove("Hactive");
  //   });
  // },
  // clickActive: function (wrap, button, layout) {
  //   const wrapper = document.querySelector(wrap);
  //   const btns = wrapper.querySelectorAll(button);
  //   const layouts = wrapper.querySelectorAll(layout);
  //   btns.forEach((btn, i) => {
  //     btn.addEventListener("click", function () {
  //       btns.forEach((btn) => btn.classList.remove("tab-active"));
  //       btns[i].classList.add("tab-active");
  //       layouts.forEach((layout) => layout.classList.remove("active"));
  //       layouts[i].classList.add("active");
  //     });
  //   });
};

// let count = parseInt(document.querySelector(".count").innerHTML);
// var index = 0;
// setInterval(() => {
//   if (index < count) {
//     document.querySelector(".count").innerHTML = index;
//     index++;
//   }
// }, 10);
