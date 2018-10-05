var inputs = document.querySelectorAll('.controls input')
console.log(inputs);

inputs.forEach(input => input.addEventListener("mousemove", function() {

    var suffix = this.dataset.sizing || ' ';
    console.log(suffix);

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}));