'use strict';

// requisicao com promise
async function fetchApi() {
    try {
        const urlApi = (`https://type.fit/api/quotes`);
        const response = await fetch(urlApi);
        return await response.json();
    }
    catch (error) {
        console.log(error);
    }
};

// clique do botao e consumir api 
function showQuote() {
    const container = document.querySelector('.container');
    const displayStr = document.querySelector('.container-body');
    const searchBtn = document.querySelector('.container-button');
    let tagHtml = '';
    let countBtn = 0;

    searchBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        const textAuthor = await fetchApi();

        if (!textAuthor[countBtn]) {
            let starQuote =
                prompt('Você chegou ao final das frases. Quer voltar ao começo ou quer ler alguma frase específica? [0] a [1642] ');
            countBtn = starQuote;
        }

        if (!textAuthor[countBtn].author) {
            textAuthor[countBtn].author = 'Unknown';
        }

        tagHtml =
            '<blockquote class="container-quote">' +
                '<div class="container-aspas"><img src="images/aspas-cima.png" alt="abertura aspas"></div>' +
                '<p class="container-quote-text">' + textAuthor[countBtn].text + '</p>' +
                '<p class="container-quote-author"> By ' + textAuthor[countBtn].author +
                '</p>' + 
            '</blockquote>';

        container.style.backgroundColor = "white";
        displayStr.innerHTML = tagHtml;

        countBtn++;

    });
}



showQuote();