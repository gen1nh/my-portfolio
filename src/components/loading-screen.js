class LoadingScreen extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    // HTML do loader
    this.shadowRoot.innerHTML = `
      <style>
        #loading {
          position: fixed;
          inset: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #19181C;
          z-index: 9999;
          transition: opacity 0.7s ease;
        }
      </style>
      <div id="loading">
        <dotlottie-wc
          src="${this.getAttribute("src")}"
          speed="${this.getAttribute("speed") || 1}"
          style="width: ${this.getAttribute("width") || 180}px; height: ${this.getAttribute("height") || 180}px"
          mode="forward"
          loop autoplay>
        </dotlottie-wc>
      </div>
    `;

    const loadingDiv = this.shadowRoot.getElementById("loading");
    const content = document.getElementById("content");

    window.addEventListener("load", () => {
      // fade-out
      loadingDiv.classList.add("fade-out");

      // remove e mostra conteúdo
      setTimeout(() => {
        loadingDiv.remove();
        if (content) {
          content.classList.remove("hidden");
          content.classList.add("opacity-100");
        }
      }, 700);
    });
  }
}

customElements.define("loading-screen", LoadingScreen);
