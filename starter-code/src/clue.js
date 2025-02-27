// Characters

const mrGreen = {
  first_name: "Jacob",
  last_name: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image:
    "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"
};

const drOrchid = {
  first_name: "Doctor",
  last_name: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  ocupation: "Scientist"
};

const profPlum = {
  first_name: "Victor",
  last_name: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"
};

const missScarlet = {
  first_name: "Kasandra",
  last_name: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor"
};

const mrsPeacock = {
  first_name: "Eleanor",
  last_name: "Peacock",
  color: "blue",
  description:
    "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"
};

const mrMustard = {
  first_name: "Jack",
  last_name: "Mustard",
  color: "yellow",
  description:
    "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player"
};

// Weapons

let rope = {
  weight: 10
};
let knife = {
  weight: 8
};

let candlestick = { weight: 2 };
let dumbbell = { weight: 30 };
let poison = { weight: 2 };
let axe = { weight: 15 };
let bat = { weight: 13 };
let trophy = { weight: 25 };
let pistol = { weight: 20 };

// Rooms
let dinningRoom;
let conservatory;
let kitchen;
let study;
let library;
let billiardRoom;
let lounge;
let ballroom;
let hall;
let spa;
let livingRoom;
let observatory;
let theater;
let guestHouse;
let patio;

// Characters Collection
var charactersArray = [
  mrGreen,
  drOrchid,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard
];

// Rooms' Collection
var roomsArray = [
  dinningRoom,
  conservatory,
  kitchen,
  study,
  library,
  billiardRoom,
  lounge,
  ballroom,
  hall,
  spa,
  livingRoom,
  observatory,
  theater,
  guestHouse,
  patio
];

// Weapons Collection
var weaponsArray = [
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
];

function randomSelector(array) {
  if (array.length == 0) {
    return undefined;
  } else {
    let min = 0;
    let max = array.length;

    let randomCard = Math.floor(Math.random() * (max - min) + min);

    return array[randomCard];
  }
}

randomSelector(charactersArray);
randomSelector(roomsArray);
randomSelector(weaponsArray);

function pickMistery() {
  let misteryEnvelope;
  misteryEnvelope = [
    randomSelector(charactersArray),
    randomSelector(weaponsArray),
    randomSelector(roomsArray)
  ];

  return misteryEnvelope;
}

function revealMistery(array) {
  return (
    array[0].first_name +
    " " +
    array[0].last_name +
    " killed Mr.Boddy using the " +
    array[1].name +
    " in the " +
    array[2].name +
    "!!!!"
  );
}

revealMistery(misteryEnvelope);
