function random(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
};

var game = {
	size: 20,
	snake: [],
	food: {},
	wall: {},
	totalScore: 0,
	direction: {
		row: -1,
		col: 0
	},
	createBoard: function () {
		var table = document.createElement('table');
		table.classList.add('game-table');

		for (var i = 0; i < this.size; i++) {
			var tr = document.createElement('tr');

			for (var j = 0; j < this.size; j++) {
				td = document.createElement('td');
				td.classList.add('game-table-cell');
				td.setAttribute('id', 'cell-' + i + '-' + j);
				tr.appendChild(td);
			}
			table.appendChild(tr);
		}

		document.getElementById('snake-field').appendChild(table);
	},
	createSnake: function () {
		this.snake.push({
			row: 10,
			col: 10
		});
		this.snake.push({
			row: 11,
			col: 10
		});
	},
	render: function () {
		var elements = document.getElementsByTagName('td');

		for (var i = 0; i < elements.length; i++) {
			elements[i].classList.remove('snake-unit');
			elements[i].classList.remove('food-unit');
			elements[i].classList.remove('wall');
		}

		for (var i = 0; i < this.snake.length; i++) {
			var cell = this.snake[i];
			var id = 'cell-' + cell.row + '-' + cell.col;
			document.getElementById(id).classList.add('snake-unit');
		}

		if (this.food.row && this.food.col) {
			var id = 'cell-' + this.food.row + '-' + this.food.col;
			document.getElementById(id).classList.add('food-unit');
		}
		if (this.food.row && this.food.col) {
			var id = 'cell-' + this.wall.row + '-' + this.wall.col;
		var id2 = 'cell-' + this.wall.row + '-' + this.wall.col2;
		var id3 = 'cell-' + this.wall.row + '-' + this.wall.col3;
		document.getElementById(id).classList.add('wall');
		document.getElementById(id2).classList.add('wall');
		document.getElementById(id3).classList.add('wall');
		}

		
		

	},

	isSnakeCell: function (row, col) {
		for (var i = 0; i < this.snake.length; i++) {
			var cell = this.snake[i];
			if (cell.row == row && cell.col == col) {

				return true;

			}
		}

		return false;

	},

	createFood: function () {
		var pool = [];
		for (var i = 0; i < this.size; i++) {
			for (var j = 0; j < this.size; j++) {
				if (!this.isSnakeCell(i, j) && i != 0 && j != 0) {
					pool.push({
						row: i,
						col: j
					});
				}
			}
		}


		var index = random(0, pool.length);
		this.food = pool[index];


	},
	createWall: function () {
		var pool = [];
		for (var i = 0; i < this.size; i++) {
			for (var j = 0, o = 0, p = 0; j < this.size; j++) {
				if (!this.isSnakeCell(i, j) && j <= (this.size - 3)) {
					o = j;
					o++;
					p = o;
					p++;
					pool.push({
						row: i,
						col: j,
						col2: o,
						col3: p
					});
				}
			}
		}


		var index = random(0, pool.length);
		this.wall = pool[index];


	},
	setEvents: function () {
		this.intervalId = setInterval(this.move.bind(this), 200);
		document.addEventListener('keydown', this.changeDirection.bind(this));
	},
	changeDirection: function (e) {
		switch (e.keyCode) {
			case 37:
				//влево
				this.direction = {
					row: 0,
					col: -1
				};
				break;
			case 38:
				//вверх
				this.direction = {
					row: -1,
					col: 0
				};
				break;
			case 39:
				//вправо
				this.direction = {
					row: 0,
					col: 1
				};
				break;
			case 40:
				//вниз
				this.direction = {
					row: 1,
					col: 0
				};
				break;
			default:
				break;
		}
	},
	checkCell: function (row, col) {
		// if (row < 0 || row >= this.size || col < 0 || col >= this.size) {
		// 	return false;
		// }
	
		if (this.isSnakeCell(row, col)) {
			return false;
		}
		return true;
	},
	over: function () {
		alert('Игра завершена');
		clearInterval(this.intervalId);
	},
	move: function () {
		// смотрим направление движения
		// в зависимости от направления движения
		// определить "голову змеи" и создаем новую голову
		var row = this.snake[0].row + this.direction.row;
		var col = this.snake[0].col + this.direction.col;

		if (row < 0) {
			row = this.size + this.direction.row;
		}
		if (col < 0) {
			col = this.size + this.direction.col;
		}
		if (row >= this.size) {
			row = 0 + this.direction.row;
		}
		if (col >= this.size) {
			col = 0 + this.direction.col;
		}

		if (!this.checkCell(row, col)) {
			return this.over();
		}

		if (this.wall.row == row && (this.wall.col == col || this.wall.col2 == col || this.wall.col3 == col)) {
			return this.over();
		}


		// добавить элемент в начало змеи
		this.snake.unshift({
			row: row,
			col: col
		});

		// удаляем элемент из хвоста змеи - таким образом змея двигается
		if (!this.food || this.food.row != row || this.food.col != col) {
			// еды нет
			this.snake.pop();
		} else {
			// еду съели
			this.createFood();
			this.createWall();
			this.score();
		}


		this.render();
	},
	score: function () {

		var score = document.getElementById('score');
		score.innerHTML = 'Score: ' + this.totalScore;
		this.totalScore++;


	},
	run: function () {
		this.createBoard();
		this.createSnake();
		this.createFood();
		this.createWall();
		this.render();
		this.setEvents();
		this.score();
	}
};

window.addEventListener('load', function () {
	game.run();
});