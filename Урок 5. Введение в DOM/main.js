function chessBoard(){
  var body = document.getElementsByTagName('body');
var divChess = document.createElement('div');
divChess.className = "chess";
body[0].appendChild(divChess);

var chess = document.getElementsByClassName('chess');
var chessBlock = document.getElementsByClassName('chessBlock');

numArr = ['1', '2', '3', '4', '5', '6', '7', '8', ];
symArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ];
imgArr = ['img/bB.png', 'img/bK.png', 'img/bN.png', 'img/bP.png', 'img/bQ.png', 'img/bR.png', 'img/wB.png', 'img/wK.png', 'img/wN.png', 'img/wP.png', 'img/wQ.png', 'img/wR.png', ];

for (var i = 0; i < 64; i++) {
  var div = document.createElement('div');
  div.className = "chessBlock";
  chess[0].appendChild(div);
};

for (var i = 0, j = 0; i < 64; i = i + 8, j++) {
  var symbol = document.createElement('span');
  chessBlock[i].appendChild(symbol);
  symbol.innerHTML = numArr[j];
};

for (var i = 56, j = 0; i < 64; i++, j++) {
  var symbol = document.createElement('p');
  chessBlock[i].appendChild(symbol);
  symbol.innerHTML = symArr[j];
};

var img = document.createElement('img');
chessBlock[0].appendChild(img);
img.setAttribute('src',imgArr[5]);
var img = document.createElement('img');
chessBlock[7].appendChild(img);
img.setAttribute('src',imgArr[5]);
var img = document.createElement('img');
chessBlock[1].appendChild(img);
img.setAttribute('src',imgArr[2]);
var img = document.createElement('img');
chessBlock[6].appendChild(img);
img.setAttribute('src',imgArr[2]);
var img = document.createElement('img');
chessBlock[2].appendChild(img);
img.setAttribute('src',imgArr[0]);
var img = document.createElement('img');
chessBlock[5].appendChild(img);
img.setAttribute('src',imgArr[0]);
var img = document.createElement('img');
chessBlock[3].appendChild(img);
img.setAttribute('src',imgArr[1]);
var img = document.createElement('img');
chessBlock[4].appendChild(img);
img.setAttribute('src',imgArr[4]);
var img = document.createElement('img');
chessBlock[8].appendChild(img);
img.setAttribute('src',imgArr[3]);
var img = document.createElement('img');
chessBlock[9].appendChild(img);
img.setAttribute('src',imgArr[3]);
var img = document.createElement('img');
chessBlock[10].appendChild(img);
img.setAttribute('src',imgArr[3]);
var img = document.createElement('img');
chessBlock[11].appendChild(img);
img.setAttribute('src',imgArr[3]);
var img = document.createElement('img');
chessBlock[12].appendChild(img);
img.setAttribute('src',imgArr[3]);
var img = document.createElement('img');
chessBlock[13].appendChild(img);
img.setAttribute('src',imgArr[3]);
var img = document.createElement('img');
chessBlock[14].appendChild(img);
img.setAttribute('src',imgArr[3]);
var img = document.createElement('img');
chessBlock[15].appendChild(img);
img.setAttribute('src',imgArr[3]);
var img = document.createElement('img');
chessBlock[48].appendChild(img);
img.setAttribute('src',imgArr[9]);
var img = document.createElement('img');
chessBlock[49].appendChild(img);
img.setAttribute('src',imgArr[9]);
var img = document.createElement('img');
chessBlock[50].appendChild(img);
img.setAttribute('src',imgArr[9]);
var img = document.createElement('img');
chessBlock[51].appendChild(img);
img.setAttribute('src',imgArr[9]);
var img = document.createElement('img');
chessBlock[52].appendChild(img);
img.setAttribute('src',imgArr[9]);
var img = document.createElement('img');
chessBlock[53].appendChild(img);
img.setAttribute('src',imgArr[9]);
var img = document.createElement('img');
chessBlock[54].appendChild(img);
img.setAttribute('src',imgArr[9]);
var img = document.createElement('img');
chessBlock[55].appendChild(img);
img.setAttribute('src',imgArr[9]);
var img = document.createElement('img');
chessBlock[56].appendChild(img);
img.setAttribute('src',imgArr[11]);
var img = document.createElement('img');
chessBlock[63].appendChild(img);
img.setAttribute('src',imgArr[11]);
var img = document.createElement('img');
chessBlock[57].appendChild(img);
img.setAttribute('src',imgArr[8]);
var img = document.createElement('img');
chessBlock[62].appendChild(img);
img.setAttribute('src',imgArr[8]);
var img = document.createElement('img');
chessBlock[58].appendChild(img);
img.setAttribute('src',imgArr[6]);
var img = document.createElement('img');
chessBlock[61].appendChild(img);
img.setAttribute('src',imgArr[6]);
var img = document.createElement('img');
chessBlock[59].appendChild(img);
img.setAttribute('src',imgArr[7]);
var img = document.createElement('img');
chessBlock[60].appendChild(img);
img.setAttribute('src',imgArr[10]);

};

chessBoard();


