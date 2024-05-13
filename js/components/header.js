const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
<div class="site-mobile-menu site-navbar-target">
  <div class="site-mobile-menu-header">
    <div class="site-mobile-menu-close mt-3">
      <span class="icon-close2 js-menu-toggle"></span>
    </div>
  </div>
  <div class="site-mobile-menu-body"></div>
</div>
<header class="site-navbar site-navbar-target mb-3" role="banner">
  <div class="container">
    <div class="row align-items-center justify-content-center position-relative">
      <div class="d-none d-md-flex col-3 align-items-center">
        <span class="icon-map-marker accent-color mr-3" style="font-size: 2rem"> </span>
        <div style="line-height: 1.2">
          24333 Crenshaw Blvd.<br />
          Torrance, CA 90505<br />
          Suite 134
        </div>
        <span class="d-inline-block d-lg-none"><a href="#"
            class="text-white site-menu-toggle js-menu-toggle py-5 text-white"><span
              class="icon-menu h3 text-white"></span></a></span>
      </div>
      <div class="col-md-6 d-flex justify-content-center">
        <div class="site-logo serif text-center pt-4 pb-3">
          <img src="images/eoh-title.png" alt="essence of healing" style="max-width: 440px;">
          <h3 class="serif" style="font-size: 0.8em">Face And Bodycare</h3>
        </div>
      </div>
      <div class=" d-none d-md-flex col-3 align-items-center justify-content-end">
        <span class="icon-phone mr-2 accent-color" style="font-size: 1.5rem"></span>
        <h4 class="accent-color">
          (424) 394 9531
        </h4>
      </div>
    </div>
    <div class="d-flex justify-content-center" style="width: 100%">
      <img src="images/OrnamentLineLonger2.png" style="max-width: 100%">
    </div>
    <div class="row align-items-center">
      <nav class="site-navigation text-center mx-auto d-none d-lg-block" role="navigation">
        <ul class="site-menu main-menu js-clone-nav mx-auto ">
          <li id="home-nav" ><a href="index.html" class="nav-link">HOME</a></li>
          <li id="skincare-nav"><a href="skincare.html" class="nav-link">SKINCARE</a></li>
          <li id="massage-nav"><a href="massage.html" class="nav-link">MASSAGE</a></li>
          <li id="membership-nav"><a href="membership.html" class="nav-link">MEMBERSHIP</a></li>
          <li id="special-offers-nav"><a href="special-offers.html" class="nav-link">SPECIAL OFFERS</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });

    // shadow exists outside of the template so we need to attach the stylesheet for appropriate styling
    ["css/style.css", "css/bootstrap.min.css", "fonts/icomoon/style.css"].map((href) => {
      const cssLink = document.createElement("link");
      cssLink.setAttribute("rel", "stylesheet");
      cssLink.setAttribute("href", href);
      shadowRoot.appendChild(cssLink);
    });

    // Wait for the shadow DOM to be fully populated
    setTimeout(() => {
      const activePage = this.getAttribute('active-page');
      if (activePage) {
        const activeItem = shadowRoot.getElementById(`${activePage}-nav`);
        if (activeItem) {
          activeItem.classList.add('active');
        }
      }
    });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define("header-component", Header);
