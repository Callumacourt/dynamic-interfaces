import menuImg from './menu.png';

export default function styleMobileViewport(header) {
  if (window.innerWidth > 900) return;

  const menuIcon = new Image();
  menuIcon.src = menuImg;
  menuIcon.classList.add('dropDownIcon');
  header.appendChild(menuIcon);

  menuIcon.addEventListener('click', () => {
    const dropDown = document.querySelector('.dropDownContainer');
    if (dropDown) {
      document.body.removeChild(dropDown);
      return;
    }

    const menuItems = [
      { name: 'Home', link: '#' },
      { name: 'Shop', link: '#' },
      {
        name: 'About Us',
        subItems: [
          { name: '- Our pianos', link: '#' },
          { name: '- Our history', link: '#' },
        ],
      },
      { name: 'Contact', link: '#' },
      {
        name: 'Sale',
        subItems: [
          { name: '- New Arrivals', link: '#' },
          { name: '- Clearance', link: '#' },
        ],
      },
    ];

    const newDropDown = document.createElement('div');
    newDropDown.classList.add('dropDownContainer');
    document.body.appendChild(newDropDown);

    const list = document.createElement('ul');
    newDropDown.appendChild(list);

    menuItems.forEach(item => {
      const li = document.createElement('li');
      list.appendChild(li);

      const a = document.createElement('a');
      a.innerText = item.name;
      a.href = item.link;
      li.appendChild(a);

      if (item.subItems) {
        const subList = document.createElement('ul');
        subList.classList.add('sublists');
        li.appendChild(subList);

        item.subItems.forEach(sub => {
          const subLi = document.createElement('li');
          subList.appendChild(subLi);

          const subA = document.createElement('a');
          subA.innerText = sub.name;
          subA.href = sub.link;
          subLi.appendChild(subA);
        });
      }
    });
  });
}
