import { SVG_NS, KEYS } from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';

export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;

		this.gameElement = document.getElementById(this.element);
		this.pause = false;

		// ________________PADDLE____________________
		this.boardGap = 10;
		this.paddleWidth = 8;
		this.paddleHeight = 56;
		this.boardGap = 10;
		this.player1Up = 40;

		this.board = new Board(this.width, this.height);





		// __________________PAUSE__________________	


		document.addEventListener('keydown', event => {
			switch (event.keyCode) {
				case KEYS.spaceBar:
					this.pause = !this.pause;
					break;

			}
		});


		// __________________PLAYER 1___________________
		this.player1 = new Paddle(this.height,
			this.paddleWidth,
			this.paddleHeight,
			this.boardGap,
			(this.height - this.paddleHeight) / 2,
			KEYS.a,
			KEYS.z);




		// ____________________PLAYER 2____________________
		this.player2 = new Paddle(this.height,
			this.paddleWidth,
			this.paddleHeight,
			this.width - this.boardGap - this.paddleWidth,
			(this.height - this.paddleHeight) / 2,
			KEYS.up,
			KEYS.down);



		// ______________________BALL______________________
		this.ball = new Ball(8, this.width, this.height, 1);
		this.ball2 = new Ball(10, this.width, this.height, 1);
		this.ball3 = new Ball(10, this.width, this.height, 1)
		this.ball4 = new Ball();


		document.addEventListener('keydown', event => {
			switch (event.keyCode) {
				case KEYS.n:
					this.ball4 = new Ball(10, this.width, this.height, -1)
					break;


			}

		})

		// _____________________SCORE_____________________

		this.player1Score = new Score(this.width / 2 + 50, 40, 30);
		this.player2Score = new Score(this.width / 2 - 50, 40, 30);

	}

	render() {

		if (this.pause) {
			return;
		}

		this.gameElement.innerHTML = '';

		let svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'width', this.width);
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
		this.gameElement.appendChild(svg);

		this.board.render(svg);
		this.ball.render(svg, this.player1, this.player2)
		this.ball2.render(svg, this.player1, this.player2)
		this.ball3.render(svg, this.player1, this.player2)
		this.ball4.render(svg, this.player1, this.player2)


		this.player1.render(svg);
		this.player2.render(svg);


		this.player1Score.render(svg, this.player1.score);
		this.player2Score.render(svg, this.player2.score);

	}

}