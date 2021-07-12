"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// tabs
var TabList = /*#__PURE__*/function () {
  function TabList(buttonsContainer, tabs, tabsBtn) {
    var _this = this;

    _classCallCheck(this, TabList);

    this.buttonsContainer = buttonsContainer;
    this.tabs = tabs;
    this.buttonsContainer.addEventListener('click', function (event) {
      var index = event.target.closest(".".concat(tabsBtn)).dataset.value;
      document.querySelectorAll(".".concat(tabsBtn)).forEach(function (btn) {
        btn.classList.remove('active');
      });
      event.target.closest(".".concat(tabsBtn)).classList.add('active');

      _this.openTab(index);
    });
  }

  _createClass(TabList, [{
    key: "openTab",
    value: function openTab(index) {
      this.tabs.querySelector('.active').classList.remove('active');
      this.tabs.querySelector(".tab--".concat(index)).classList.add('active');
    }
  }]);

  return TabList;
}();

document.addEventListener('DOMContentLoaded', function () {
  var buttonsContainer = document.querySelector('.tabs__btns');
  var tabsServices = document.querySelector('.tabs');
  var tabList = new TabList(buttonsContainer, tabsServices, 'tab__btn');
  var buttonsContainerProjects = document.querySelector('.tabs__nav');
  var tabsProjects = document.querySelector('.section-projects__tabs');
  var tabListProjects = new TabList(buttonsContainerProjects, tabsProjects, 'tabs__btn');
}); // burger

var burger = document.querySelector('.burger');
var nav = document.querySelector('.nav');
var container = document.querySelector('.header__container');
burger.addEventListener('click', function (e) {
  e.currentTarget.classList.toggle('burger--active');
  nav.classList.toggle('active');
});
document.body.addEventListener('click', function (e) {
  if (e.target.classList.contains('nav-link')) {
    nav.classList.remove('active');
    burger.classList.remove('burger--active');
  }
});
document.addEventListener('click', outsideEvtListener);

function outsideEvtListener(evt) {
  if (evt.target === nav || nav.contains(evt.target) || evt.target === burger) {
    return;
  }

  nav.classList.remove('active');
  burger.classList.remove('burger--active');
} // open search form


var searchActivate = function searchActivate() {
  document.querySelector('.form__btn').addEventListener('click', function (e) {
    if (window.innerWidth < 1010) {
      e.preventDefault();
      document.querySelector('.search__form').classList.toggle('active');
    }

    return false;
  });
};

window.addEventListener('resize', searchActivate());
//# sourceMappingURL=main.js.map
