const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<footer class="site-footer bg-image overlay" style="background-image: url('images/hero_1.jpg')">
   <div class="container">
      <div class="row">
         <div class="col-12 text-center mb-5">
            <a href="index.html"><img src="images/EssenceOfHealingLogoWT.png" style="max-width: 350px;" alt="essence of healing logo white"></a>
         </div>
         <div class="col-12 text-center mb-5">
            <a href="index.html" class="">Home</a>
            <span class="mx-3"></span>
            <a href="skincare.html" class="">Skincare</a>
            <span class="mx-3"></span>
            <a href="massage.html" class="">Massage</a>
            <span class="mx-3"></span>
            <a href="membership.html" class="">Membership</a>
            <span class="mx-3"></span>
            <a href="special-offers.html" class="">Special Offers</a>
         </div>
         <!--<div class="col-12">
            <div class="social_29128 white text-center">
               <a href="#"><span class="icon-twitter"></span></a>
               <a href="#"><span class="icon-instagram"></span></a>
               <a href="#"><span class="icon-facebook"></span></a>
               <a href="#"><span class="icon-linkedin"></span></a>
            </div>
         </div>-->
      </div>
      <div class="row pt-5 mt-5 text-center">
         <div class="col-md-12">
            <div class="border-top pt-5">
               <p class="small">
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script> All rights reserved
               </p>
            </div>
         </div>
      </div>
   </div>
</footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });


    // shadow exists outside of the template so we need to attach the stylesheet for appropriate styling
    ["css/style.css", "css/bootstrap.min.css", "fonts/icomoon/style.css"].map((href) => {
      const cssLink = document.createElement("link");
      cssLink.setAttribute("rel", "stylesheet");
      cssLink.setAttribute("href", href);
      shadowRoot.appendChild(cssLink);
    });


    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);
