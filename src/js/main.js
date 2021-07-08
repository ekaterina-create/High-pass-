// tabs
class TabList {
  constructor(buttonsContainer, tabs, tabsBtn) {
    this.buttonsContainer = buttonsContainer;
    this.tabs = tabs;


    this.buttonsContainer.addEventListener('click', event => {
      const index = event.target.closest(`.${tabsBtn}`).dataset.value;
      document.querySelectorAll(`.${tabsBtn}`).forEach((btn) => {
        btn.classList.remove('active')
      })
      event.target.closest(`.${tabsBtn}`).classList.add('active')
      this.openTab(index);
    });
  }


  openTab(index) {
    this.tabs.querySelector('.active').classList.remove('active');
    this.tabs.querySelector(`.tab--${index}`).classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const buttonsContainer = document.querySelector('.tabs__btns');
  const tabsServices = document.querySelector('.tabs');
  const tabList = new TabList(buttonsContainer, tabsServices, 'tab__btn');

  const buttonsContainerProjects = document.querySelector('.tabs__nav');
  const tabsProjects = document.querySelector('.section-projects__tabs');
  const tabListProjects = new TabList(buttonsContainerProjects, tabsProjects, 'tabs__btn');

})
// burger
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
burger.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('burger--active');
  nav.classList.toggle('active');
});

// open search form
const searchActivate = () => {

  document.querySelector('.form__btn').addEventListener('click', (e) => {
    if (window.innerWidth < 999) {
      e.preventDefault()
      document.querySelector('.search__form').classList.toggle('active')
    }
    return false
  })
}

window.addEventListener('resize', searchActivate())
