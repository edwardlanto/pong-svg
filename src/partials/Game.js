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
		this.ballArray = [];
		this.ballCount = 0;
		this.pause = false;
		
		this.gameElement = document.getElementById(this.element);
		
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


		// ______________________BALL______________________
		this.ball = new Ball(8, this.width, this.height, 1);

		// _____________________SCORE_____________________

		this.player1Score = new Score(this.width / 2 + 50, 40, 30);
		this.player2Score = new Score(this.width / 2 - 50, 40, 30);

		this.leftPaddle = this.paddleChange(this.boardGap, KEYS.a, KEYS.z)
		this.rightPaddle = this.paddleChange(this.width - this.boardGap - this.paddleWidth, KEYS.up, KEYS.down)
	}//constructor

	scoreCreate(scoreCondition) {
		return new Score(scoreCondition);
	}

	paddleChange(pos, keyUp, keyDown) {
		return new Paddle(this.height,
			this.paddleWidth,
			this.paddleHeight,
			pos,
			(this.height - this.paddleHeight) / 2,
			keyUp,
			keyDown
		);

	}//paddleChange

	render() {

		if (this.pause) {
			return;
		}

		this.gameElement.innerHTML = '';
		this.ballArray;
		let svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'width', this.width);
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
		this.gameElement.appendChild(svg);

		this.board.render(svg);
		this.ball.render(svg, this.leftPaddle, this.rightPaddle)

		this.leftPaddle.render(svg);
		this.rightPaddle.render(svg);

		this.player1Score.render(svg, this.leftPaddle.score);
		this.player2Score.render(svg, this.rightPaddle.score);
	}

}