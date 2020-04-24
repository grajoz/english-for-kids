export default class CardGame {
    constructor(cardObj) {
      this.cardObj = cardObj;
    }
  
    cardBuild() {
      const cardText = this.cardObj.word;
      const imgLink = this.cardObj.image;
      const { audioSrc } = this.cardObj;
  
      const category = document.getElementById('category');
      const card = document.createElement('div');
      const img = document.createElement('img');
  
      img.setAttribute('dataCardText', cardText);
      card.setAttribute('dataCardText', cardText);
      img.setAttribute('data', 'card');
      card.setAttribute('data', 'card');

      card.setAttribute('audioSrc', `src/${audioSrc}`);
      card.className = ('category__card');

      img.className = 'card__img';
      img.setAttribute('alt', cardText);
      img.setAttribute('src', `src/${imgLink}`);

      card.appendChild(img);

      category.appendChild(card);
    }
}
