const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<footer class="site-footer bg-image overlay" style="background-image: url('images/woman_massage_stones_on_back_hero.jpg')">
   <div class="container">
      <div class="row">
         <div class="col-12 text-center mb-2">
            <a href="index.html"><img src="images/EssenceOfHealingLogoWT.png" class="footer-logo" alt="essence of healing logo white"></a>
         </div>
         <div class="col-12 text-center text-white"> 
            24333 Crenshaw Blvd.
            Suite 134
            Torrance, CA 90505 
         </div>
         <div class="col-12 text-center text-white mb-5"> 
            (424) 394 9531
         </div>
         <div class="col-12 text-center mb-5">
            <a href="index.html" class="">Home</a>
            <span class="mx-3"></span>
            <a href="skincare.html" class="">Skincare</a>
            <span class="mx-3"></span>
            <a href="combos.html" class="">Combos</a>
            <span class="mx-3"></span>
            <a href="eoh-skincare.html" class="">EOH Skincare</a>
         </div>
         <div class="col-12">
            <div class="social_29128 white text-center">
               <a href="https://www.instagram.com/sally_qian/?hl=en" target="_blank"><span class="icon-instagram"></span></a>
               <a href="https://www.youtube.com/@essenceofhealingspa2461" target="_blank"><span class="icon-youtube"></span></a>
               <a href="https://www.yelp.com/biz/essence-of-healing-spa-torrance" target="_blank"><span class="icon-yelp"></span></a>
               <a href="https://maps.app.goo.gl/RfGU5NUmKSmDzKqu5" target="_blank"><span class="icon-google"></span></a>
            </div>
         </div>
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
