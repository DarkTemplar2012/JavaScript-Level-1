function onWindowLoad() {
  var images = document.getElementsByClassName('image');


  for (var i = 0; i < images.length; i++) {
    images[i].onclick = onImageClick;
  }
};

function onImageClick(e) {
  var div = document.getElementById('big_picture');
  div.innerHTML = '';

  var id = e.target.getAttribute('src');

  var img = document.createElement('img');
  img.src = id;
  img.id = 'currentImg';
  div.appendChild(img);

  var arrowL = document.createElement('img');
  arrowL.id = "left";
  arrowL.setAttribute('src', 'img/back.png');
  var arrowR = document.createElement('img');
  arrowR.id = "right";
  arrowR.setAttribute('src', 'img/next.png');
  div.appendChild(arrowL);
  div.appendChild(arrowR);
};


function arrow(e) {
  var images = document.getElementsByClassName('image');
  var imagesSRC = [];

  for (var i = 0; i < images.length; i++) {
    imagesSRC[i] = images[i].getAttribute('src');
  };

  var currentImage = document.getElementById('currentImg');
  var currentImageSRC = currentImage.getAttribute('src');

  var arrowId = e.target.getAttribute('id');

  if (arrowId == 'left') {
    for (var i = 0, j = 0; i < images.length; i++) {
      if (imagesSRC[i] == currentImageSRC) {
        j = i;
        j--;
        if (j >= 0) {
          document.getElementById('currentImg').src = imagesSRC[j];
        };
      };
    };
  } else if (arrowId == 'right') {
    for (var i = 0, j = 0; i < images.length; i++) {
      if (imagesSRC[i] == currentImageSRC) {
        j = i;
        j++;
        if (j <= (images.length -= 1)) {
          document.getElementById('currentImg').src = imagesSRC[j];
        };
      };
    };
  };
};


var sumTotal = 0;

function cart(e) {


  var count = e.target.getAttribute('count');

  count = parseInt(count);
  if (count >= 0) {
    sumTotal += count;
    var cart = document.getElementById('cart');
    var cartSum = document.createElement('span');
    cart.innerHTML = 'Сумма вашего заказа ' + sumTotal + '$';
    cart.appendChild(cartSum);
  }

}


// var cart = document.getElementById('product');

window.onload = onWindowLoad;
document.addEventListener('click', arrow);
document.addEventListener('click', cart);