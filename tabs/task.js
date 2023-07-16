const menuList = Array.from(document.getElementById('tabs1').querySelectorAll('.tab'));
const articles = Array.from(document.getElementById('tabs1').querySelectorAll('.tab__content'));


menuList.forEach((menu) => {
  let index = menuList.indexOf(menu);
  menu.addEventListener('click', () => {
    let i = 0;
    articles.forEach((article) => {
      article.className = 'tab__content';
      menuList[i].className = 'tab';
      i++;
    });
    articles[index].classList.add('tab__content_active');
    menu.classList.add('tab_active');
  })
})
