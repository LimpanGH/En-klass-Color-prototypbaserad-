function Color(r, g, b) {
  // Check if value intervall is 0-255
  this.r = Math.max(0, Math.min(255, r));
  this.g = Math.max(0, Math.min(255, g));
  this.b = Math.max(0, Math.min(255, b));
}

// RGB
Color.prototype.rgb = function () {
  return `rgb(${this.r},${this.g},${this.b})`;
};

// Hex
Color.prototype.hex = function () {
  const rHex = this.r.toString(16).padStart(2, '0');
  const gHex = this.g.toString(16).padStart(2, '0');
  const bHex = this.b.toString(16).padStart(2, '0');
  return `#${rHex}${gHex}${bHex}`;
};

// RGBA
Color.prototype.rgba = function (alpha) {
  const validAlpha = Math.max(0, Math.min(1, alpha));
  return `rgba(${this.r},${this.g},${this.b},${validAlpha})`;
};

const myColor = new Color(110, 140, 100, 0.2);

console.log('RGB:', myColor.rgb());
console.log('Hex:', myColor.hex());
console.log('RGBA:', myColor.rgba(0.5)); 

function Color(r,g,b,alpha) {
    this.r = Math.max(0, Math.min(255, r))
    this.g = Math.max(0, Math.min(255, g))
    this.b = Math.max(0, Math.min(255, b))
    this.alpha = Math.max(0, Math.min(1, alpha))
}

Color.prototype.hex = function () {
    return 
}