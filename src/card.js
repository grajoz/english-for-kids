export default class Card {
  constructor(cardObj) {
    this.cardObj = cardObj;
  }

  cardBuild() {
    const cardText = this.cardObj.word;
    const imgLink = this.cardObj.image;
    const { audioSrc } = this.cardObj;
    const { translation } = this.cardObj;

    const category = document.getElementById('category');
    const card = document.createElement('div');
    const cardFont = document.createElement('div');
    const cardBack = document.createElement('div');
    const img = document.createElement('img');
    const imgBack = document.createElement('img');
    const rotateIcon = document.createElement('div');

    img.setAttribute('data', 'card');
    card.setAttribute('data', 'card');
    card.setAttribute('audioSrc', `src/${audioSrc}`);
    rotateIcon.setAttribute('data', 'rotate');


    rotateIcon.className = ('rotate-icon');
    card.className = ('category__card');
    img.className = 'card__img';
    imgBack.className = 'card__img';
    cardFont.className = ('font');
    cardBack.className = ('back novisual');

    img.setAttribute('alt', cardText);
    imgBack.setAttribute('alt', translation);
    img.setAttribute('src', `src/${imgLink}`);
    imgBack.setAttribute('src', `src/${imgLink}`);

    cardFont.appendChild(img);
    img.after(cardText);

    cardBack.appendChild(imgBack);
    imgBack.after(translation);

    card.appendChild(cardFont);
    cardFont.after(cardBack);
    cardBack.after(rotateIcon);

    category.appendChild(card);
  }
}