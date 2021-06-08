(function () {
  const tabs = document.getElementsByClassName('tabs__input');
  for (const tab of tabs) {
    tab.addEventListener('change', () => {
      const allTabs = document.getElementsByClassName('tabs__content');
      for (const tab of allTabs) {
        tab.classList.remove('tabs__content_open');
      }

      const selectedTab = document.querySelector(
        `.tabs__content[data-id="${tab.dataset.id}"]`,
      );
      selectedTab.classList.add('tabs__content_open');
    });
  }
})();
