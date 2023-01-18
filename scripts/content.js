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


for(let i=0; i<text.length; i++){
    if(text[i].innerHTML.includes('oiseau')){
        text[i].innerHTML = text[i].innerHTML.
        replaceAll( /oiseau|oiseaux|Oiseau|Oiseaux/gi, '\ud83d\udc26')
    }
}
for(let i=0; i<text.length; i++){
    if(text[i].innerHTML.includes('chien')){
        text[i].innerHTML = text[i].innerHTML.
        replaceAll( /chien|chiens|Chien|Chiens/gi, '\ud83d\udc15 ')
    }
}
for(let i=0; i<text.length; i++){
    if(text[i].innerHTML.includes('rongeur')){
        text[i].innerHTML = text[i].innerHTML.
        replaceAll( /rongeurs/gi, '\uD83D\uDC00')
    }
}
for(let i=0; i<text.length; i++){
    if(text[i].innerHTML.includes('arbre')){
        text[i].innerHTML = text[i].innerHTML.
        replaceAll( /arbre|arbres|Arbre|Arbres/gi, '\ud83c\udf32')
    }
}

for(let i=0; i<text.length; i++){
    if(text[i].innerHTML.includes('famille')){
        text[i].innerHTML = text[i].innerHTML.
        replaceAll( 'famille', '👨‍👩‍👦‍👦')
    }
}

for(let i=0; i<text.length; i++){
    if(text[i].innerHTML.includes('fille')){
        text[i].innerHTML = text[i].innerHTML.
        replaceAll( 'fille', '👧')
    }
}
for(let i=0; i<text.length; i++){
    if(text[i].innerHTML.includes(' fils ')){
        text[i].innerHTML = text[i].innerHTML.
        replaceAll( 'fils', '👦')
    }
}

for(let i=0; i<text.length; i++){
    if(text[i].innerHTML.includes('couple')){
        text[i].innerHTML = text[i].innerHTML.
        replaceAll( 'couple', '👩‍❤️‍👨')
    }
}


for(let i=0; i<text.length; i++){
    if(text[i].innerHTML.includes('aime')){
        text[i].innerHTML = text[i].innerHTML.
        replaceAll( 'aime', '❤️')
    }
}
for(let i=0; i<text.length; i++){
    if(text[i].innerHTML.includes('maison')){
        text[i].innerHTML = text[i].innerHTML.
        replaceAll(/domicile|maison/gi, '🏠')
    }
}

for(let i=0; i<text.length; i++){
    if(text[i].innerHTML.includes('mariage')){
        text[i].innerHTML = text[i].innerHTML.
        replaceAll( 'mariage', '👰‍♀️')
    }
}
for(let i=0; i<text.length; i++){
    if(text[i].innerHTML.includes('temps')){
        text[i].innerHTML = text[i].innerHTML.
        replaceAll( 'temps', '⏱️')
    }
}


const articles = document.querySelectorAll("div.mw-parser-output ");

articles.forEach(article => {
  if (article) {
    const text = article.textContent;
    const wordMatchRegExp = /[^\s]+/g;
    const words = text.matchAll(wordMatchRegExp);
    const wordCount = [...words].length;
    const readingTime = Math.round(wordCount / 200);
    const time = readingTime%60
    const readingTimeInHour = (readingTime-time)/60
    const badge = document.createElement("p");
    badge.classList.add("color-secondary-text", "type--caption");
    badge.textContent = `⏱️ ${readingTimeInHour+"h"+time} min read`;

    article.insertAdjacentElement("afterbegin", badge);
  }
});
  