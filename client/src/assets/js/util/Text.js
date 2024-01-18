function adjustText() {
    var width = window.innerWidth;

    var text1 = document.querySelector('#section2 .right .HIDDEN .desc1');
    var text2 = document.getElementById('desc1-1');

    var text3 = document.querySelector('#section6 .skill__right .HIDDEN .desc1');
    var text4 = document.getElementById('desc6-1');

    if (width >= 850) {
        text1.innerHTML = "WHY, COLLABORATION AMONG";
        text2.innerHTML = "DEVELOPERS";
        text3.innerHTML = "Utilized Skills and Their";
        text4.innerHTML = "Rationale";
    } else {
        text1.innerHTML = "WHY, COLLABORATION";
        text2.innerHTML = "AMONG DEVELOPERS";
        text3.innerHTML = "Utilized Skills";
        text4.innerHTML = "and Their Rationale";
    }
}

window.addEventListener('resize', adjustText);
window.addEventListener('load', adjustText);