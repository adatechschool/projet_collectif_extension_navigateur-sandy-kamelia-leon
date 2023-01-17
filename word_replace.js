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


const articles = document.querySelectorAll("div.mw-parser-output > p");

articles.forEach(article => {
  if (article) {
    const text = article.textContent;
    const wordMatchRegExp = /[^\s]+/g; // Regular expression
    const words = text.matchAll(wordMatchRegExp);
    // matchAll returns an iterator, convert to array to get word count
    const wordCount = [...words].length;
    const readingTime = Math.round(wordCount / 200);
    const badge = document.createElement("p");
    // Use the same styling as the publish information in an article's header
    badge.classList.add("color-secondary-text", "type--caption");
    badge.textContent = `⏱️ ${readingTime} min read`;

    article.insertAdjacentElement("afterend", badge);
  }
});
  