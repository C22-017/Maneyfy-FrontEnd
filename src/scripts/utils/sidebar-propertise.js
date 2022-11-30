const drawerInitiator = () => {
  const showNavbar = (toggleId, iconToggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId);
    const iconToggle = document.getElementById(iconToggleId);
    const nav = document.getElementById(navId);
    const bodypd = document.getElementById(bodyId);
    const headerpd = document.getElementById(headerId);

    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show-navbar');
        iconToggle.classList.toggle('bx-x');
        bodypd.classList.toggle('body-pd');
        headerpd.classList.toggle('body-pd');
      });
    }
  };

  showNavbar('header-toggle', 'icon-toggle', 'nav-bar', 'body-pd', 'header');
};

export { drawerInitiator };
