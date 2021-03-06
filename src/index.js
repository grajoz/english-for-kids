/*import Card from './card.js';
import cards from './cards.js';
import CardGame from './cardgame.js';
import GenerateArrRandom from './generatearrrandom.js';*/
const cards = [ 
  ['Main Page', 'Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions','Animal (set x)','Animal (set y)',/*'Statistics'*/],
  [
    {
      word: 'cry',
      translation: 'плакать',
      image: 'img/cry.jpg',
      audioSrc: 'audio/cry.mp3'
    },
    {
      word: 'dance',
      translation: 'танцевать',
      image: 'img/dance.jpg',
      audioSrc: 'audio/dance.mp3'
    },
    {
      word: 'dive',
      translation: 'нырять',
      image: 'img/dive.jpg',
      audioSrc: 'audio/dive.mp3'
    },
    {
      word: 'draw',
      translation: 'рисовать',
      image: 'img/draw.jpg',
      audioSrc: 'audio/draw.mp3'
    },
    {
      word: 'fish',
      translation: 'ловить рыбу',
      image: 'img/fish.jpg',
      audioSrc: 'audio/fish.mp3'
    },
    {
      word: 'fly',
      translation: 'летать',
      image: 'img/fly.jpg',
      audioSrc: 'audio/fly.mp3'
    },
    {
      word: 'hug',
      translation: 'обнимать',
      image: 'img/hug.jpg',
      audioSrc: 'audio/hug.mp3'
    },
    {
      word: 'jump',
      translation: 'прыгать',
      image: 'img/jump.jpg',
      audioSrc: 'audio/jump.mp3'
    }
  ],
  [
    {
      word: 'open',
      translation: 'открывать',
      image: 'img/open.jpg',
      audioSrc: 'audio/open.mp3'
    },
    {
      word: 'play',
      translation: 'играть',
      image: 'img/play.jpg',
      audioSrc: 'audio/play.mp3'
    },
    {
      word: 'point',
      translation: 'указывать',
      image: 'img/point.jpg',
      audioSrc: 'audio/point.mp3'
    },
    {
      word: 'ride',
      translation: 'ездить',
      image: 'img/ride.jpg',
      audioSrc: 'audio/ride.mp3'
    },
    {
      word: 'run',
      translation: 'бегать',
      image: 'img/run.jpg',
      audioSrc: 'audio/run.mp3'
    },
    {
      word: 'sing',
      translation: 'петь',
      image: 'img/sing.jpg',
      audioSrc: 'audio/sing.mp3'
    },
    {
      word: 'skip',
      translation: 'пропускать, прыгать',
      image: 'img/skip.jpg',
      audioSrc: 'audio/skip.mp3'
    },
    {
      word: 'swim',
      translation: 'плавать',
      image: 'img/swim.jpg',
      audioSrc: 'audio/swim.mp3'
    }
  ],
  [
    {
      word: 'cat',
      translation: 'кот',
      image: 'img/cat.jpg',
      audioSrc: 'audio/cat.mp3'
    },
    {
      word: 'chick',
      translation: 'цыплёнок',
      image: 'img/chick.jpg',
      audioSrc: 'audio/chick.mp3'
    },
    {
      word: 'chicken',
      translation: 'курица',
      image: 'img/chicken.jpg',
      audioSrc: 'audio/chicken.mp3'
    },
    {
      word: 'dog',
      translation: 'собака',
      image: 'img/dog.jpg',
      audioSrc: 'audio/dog.mp3'
    },
    {
      word: 'horse',
      translation: 'лошадь',
      image: 'img/horse.jpg',
      audioSrc: 'audio/horse.mp3'
    },
    {
      word: 'pig',
      translation: 'свинья',
      image: 'img/pig.jpg',
      audioSrc: 'audio/pig.mp3'
    },
    {
      word: 'rabbit',
      translation: 'кролик',
      image: 'img/rabbit.jpg',
      audioSrc: 'audio/rabbit.mp3'
    },
    {
      word: 'sheep',
      translation: 'овца',
      image: 'img/sheep.jpg',
      audioSrc: 'audio/sheep.mp3'
    }
  ],
  [
    {
      word: 'bird',
      translation: 'птица',
      image: 'img/bird.jpg',
      audioSrc: 'audio/bird.mp3'
    },
    {
      word: 'fish',
      translation: 'рыба',
      image: 'img/fish1.jpg',
      audioSrc: 'audio/fish.mp3'
    },
    {
      word: 'frog',
      translation: 'жаба',
      image: 'img/frog.jpg',
      audioSrc: 'audio/frog.mp3'
    },
    {
      word: 'giraffe',
      translation: 'жирафа',
      image: 'img/giraffe.jpg',
      audioSrc: 'audio/giraffe.mp3'
    },
    {
      word: 'lion',
      translation: 'лев',
      image: 'img/lion.jpg',
      audioSrc: 'audio/lion.mp3'
    },
    {
      word: 'mouse',
      translation: 'мышь',
      image: 'img/mouse.jpg',
      audioSrc: 'audio/mouse.mp3'
    },
    {
      word: 'turtle',
      translation: 'черепаха',
      image: 'img/turtle.jpg',
      audioSrc: 'audio/turtle.mp3'
    },
    {
      word: 'dolphin',
      translation: 'дельфин',
      image: 'img/dolphin.jpg',
      audioSrc: 'audio/dolphin.mp3'
    }
  ],
  [
    {
      word: 'skirt',
      translation: 'юбка',
      image: 'img/skirt.jpg',
      audioSrc: 'audio/skirt.mp3'
    },
    {
      word: 'pants',
      translation: 'брюки',
      image: 'img/pants.jpg',
      audioSrc: 'audio/pants.mp3'
    },
    {
      word: 'blouse',
      translation: 'блузка',
      image: 'img/blouse.jpg',
      audioSrc: 'audio/blouse.mp3'
    },
    {
      word: 'dress',
      translation: 'платье',
      image: 'img/dress.jpg',
      audioSrc: 'audio/dress.mp3'
    },
    {
      word: 'boot',
      translation: 'ботинок',
      image: 'img/boot.jpg',
      audioSrc: 'audio/boot.mp3'
    },
    {
      word: 'shirt',
      translation: 'рубашка',
      image: 'img/shirt.jpg',
      audioSrc: 'audio/shirt.mp3'
    },
    {
      word: 'coat',
      translation: 'пальто',
      image: 'img/coat.jpg',
      audioSrc: 'audio/coat.mp3'
    },
    {
      word: 'shoe',
      translation: 'туфли',
      image: 'img/shoe.jpg',
      audioSrc: 'audio/shoe.mp3'
    }
  ],
  [
    {
      word: 'sad',
      translation: 'грустный',
      image: 'img/sad.jpg',
      audioSrc: 'audio/sad.mp3'
    },
    {
      word: 'angry',
      translation: 'сердитый',
      image: 'img/angry.jpg',
      audioSrc: 'audio/angry.mp3'
    },
    {
      word: 'happy',
      translation: 'счастливый',
      image: 'img/happy.jpg',
      audioSrc: 'audio/happy.mp3'
    },
    {
      word: 'tired',
      translation: 'уставший',
      image: 'img/tired.jpg',
      audioSrc: 'audio/tired.mp3'
    },
    {
      word: 'surprised',
      translation: 'удивлённый',
      image: 'img/surprised.jpg',
      audioSrc: 'audio/surprised.mp3'
    },
    {
      word: 'scared',
      translation: 'испуганный',
      image: 'img/scared.jpg',
      audioSrc: 'audio/scared.mp3'
    },
    {
      word: 'smile',
      translation: 'улыбка',
      image: 'img/smile.jpg',
      audioSrc: 'audio/smile.mp3'
    },
    {
      word: 'laugh',
      translation: 'смех',
      image: 'img/laugh.jpg',
      audioSrc: 'audio/laugh.mp3'
    }
  ],

/////////////!!!!!!!!!!!!!!!!!!!!!!!!
[
  {
    word: 'cry',
    translation: 'плакать',
    image: 'img/cry.jpg',
    audioSrc: 'audio/cry.mp3'
  },
  {
    word: 'dance',
    translation: 'танцевать',
    image: 'img/dance.jpg',
    audioSrc: 'audio/dance.mp3'
  },
  {
    word: 'dive',
    translation: 'нырять',
    image: 'img/dive.jpg',
    audioSrc: 'audio/dive.mp3'
  },
  {
    word: 'draw',
    translation: 'рисовать',
    image: 'img/draw.jpg',
    audioSrc: 'audio/draw.mp3'
  },
  {
    word: 'fish',
    translation: 'ловить рыбу',
    image: 'img/fish.jpg',
    audioSrc: 'audio/fish.mp3'
  },
  {
    word: 'fly',
    translation: 'летать',
    image: 'img/fly.jpg',
    audioSrc: 'audio/fly.mp3'
  },
  {
    word: 'hug',
    translation: 'обнимать',
    image: 'img/hug.jpg',
    audioSrc: 'audio/hug.mp3'
  },
  {
    word: 'jump',
    translation: 'прыгать',
    image: 'img/jump.jpg',
    audioSrc: 'audio/jump.mp3'
  }
],





  [
    {
      word: 'cry',
      translation: 'плакать',
      image: 'img/cry.jpg',
      audioSrc: 'audio/cry.mp3'
    },
    {
      word: 'dance',
      translation: 'танцевать',
      image: 'img/dance.jpg',
      audioSrc: 'audio/dance.mp3'
    },
    {
      word: 'dive',
      translation: 'нырять',
      image: 'img/dive.jpg',
      audioSrc: 'audio/dive.mp3'
    },
    {
      word: 'draw',
      translation: 'рисовать',
      image: 'img/draw.jpg',
      audioSrc: 'audio/draw.mp3'
    },
    {
      word: 'fish',
      translation: 'ловить рыбу',
      image: 'img/fish.jpg',
      audioSrc: 'audio/fish.mp3'
    },
    {
      word: 'fly',
      translation: 'летать',
      image: 'img/fly.jpg',
      audioSrc: 'audio/fly.mp3'
    },
    {
      word: 'hug',
      translation: 'обнимать',
      image: 'img/hug.jpg',
      audioSrc: 'audio/hug.mp3'
    },
    {
      word: 'jump',
      translation: 'прыгать',
      image: 'img/jump.jpg',
      audioSrc: 'audio/jump.mp3'
    }
  ]
]

class GenerateArrRandom {
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }

  generateArrayRandom(min, max) {
    let totalNumbers = max - min + 1;
    const arrayTotalNumbers = [];
    const arrayRandomNumbers = [];
    let tempRandomNumber;
    while (totalNumbers--) {
      arrayTotalNumbers.push(totalNumbers + min);
    }
    while (arrayTotalNumbers.length) {
      tempRandomNumber = Math.round(Math.random() * (arrayTotalNumbers.length - 1));
      arrayRandomNumbers.push(arrayTotalNumbers[tempRandomNumber]);
      arrayTotalNumbers.splice(tempRandomNumber, 1);
    }
    return arrayRandomNumbers;
  }
}

class CardGame {
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


class Card {
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










const CATELORY_TITLES = cards[0];
const NAV_BUTTON = document.getElementById('button_hamburger');
const NAV = document.getElementById('nav');
const CATEGORY = document.getElementById('category');
const HEADER = document.getElementById('header');

let activeCategory = 'Main Page';
let activeCategoryNumber = 0;
let isNavOpen = false;
let isTrainStation = true;
let isRunGameStation = false;
let audioSrcSpeakWord = 0;
let textContentAudioSrcSpeakWord = '';
let numberCardSpeaksWord = 0;
let arrayRandomNumber = [];
let cardObjArray;
let countClickcard = 0;


HEADER.addEventListener('click', (event) => {
  let idClickElement;
  idClickElement = event.target.getAttribute('id');

  switch (idClickElement) {
    case 'button_hamburger':

      startTrainStation();
      startVariables();
      generateMainPage();
      switchNavMenuOpen();
      deleteStars();
      NAV.classList.toggle('nav-active');
      break;
    case 'button_start_repeat': switchStartRepeat();
      break;
    case 'button_train': startTrainStation();
      deleteStars();
      break;
    case 'button_play': startGameStation();

      break;
  }
});

function switchStartRepeat() {
  switch (isRunGameStation) {
    case true: repeatWord();
      break;
    case false: isRunGameStation = true;
      runGame();
      break;
  }
}


function repeatWord() {
  let audioElem = 0;
  audioElem = new Audio(`src/${audioSrcSpeakWord}`);
  setTimeout(() => { audioElem.play(); }, 1000);
}


function runGame() {
  if (activeCategoryNumber === 0) { return; }
  const buttonStartRepeat = document.getElementById('button_start_repeat');
  buttonStartRepeat.textContent = 'REPEAT';

  numberCardSpeaksWord = 0;
  cardObjArray = cards[activeCategoryNumber];

  const GenerateArrayRandomNumber = new GenerateArrRandom(0, (cardObjArray.length - 1));
  arrayRandomNumber = GenerateArrayRandomNumber.generateArrayRandom(0, (cardObjArray.length - 1));
  processGame();
}

function processGame() {
  let cardSpeaksWord;
  cardSpeaksWord = cardObjArray[arrayRandomNumber[numberCardSpeaksWord]];
  audioSrcSpeakWord = cardSpeaksWord.audioSrc;
  textContentAudioSrcSpeakWord = cardSpeaksWord.word;
  repeatWord();
}

CATEGORY.addEventListener('click', (event) => {
  switch (isTrainStation) {
    case true: selectInTrainStation();
      break;
    case false: selectInGameStation();
      break;
  }
});


function selectAnswerCard() {
  let dataClickElement;
  dataClickElement = event.target.getAttribute('dataCardText');
  const tegClickElement = event.target.closest('div');

  if (dataClickElement === textContentAudioSrcSpeakWord) {
    countClickcard += 1;
    numberCardSpeaksWord += 1;
    if (numberCardSpeaksWord < 8) {
      tegClickElement.classList.add('undershadov');
      processGame();
      addStarWin();
      playCorrect();
      addCardInShadov();
    } else {
      gameOver();
      startTrainStation();
    }
  } else {
    addStar(); playError();
    countClickcard += 1;
  }
}

function addCardInShadov() {

}

function playCorrect() {
  let audioElem = 0;
  audioElem = new Audio('src/audio/correct.mp3');
  audioElem.play();
}

function playError() {
  let audioElem = 0;
  audioElem = new Audio('src/audio/error.mp3');
  audioElem.play();
}

function playSuccess() {
  let audioElem = 0;
  audioElem = new Audio('src/audio/success.mp3');
  audioElem.play();
}

function playFailure() {
  let audioElem = 0;
  audioElem = new Audio('src/audio/failure.mp3');
  audioElem.play();
}

function addStarWin() {
  const starWin = document.createElement('img');
  starWin.setAttribute('alt', 'starWin');
  starWin.setAttribute('src', 'src/img/star-win.svg');
  const starsDiv = document.getElementById('stars');
  starsDiv.appendChild(starWin);
}

function addStar() {
  const starWin = document.createElement('img');
  starWin.setAttribute('alt', 'starWin');
  starWin.setAttribute('src', 'src/img/star.svg');
  const starsDiv = document.getElementById('stars');
  starsDiv.appendChild(starWin);
}

function deleteStars() {
  const starsDiv = document.getElementById('stars');
  starsDiv.innerHTML = '';
}

function runSuccessSmile() {
  SMILE_SUCCESS.classList.remove('no');
}

function runFailureSmile() {
  SMILE_FAILURE.classList.remove('no');
  const failureText = document.getElementById('failureText');
  failureText.textContent = `${countClickcard - numberCardSpeaksWord - 1} errors!!!`;
}

const SMILE_SUCCESS = document.getElementById('success');
const SMILE_FAILURE = document.getElementById('failure');

SMILE_SUCCESS.addEventListener('click', (event) => {
  SMILE_SUCCESS.classList.add('no');
});

SMILE_FAILURE.addEventListener('click', (event) => {
  SMILE_FAILURE.classList.add('no');
});

function gameOver() {
  if (countClickcard > numberCardSpeaksWord) {
    runFailureSmile(); deleteStars(); playFailure();
  } else { runSuccessSmile(); deleteStars(); playSuccess(); }

  startVariables();
  generateMainPage();
}
function startVariables() {
  activeCategory = 'Main Page';
  activeCategoryNumber = 0;
  isNavOpen = false;
  isTrainStation = true;
  isRunGameStation = false;
  audioSrcSpeakWord = 0;
  textContentAudioSrcSpeakWord = '';
  numberCardSpeaksWord = 0;
  arrayRandomNumber = [];
  cardObjArray = {};
  countClickcard = 0;
}


function selectInGameStation() {
  let dataClickElement;
  let tegClickElement;
  dataClickElement = event.target.getAttribute('data');
  tegClickElement = event.target.closest('div');

  switch (dataClickElement) {
    case 'mainpage': activeCategory = tegClickElement.textContent;
      getActiveCategoryNumber();
      selectGenerateCategory();
      setNavLiActive();
      break;
    case 'card': selectAnswerCard();
      break;
  }
}


function startGameStation() {
  isTrainStation = false;
  if (activeCategoryNumber === 0) { generateMainPage(); } else {
    generateCardsForGame();
  }
  startGameStationStyle();
}

function startTrainStation() {
  isTrainStation = true;
  if (isRunGameStation === true) { isRunGameStation = false; }

  if (activeCategoryNumber === 0) { generateMainPage(); } else {
    generateCards();
  }
  startTrainStationStyle();

  const buttonStartRepeat = document.getElementById('button_start_repeat');
  buttonStartRepeat.textContent = 'START GAME';
}


function selectInTrainStation() {
  let dataClickElement;
  let tegClickElement;
  dataClickElement = event.target.getAttribute('data');
  tegClickElement = event.target.closest('div');
  switch (dataClickElement) {
    case 'mainpage': activeCategory = tegClickElement.textContent;
      getActiveCategoryNumber();
      selectGenerateCategory();
      setNavLiActive();
      break;
    case 'card': speakWord();
      break;
    case 'rotate': rotateCard();
      break;
    case 'statistics': generateStatistics();
      break;
  }
}

function speakWord() {
  let audioSrcFromClickElement;
  audioSrcFromClickElement = event.target.closest('div');
  audioSrcFromClickElement = audioSrcFromClickElement.parentElement;
  audioSrcFromClickElement = audioSrcFromClickElement.getAttribute('audioSrc');
  const audioElem = new Audio(audioSrcFromClickElement);
  audioElem.play();
}

function switchNavMenuOpen() {
  switch (isNavOpen) {
    case false: isNavOpen = true;
      document.getElementById('button_hamburger').textContent = '|||';
      break;
    case true: isNavOpen = false;
      document.getElementById('button_hamburger').textContent = '|||';
      break;
  }
}


function navBuild() {
  for (let i = 0; i < CATELORY_TITLES.length; i++) {
    const liTitle = document.createElement('li');
    liTitle.className = ('nav__li');
    liTitle.textContent = CATELORY_TITLES[i];
    nav.appendChild(liTitle);
  }
}

navBuild();

function setNavLiActive() {
  NAV.querySelectorAll('li').forEach((el) => el.classList.remove('nav__li-active'));
  NAV.querySelectorAll('li').forEach((el) => (el.textContent === activeCategory
    ? el.classList.add('nav__li-active') : function () {}));
}

setNavLiActive();

NAV.addEventListener('click', (event) => {
  document.getElementById('button_hamburger').textContent = '|||';
  NAV.classList.remove('nav-active');
  activeCategory = event.target.textContent;
  getActiveCategoryNumber();
  selectGenerateCategory();
  setNavLiActive();
});


selectGenerateCategory();

function selectGenerateCategory() {
  switch (activeCategoryNumber) {
    case 0:
      if ((activeCategoryNumber === 0) && (isTrainStation === false)) {
        document.getElementById('button_start_repeat').classList.add('novisual');
      }
      generateMainPage();
      break;
    case CATELORY_TITLES.length: generateStatistics();
      break;
    default:
      if (isTrainStation) { generateCards(); } else { generateCardsForGame(); }
  }
}

function generateStatistics() {
  document.getElementById('category').innerHTML = '';
}

function getActiveCategoryNumber() {
  for (let i = 0; i < CATELORY_TITLES.length; i++) {
    if (CATELORY_TITLES[i] === activeCategory) {
      activeCategoryNumber = i;
    }
  }
}


function generateMainPage() {
  document.getElementById('category').innerHTML = '';

  for (let i = 1; i < CATELORY_TITLES.length; i++) {
    const category = document.getElementById('category');
    const card = document.createElement('div');
    const img = document.createElement('img');
    const random = Math.round(Math.random() * 5);
    const imgLink = cards[i][random].image;
    const cardText = CATELORY_TITLES[i];

    img.className = 'card__img card__img_mainpage';
    img.setAttribute('alt', CATELORY_TITLES[i]);
    img.setAttribute('src', `src/${imgLink}`);

    card.appendChild(img);
    card.className = ('category__card category__card_mainpage');
    img.after(cardText);
    card.setAttribute('data', 'mainpage');
    img.setAttribute('data', 'mainpage');

    category.appendChild(card);
  }
  const category = document.getElementById('category');
  const card = document.createElement('div');
  card.className = ('category__card category__card_statistics');
  card.textContent = 'Statistics';
  card.setAttribute('data', 'statistics');
  category.appendChild(card);
}

generateMainPage();

function generateCards() {
  const cardObjArray = cards[activeCategoryNumber];
  document.getElementById('category').innerHTML = '';
  for (let i = 0; i < cardObjArray.length; i++) {
    const CardForGenerate = new Card(cardObjArray[i]);
    CardForGenerate.cardBuild();
  }
}

function generateCardsForGame() {
  if (activeCategoryNumber !== 0) {
    document.getElementById('button_start_repeat').classList.remove('novisual');
  }

  const cardObjArray = cards[activeCategoryNumber];
  document.getElementById('category').innerHTML = '';
  const progressField = document.createElement('div');
  progressField.className = 'progressField';
  progressField.setAttribute('id', 'progressField');

  for (let i = 0; i < cardObjArray.length; i++) {
    const CardForGenerate = new CardGame(cardObjArray[i]);
    CardForGenerate.cardBuild();
  }
}

function startTrainStationStyle() {
  document.getElementById('button_start_repeat').classList.add('novisual');

  document.getElementById('button_play').classList.remove('start');
  document.getElementById('button_play').classList.add('stop');
  document.getElementById('button_train').classList.remove('stop');
  document.getElementById('button_train').classList.add('start');

  document.getElementById('button_train').setAttribute('disabled', 'disabled');
  document.getElementById('button_play').removeAttribute('disabled');

  document.getElementById('header').classList.add('train_them');
  document.getElementById('header').classList.remove('game_them');

  document.getElementById('category').classList.add('train_them');
  document.getElementById('category').classList.remove('game_them');
}

function startGameStationStyle() {
  document.getElementById('button_train').classList.remove('start');
  document.getElementById('button_train').classList.add('stop');
  document.getElementById('button_play').classList.remove('stop');
  document.getElementById('button_play').classList.add('start');

  document.getElementById('button_play').setAttribute('disabled', 'disabled');
  document.getElementById('button_train').removeAttribute('disabled');

  document.getElementById('header').classList.remove('train_them');
  document.getElementById('header').classList.add('game_them');

  document.getElementById('category').classList.remove('train_them');
  document.getElementById('category').classList.add('game_them');
}

function rotateCard() {
  let targetRotateCard;
  let targetRotateCardFont;
  let targetRotateCardBack;
  let rotateIcon;

  rotateIcon = event.target;
  targetRotateCard = event.target.closest('.category__card');
  targetRotateCardFont = targetRotateCard.firstElementChild;
  targetRotateCardBack = targetRotateCardFont.nextElementSibling;

  targetRotateCardFont.classList.add('novisual');
  targetRotateCardBack.classList.remove('novisual');
  rotateIcon.classList.add('novisual');

  targetRotateCard.classList.add('translate');

  let currentElem = null;

  targetRotateCard.onmouseover = function (event) {
    if (currentElem) return;
    const target = event.target.closest('DIV');
    if (!target) return;
    if (!targetRotateCard.contains(target)) return;
    currentElem = target;
  };

  targetRotateCard.onmouseout = function (event) {
    if (!currentElem) return;
    let { relatedTarget } = event;
    while (relatedTarget) {
      if (relatedTarget == currentElem) return;
      relatedTarget = relatedTarget.parentNode;
    }
    targetRotateCardFont.classList.remove('novisual');
    targetRotateCardBack.classList.add('novisual');
    rotateIcon.classList.remove('novisual');
    targetRotateCard.classList.remove('translate');

    currentElem = null;
  };
}
