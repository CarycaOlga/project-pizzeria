import { templates } from '../settings.js';
class LandingPage {
  constructor(element) {
    const thisLandingPage = this;
    thisLandingPage.render(element);
    thisLandingPage.initCarousel();
  }
  render(element) {
    const thisLandingPage = this;
    const generatedHTML = templates.landingPage();
    thisLandingPage.dom = {};
    thisLandingPage.dom.wrapper = element;
    thisLandingPage.dom.wrapper.innerHTML = generatedHTML;
  }
  initCarousel() {
    window.addEventListener('load', function() {
      let slider = document.querySelector('.glide');
      const config = {
        type: 'carousel',
        autoplay: 3000,
      };
      if(slider) {
        /* global Glide */
        let glide = new Glide(slider, config);
        glide.mount();
      }
    });
  }
}
export default LandingPage;
