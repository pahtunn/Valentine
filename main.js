function isAgree(){
    alert("Tớ cũng yêu cậu! ");
}

function isDisagree(){
    var posRandom = Math.floor(Math.random()*299);
    var diagree_btn = document.querySelector('#no');
    diagree_btn.style.position = 'relative';
    diagree_btn.style.top = posRandom + 'px';
    diagree_btn.style.right =  posRandom + 'px';

    // Object.assign(diagree_btn, style, {
    //     position: 'relative',
    //     top: posRandom + 'px',
    //     left: posRandom + 'px',
    // })
}