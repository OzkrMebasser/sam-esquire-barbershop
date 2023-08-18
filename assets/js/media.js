// Media buttons

import * as sidebar from './sidebar';

const btn = document.getElementById('toggleBtn');
const sidebarEl = document.getElementById('sidebar');

btn.addEventListener('click', () => {
  sidebar.toggle();
  if (sidebar.isOpen()) {
    sidebarEl.classList.add('open');
  } else {
    sidebarEl.classList.remove('open');
  }
});