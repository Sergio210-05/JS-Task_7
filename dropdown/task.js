const dropdownValue = Array.from(document.querySelectorAll('.dropdown__value'));
const dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'));
// console.log(dropdownList.classList);


function dropMenu() {
  const dropdownList = this.closest('div.dropdown').querySelector('.dropdown__list');
  if (this.switchOn) {
    dropdownList.className = 'dropdown__list';
    this.switchOn = false;
    return false;
  } else {
    dropdownList.classList.add('dropdown__list_active');
    this.switchOn = true;
    return false;
  }
}

dropdownValue.forEach((value) => {
  value.switchOn = false;
  value.addEventListener('click', dropMenu);
})

dropdownItems.forEach((dropItem) => {
  dropItem.onclick = () => {
    const value = dropItem.closest('div.dropdown').querySelector('.dropdown__value');
    value.textContent = dropItem.textContent;
    value.switchOn = false;
    dropItem.closest('div.dropdown').querySelector('.dropdown__list').className = 'dropdown__list';
    return false;
  }
})