const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Маша',
  'Катя',
  'Даша',
  'Коля',
  'Петя',
  'Слава'
];

const DESCRIPTIONS = [
  'Крутая картинка!',
  'Моя фотография!!!',
  'Ставьте лайк',
  'Всем привет!!!',
  'Как дела?'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createRandomIntGenerator () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

function createRandomIntFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

function getRandomMessage(messages){
  const count = getRandomInteger(1, 2);
  let mes = '';
  for (let i = 0; i < count; i++){
    mes += ` ${  messages[getRandomInteger(0, messages.length - 1)]}`;
  }
  return mes;
}

const generateCommentId = createRandomIntGenerator();
const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomMessage(MESSAGES),
  name: NAMES[getRandomInteger(0, NAMES.length - 1)]
});

const generatePhotoId = createRandomIntFromRangeGenerator(1, 25);
const generatePhotoAddress = createRandomIntFromRangeGenerator(1, 25);
const createPhoto = () => ({
  id: generatePhotoId(),
  url: `photos/${generatePhotoAddress()}.jpg`,
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(0, 30)}, createComment)
});

const obj = Array.from({length: 25}, createPhoto);
