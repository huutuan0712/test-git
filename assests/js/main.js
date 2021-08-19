$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
const mobileMenu = {
  init: function () {
    this.clickToggle(".mobile__nav", ".mobile__menu", "mobile-menu-visible");
    this.clickRemove(".close__btn", ".mobile__menu", "mobile-menu-visible");
    this.clickToggle(".mobile__nav", ".mobile__backdrop", "mobile-backgroud");
    this.clickRemove(".close__btn", ".mobile__backdrop", "mobile-backgroud");
    this.headerScroll(".sroll-top");
    this.headerMenu(".header");
    this.scrollTop(".sroll-top");
  },
  ///dùng để thêm class
  clickToggle: function (button, classMain, classA) {
    const btn = document.querySelector(button);
    const main = document.querySelector(classMain);
    btn.addEventListener("click", function () {
      main.classList.toggle(classA);
    });
  },
  ///dùng để xóa class mới tạo
  clickRemove: function (button, classMain, classA) {
    const btn = document.querySelector(button);
    const main = document.querySelector(classMain);
    btn.addEventListener("click", function () {
      main.classList.remove(classA);
    });
  },
  ///dùng để hiện thị button
  headerScroll: function (header) {
    let seft = document.querySelector(header);
    let heightH = seft.offsetHeight;
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > heightH) {
        seft.classList.add("sroll-top-open");
      } else seft.classList.remove("sroll-top-open");
    });
  },
  ///hiển thị menu
  headerMenu: function (header) {
    let seft = document.querySelector(header);
    let heightH = seft.offsetHeight;
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > heightH) {
        seft.classList.add("transpanrent-header");
      } else seft.classList.remove("transpanrent-header");
    });
  },
  //gán sự kiện click cho button
  scrollTop: function (body) {
    const scroll = document.querySelector(body);
    scroll.addEventListener("click", function () {
      //Nếu button được click thì nhảy về đầu trang
      document.body.scrollTop = 0;

      document.documentElement.scrollTop = 0;
    });
  },
};
mobileMenu.init();
