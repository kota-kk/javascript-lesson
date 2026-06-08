// Q1 変数
let nickname = 'ごっしー';
let age = 28;

console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');

// Q2
let languages = [
  'JavaScript',
  'PHP',
  'Ruby',
  'Python',
  'Go'
];

console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);

// Q3
// 変数 user を使用し 26 をコンソールに出力してください。
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

// Q4
// The Legend of Zelda をコンソールに出力してください。
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

// Q5
// John, Bob, Michael の年齢の平均値を計算した結果をコンソールに出力してください。
console.log(( playerList[0].age + playerList[1].age + playerList[2].age ) / 3);

// Q6
// Hello とコンソールに出力する関数 sayHello を定義し、実行してください。
// 変数 sayWorld に World とコンソールに出力する無名関数を代入し、実行してください。
function sayHello(world) {
  console.log('Hello');
  world();
}

sayHello(function() {
  console.log('World');
});

// Q7
// Q3 で定義した変数 user に '2000-09-27'を値とする birthday プロパティを追加してください。
// Q3 で定義した変数 user に Hello！とコンソールに出力するメソッド sayHello を追加し、実行してください。
user.birthday = '2000-09-27';

user.sayHello = function() {
  console.log('Hello!');
};

user.sayHello();

// Q8
let calc = {
  add: function (x, y) {
    console.log(x + y)
  },
  subtract: function (x, y) {
    console.log(x - y);
  },
  multiply: function (x, y) {
    console.log(x * y);
  },
  divide: function (x, y) {
    console.log(x / y);
  }
};
// 2 つの引数 x, y の和をコンソールに出力する add メソッドを定義し、7 になるように実行して下さい。
calc.add(3, 4);

// 2 つの引数 x, y の差をコンソールに出力する subtract メソッドを定義し、10 になるように実行して下さい。
calc.subtract(14, 4);

// 2 つの引数 x, y の積をコンソールに出力する multiply メソッドを定義し、49 になるように実行して下さい
calc.multiply(7, 7);

// 2 つの引数 x, y の商をコンソールに出力する divide メソッドを定義し、5 になるように実行して下さい。
calc.divide(25, 5);


// Q9
// 2 つの引数 x, y を受け取り
// x を y で割った剰余を返り値とする関数 remainder を定義し
// 5 と 3 を引数に渡して実行した返り値を用いて文字列連結でコンソールに出力
function remainder(x, y) {
  return x % y;
}

console.log('5 を 3 で割った余りは' + remainder(5, 3) + 'です。')

// Q10
// 下記の console.log(x); においてコンソールに 1 が出力されることはなく、エラーが出力されます。
// その理由を以下 2 つの単語を使用し app.js にコメントアウトで回答してください。

// スコープ
// 参照
// function foo() {
//   let x = 1;
// }
// console.log(x);

let Q10 = 'xは関数内で定義されている変数であるため、関数外ではスコープ外となってしまい参照ができない。';

// Q1 - 2
// 標準組み込みオブジェクト Math を使用し、0 ~ 9 のランダムな整数をコンソールに出力してください。
console.log(Math.floor(Math.random() * 10));

// Q2 - 2
// 関数 setTimeout を使用し、3 秒後にコンソールに出力してください。
function helloWorld() {
  setTimeout(() => {
    console.log('Hello World!')
  }, 3000);
}

helloWorld();

// Q3 - 2
// num が 0 より大きければnum is greater than 0
// num が 0 より小さければnum is less than 0
// num が 0 であればnum is 0
let num = 0;

if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else {
  console.log('num is 0');
}

// Q4 - 2
// 変数 numbers に空の配列を代入した後、0 ~ 99 までの数字を変数 numbers に全て追加し
// 値が追加された状態の変数 numbers をコンソールに出力してください
let numbers = [];
for (let i = 0; i < 100; i++) {
  numbers[i] = i;
}
console.log(numbers);

// Q5 - 2
// Number であり偶数の時は even
// Number であり奇数の時は odd
// Number 以外の時は not number
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
  if (typeof(mixed[i]) !== 'number') {
    console.log('not number');
  } else if (mixed[i] !== 0) {
    console.log(mixed[i] % 2 === 0 ? 'even' : 'odd');
  }
}
