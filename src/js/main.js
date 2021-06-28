// tabs
class TabList {
  constructor(buttonsContainer, tabs, tabsBtn) {
    this.buttonsContainer = buttonsContainer;
    this.tabs = tabs;
    
    
    this.buttonsContainer.addEventListener('click', event => {
      const index = event.target.closest(`.${tabsBtn}`).dataset.value;
      document.querySelectorAll(`.${tabsBtn}`).forEach( (btn) => {
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

document.addEventListener('DOMContentLoaded', ()=>{
  const buttonsContainer = document.querySelector('.tabs__nav');
  const tabs             = document.querySelector('.tabs');
  const buttonsContainer2 = document.querySelector('.tab2__btns');
  const tabs2             = document.querySelector('.tabs2');

  
  const tabList = new TabList(buttonsContainer, tabs,'tabs__btn');
  const tabList2 = new TabList(buttonsContainer2, tabs2,'tab2__btn');
})

