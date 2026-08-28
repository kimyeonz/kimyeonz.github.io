// 스크롤 시 nav active 표시
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

// News 목록: 4개까지만 보이고 5번째가 반쯤 걸치도록 높이 계산
// (항목이 줄바꿈되면 높이가 달라져서 CSS 고정값으로는 안 맞음)
const VISIBLE_NEWS = 4;
const newsList = document.querySelector('.news-list');

function sizeNewsList() {
  if (!newsList) return;
  newsList.style.maxHeight = '';
  const items = newsList.querySelectorAll('.news-item');
  if (items.length <= VISIBLE_NEWS) return;

  newsList.scrollTop = 0;
  const listTop = newsList.getBoundingClientRect().top;
  const next = items[VISIBLE_NEWS].getBoundingClientRect();
  const peek = Math.min(next.height / 2, 18);
  newsList.style.maxHeight = Math.round(next.top - listTop + peek) + 'px';
}

sizeNewsList();
window.addEventListener('resize', sizeNewsList);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(sizeNewsList);
