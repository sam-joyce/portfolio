window.onload = () => {
  const stickyNavbar = document.getElementById("navvv");
  const sticky = stickyNavbar.offsetTop;

  window.onscroll = () => {
    if (window.pageYOffset >= sticky) {
      stickyNavbar.classList.add("sticky");
    } else {
      stickyNavbar.classList.remove("sticky");
    }
  }
}