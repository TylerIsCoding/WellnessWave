
//Toggle menu --for mobile screens
// Set initial state when the page loads
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById('mobile-menu');
  const closeIcon = document.getElementById('close-icon');
  const menuIcon = document.getElementById('menu-icon');

  menu.style.display = 'none'; // Hide the menu initially
  closeIcon.style.display = 'none'; // Hide the close icon initially
  menuIcon.style.display = 'inline-block'; // Show the menu icon initially
});

function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  const closeIcon = document.getElementById('close-icon');
  const menuIcon = document.getElementById('menu-icon');

  if (menu.style.display === 'none' || menu.style.display === '') {
      // Show menu and hide menu icon, show close icon
      menu.style.display = 'flex';
      closeIcon.style.display = 'inline-block';
      menuIcon.style.display = 'none';
  } else {
      // Hide menu and show menu icon, hide close icon
      menu.style.display = 'none';
      closeIcon.style.display = 'none';
      menuIcon.style.display = 'inline-block';
  }
}


function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const closeIcon = document.getElementById('close-icon');
    const menuIcon = document.getElementById('menu-icon');

    if (menu.style.display === 'none' || menu.style.display === '') {
        // Show menu and hide menu icon, show close icon
        menu.style.display = 'flex';
        closeIcon.style.display = 'inline-block';
        menuIcon.style.display = 'none';
    } else {
        // Hide menu and show menu icon, hide close icon
        menu.style.display = 'none';
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'inline-block';
    }
}
