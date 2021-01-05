const inputs = document.querySelectorAll('.controls input');

function hundleUpdete () {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
console.log(this.name);

};

inputs.forEach(el => {
  el.addEventListener('change', hundleUpdete);
  el.addEventListener('mousemove', hundleUpdete);
});
