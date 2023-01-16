const text = document.querySelectorAll
('h1, h2, h3, h4, h5, p, li, td, caption, span, a')


for(let i=0; i<text.length; i++){
    if(text[i].innerHTML.includes('chat')){
        text[i].innerHTML = text[i].innerHTML.
        replaceAll(/chat|Chat|chatte/gi, '🐈')
    }
}

for(let i=0; i<text.length; i++){
    if(text[i].innerHTML.includes('visage')){
        text[i].innerHTML = text[i].innerHTML.
        replaceAll( 'visage', '\ud83d\ude10')
    }
}

for(let i=0; i<text.length; i++){
    if(text[i].innerHTML.includes('clown')){
        text[i].innerHTML = text[i].innerHTML.
        replaceAll( 'clown', '\ud83e\udd21')
    }
}


for(let i=0; i<text.length; i++){
    if(text[i].innerHTML.includes(' bâtard ')){
        text[i].innerHTML = text[i].innerHTML.
        replace( 'bâtard ', '\ud83d\udca9')
    }
}