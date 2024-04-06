class SexyKnob extends HTMLElement {
  constructor() {
    super();
    console.log("SexyKnob inicializado: ", this);
    this.dragging = false;
    this.startX = 0;
    this.startY = 0;
    this.currentX = 0;
    this.currentY = 0;
    this.innit = parseInt(this.getAttribute('init')) || 0;
    this.rotationFactorX = (3.14 * 2 * (this.innit)) / -100;
    this.rotationFactorY = (3.14 * 2 * (this.innit)) / -100;

    this.src = this.getAttribute('src') || 'https://raw.githubusercontent.com/tnkii-dev/sexy-knob/main/knobIcon_white.png';
    this.min = parseInt(this.getAttribute('min')) || -2147483648;
    this.max = parseInt(this.getAttribute('max')) || 2147483648;
    const width = parseInt(this.getAttribute('width')) || 100;
    const height = parseInt(this.getAttribute('height')) || 100;
    this.type = this.getAttribute('type') || 'y';

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    this.texture = document.createElement('img');
    this.texture.src = this.src;
    this.texture.onload = () => {
      ctx.drawImage(this.texture, 0, 0, width, height);
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      if (this.type === 'x') {
        ctx.translate(width / 2, height / 2);
        ctx.rotate(-(this.rotationFactorX));
        ctx.translate(-width / 2, -height / 2);
      } else {
        ctx.translate(width / 2, height / 2);
        ctx.rotate(-(this.rotationFactorY));
        ctx.translate(-width / 2, -height / 2);
      }
      ctx.drawImage(this.texture, 0, 0, width, height);
      ctx.restore();
    };
    this.appendChild(canvas);

    canvas.addEventListener('mousedown', (event) => {
      this.dragging = true;
      this.startX = event.clientX;
      this.startY = event.clientY;
      this.currentX = event.clientX;
      this.currentY = event.clientY;
    });

    canvas.addEventListener('touchstart', (event) => {
      this.dragging = true;
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
      this.currentX = event.touches[0].clientX;
      this.currentY = event.touches[0].clientY;
    });

    document.addEventListener('mousemove', this.handleMouseMove.bind(this));
    document.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: false });
    document.addEventListener('mouseup', this.handleMouseUp.bind(this));
    document.addEventListener('touchend', this.handleTouchEnd.bind(this));

    this.value = this.getAttribute('init') || 0;
    this.exportValue();
  }

  handleMouseMove(event) {
    if (this.dragging) {
      this.currentX = event.clientX;
      this.currentY = event.clientY;
      if (this.type === 'x') {
        this.rotationFactorX += (this.currentX - this.startX) * 0.01;
        this.startX = this.currentX;
      } else {
        this.rotationFactorY += (this.currentY - this.startY) * 0.01;
        this.startY = this.currentY;
      }
      this.rotateKnob();
    }
  }

  handleTouchMove(event) {
    event.preventDefault(); // Evita el comportamiento táctil predeterminado (scrolling, zoom, etc.)
    if (this.dragging) {
      this.currentX = event.touches[0].clientX;
      this.currentY = event.touches[0].clientY;
      if (this.type === 'x') {
        this.rotationFactorX += (this.currentX - this.startX) * 0.01;
        this.startX = this.currentX;
      } else {
        this.rotationFactorY += (this.currentY - this.startY) * 0.01;
        this.startY = this.currentY;
      }
      this.rotateKnob();
    }
  }

  handleMouseUp() {
    this.dragging = false;
  }

  handleTouchEnd() {
    this.dragging = false;
  }

  rotateKnob() {
    let rotationFactor;
    if (this.type === 'x') {
      rotationFactor = this.rotationFactorX;
    } else {
      rotationFactor = -this.rotationFactorY;
    }
    this.init = Math.floor((rotationFactor * 100) / 3.14 / 2);
    if (this.init >= this.min && this.init <= this.max) {
      var radians = rotationFactor;
      var width = parseInt(this.getAttribute('width')) || 100;
      var height = parseInt(this.getAttribute('height')) || 100;
      var canvas = this.querySelector('canvas');
      var ctx = canvas.getContext('2d');

      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.rotate(radians);
      ctx.translate(-width / 2, -height / 2);
      ctx.drawImage(this.texture, 0, 0, width, height);
      ctx.restore();
      this.value = Math.floor((rotationFactor * 100) / 3.14 / 2);
    }
    this.exportValue();
  }

  exportValue() {
    const event = new CustomEvent('drag', {
      detail: this.value
    });
    this.dispatchEvent(event);
  }
}
customElements.define("sexy-knob", SexyKnob);