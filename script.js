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

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const rgbBtn = document.querySelector('#btn-rgb');
  const hexBtn = document.querySelector('#btn-hex');
  const rgbaBtn = document.querySelector('#btn-rgba');

  const isColor = (strColor) => {
    const s = new Option().style;
    s.color = strColor;
    return s.color !== '';
  };

  // ! RGB -----------------
  rgbBtn.addEventListener('click', () => {
    let choice = prompt('Please enter a RGB - color, rgb(255,0,0)');

    const isValidColor = isColor(choice);
    if (!isValidColor) {
      alert(
        'Not a valid html-colour, example: rgb(255,0,0). Find your color-code at: https://htmlcolorcodes.com/color-names/'
      );
      return;
    }
    const color = choice
      .split(/[(),]/)
      .filter((part) => !isNaN(part))
      .map(Number);
    const myColor = new Color(color[0], color[1], color[2]);
    body.style.backgroundColor = myColor.rgb();

    const rgbDiv = document.querySelector('#RGB');
    rgbDiv.innerHTML = `RGB: ${color.join(', ')}`;

    const hexDiv = document.querySelector('#HEX');
    hexDiv.innerHTML = `HEX: ${myColor.hex()}`;

    const rgbaDiv = document.querySelector('#RGBA');
    rgbaDiv.innerHTML = `RGBA: ${color.join(', ')}`;
  });

  // ! HEX -----------------
  hexBtn.addEventListener('click', () => {
    let choice = prompt('Please enter a HEX - color, #FF5733');
    const isValidColor = isColor(choice);
    if (!isValidColor) {
      alert(
        'Not a valid html-colour, example: #FF5733. Find your color-code at: https://htmlcolorcodes.com/color-names/'
      );
      return;
    }

    const color = choice.substring(1);
    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);
    const myColor = new Color(r, g, b);

    body.style.backgroundColor = myColor.hex();

    const rgbDiv = document.querySelector('#RGB');
    rgbDiv.innerHTML = `RGB: ${r}, ${g}, ${b}`;

    const hexDiv = document.querySelector('#HEX');
    hexDiv.innerHTML = `HEX: ${myColor.hex()}`;

    const rgbaDiv = document.querySelector('#RGBA');
    rgbaDiv.innerHTML = `RGBA: ${r}, ${g}, ${b}, 1`;
  });

  // ! RGBA -----------------
  rgbaBtn.addEventListener('click', () => {
    let choice = prompt('Please enter a RGBA - color, rgba(100, 130, 90, 0.3)');

    const isValidColor = isColor(choice);
    if (!isValidColor) {
      alert(
        'Not a valid html-colour, example: rgba(100, 130, 90, 0.3). Find your color-code at: https://htmlcolorcodes.com/color-names/'
      );
      return;
    }

    const colorValues = choice.match(/\d+(\.\d+)?/g).map(Number);
    const myColor = new Color(
      colorValues[0],
      colorValues[1],
      colorValues[2],
      colorValues[3]
    );

    body.style.backgroundColor = myColor.rgba(colorValues[3]);

    const rgbDiv = document.querySelector('#RGB');
    rgbDiv.innerHTML = `RGB: ${colorValues[0]}, ${colorValues[1]}, ${colorValues[2]}`;

    const hexDiv = document.querySelector('#HEX');
    hexDiv.innerHTML = `HEX: ${myColor.hex()}`;

    const rgbaDiv = document.querySelector('#RGBA');
    rgbaDiv.innerHTML = `RGBA: ${colorValues.join(', ')}`;
  });
});
