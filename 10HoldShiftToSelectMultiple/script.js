var checkboxes = document.querySelectorAll('input[type="checkbox"]');

var checkboxArray = Array.from(checkboxes);
console.log(checkboxArray);


var lastChecked;


function handleCheck(e) {
    console.log(e);
    var inBetween = false;
    if (e.shiftKey && this.checked) {
        console.log(this);
        checkboxArray.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}
checkboxArray.forEach(checkbox => {
    addEventListener('click', handleCheck)
});