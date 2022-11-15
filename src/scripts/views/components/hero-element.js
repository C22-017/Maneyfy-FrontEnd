import CONFIG from '../../globals/config';

class HeroElement extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        <div class="hero">
          <figure class="headline__figure">
            <img src="${CONFIG.IMAGE_HERO_LARGE_PATH}.jpg" alt="" class="lazyload">
          </figure>
        <div class="hero__content">
        <h1 class="hero__title">Kelola Keuanganmu \ndalam Satu Tempat</h1>
        <p class="hero__description">Merekap, Melacak, Mengontrol, hingga mengubah kebiasaan dalam mengelola keuangan dengan Maneyfy.</p>
        <button class="learn">Read More</button>
        </div>`;
  }
}

customElements.define('hero-element', HeroElement);
