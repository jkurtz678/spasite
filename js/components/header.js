const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
<header class="site-navbar site-navbar-target mb-0 mb-lg-2 py-0 py-lg-3" role="banner">
  <div class="container">
    <div class="row align-items-center justify-content-center position-relative">
      <div class="d-none d-lg-flex col-12 col-lg-3 align-items-center justify-content-center justify-content-sm-start order-2 order-lg-1">
        <a class="d-flex align-items-center" style="text-decoration: none" href="https://maps.app.goo.gl/RfGU5NUmKSmDzKqu5" target="_blank">
          <span class="icon-map-marker accent-color mr-3" style="font-size: 2rem"> </span>
          <div style="line-height: 1.2; color: #000 !important; text-decoration: none;">
            24333 Crenshaw Blvd.<br />
            Suite 134<br />
            Torrance, CA 90505<br />
          </div>
        </a>
      </div>
      <div class="col-12 col-lg-6 d-flex justify-content-center order-1 order-lg-2 align-items-center" >
        <div class="site-logo serif text-center pt-1 pt-lg-4 pb-mb-3" style="max-width: 440px;">
        <!--<a href="index.html"><img src="images/eoh-title.webp" alt="essence of healing spa" style="width: 100%; min-height: 49px;"></a>-->
          <h1 class="accent-color title-style font-weight-bold" >Essence <span class="title-of">of</span> Healing Spa</h1>
          <h2 class="serif" style="font-size: 0.8em; color: black;">Face And Bodycare</h2>
        </div>
      </div>
      <div class="d-none d-md-flex col-12 col-sm-12 col-lg-3 align-items-center justify-content-center justify-content-lg-end order-3">
        <span class="icon-phone mr-2 accent-color" style="font-size: 1.5rem"></span>
        <h4 class="accent-color">
          (424) 394 9531
        </h4>
      </div>
    </div>
    <div class="d-block" style="min-height: 44px;>
      <div class="d-flex justify-content-center mb-4 mb-lg-0" style="width: 100%;">
        <img src="images/OrnamentLineLongerGold.webp" style="max-width: 100%" alt="golden divider line with ornament">
      </div>
    </div>
    <div class="row align-items-center">
      <!--<span class="d-block d-md-none" style="position: fixed; top: 38px; right: 25px;"><a href="#" class="site-menu-toggle js-menu-toggle py-5"><span class="icon-menu h3 accent-color"></span></a></span>-->
      <nav class="site-navigation text-center mx-auto d-none d-lg-block" role="navigation">
        <ul class="site-menu main-menu js-clone-nav mx-auto" style="display:flex; align-items: center;">
          <li id="home-nav" ><a href="index.html" class="nav-link">HOME</a></li>
          <li id="skincare-nav"><a href="skincare.html" class="nav-link">SKINCARE</a></li>
          <li id="combos-nav"><a href="combos.html" class="nav-link">COMBOS</a></li>
          <li id="eoh-skincare-nav"><a href="eoh-skincare.html" class="nav-link" ><div style="display: flex; align-items: center"><img src="images/ehs-logo.png" style="max-width: 35px; margin-right: 6px;"/><span>SKINCARE</span></div></a></li>
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
