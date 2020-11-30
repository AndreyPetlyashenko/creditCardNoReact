(function () {
  const headerOpenedClass = "true";

  const isMobileCheck = () => document.body.clientWidth < 769;
  let isMobile = isMobileCheck();

  window.addEventListener("resize", () => {
    isMobile = isMobileCheck();
  });

  if (isMobile) {
    const logo = document.getElementById("mobileLogo");
    logo.classList.add("Ismobile");
  }

  /**
   * Menu toggle
   */
  const headerBurgerId = "headerBurger";
  const headerMenuId = "headerMenu";

  const headerBurger = document.getElementById(headerBurgerId);
  const headerMenu = document.getElementById(headerMenuId);

  headerBurger.addEventListener("click", menuToggler);

  function menuToggler(e) {
    // menu open/close
    headerMenu.classList.toggle(headerOpenedClass);

    // icon change
    headerBurger.classList.toggle(headerOpenedClass);

    // body styles
    if (headerBurger.classList.contains(headerOpenedClass)) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }
  /**
   * Menu toggle end
   */

  /**
   * Mobile Submenu
   */
  const itemClass = "item";
  headerMenu.addEventListener("click", mobileSubmenuToggler, true);

  function mobileSubmenuToggler(event) {
    if (!isMobile) {
      return;
    }

    let target;

    if (event.target.classList.contains(itemClass)) {
      target = event.target;
    } else if (event.target.parentElement.classList.contains(itemClass)) {
      target = event.target.parentElement;
    } else {
      return;
    }

    target.classList.toggle(headerOpenedClass);
  }
  /**
   * Mobile submenu end
   */
})();
