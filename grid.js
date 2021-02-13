function change(link, alt) {
    image.src = link;
    image.alt = alt;
    document.getElementById('matterhorn').style.background = 'rgb(59, 197, 197)';
    document.getElementById('denali').style.background = 'rgb(59, 197, 197)';
    document.getElementById('kirkjufell').style.background = 'rgb(59, 197, 197)';
    document.getElementById('tableMountain').style.background = 'rgb(59, 197, 197)';
    document.getElementById('vinicunca').style.background = 'rgb(59, 197, 197)';
    document.getElementById(alt).style.background = 'rgb(233, 119, 119)';
}
/*
matterhorn.onmouseover = function(event) {
    let target = event.target;
    target.style.background = 'pink';
}
matterhorn.onmouseout = function(event) {
    let target = event.target;
    target.style.background = '';
}

denali.onmouseover = function(event) {
    let target = event.target;
    target.style.background = 'pink';
}
denali.onmouseout = function(event) {
    let target = event.target;
    target.style.background = '';
}

kirkjufell.onmouseover = function(event) {
    let target = event.target;
    target.style.background = 'pink';
}
kirkjufell.onmouseout = function(event) {
    let target = event.target;
    target.style.background = '';
}

tableMountain.onmouseover = function(event) {
    let target = event.target;
    target.style.background = 'pink';
}
tableMountain.onmouseout = function(event) {
    let target = event.target;
    target.style.background = '';
}

vinicunca.onmouseover = function(event) {
    let target = event.target;
    target.style.background = 'pink';
}
vinicunca.onmouseout = function(event) {
    let target = event.target;
    target.style.background = '';
}*/