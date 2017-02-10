import { SVG_NS } from '../settings'

export default class Paddle {

  constructor(boardHeight, width, height, x, y, up, down) {

    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.score = 0;

    document.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case up:
          this.up();
          break;
        case down:
          this.down();
          break;
      }
    });
  }

  up() {
    console.log('up');
    this.y = this.y - this.speed + Math.max(0,256);

  }
  down() {
    console.log('down');
    this.y = this.y + this.speed;

  }

  render(svg) {
    let paddle = document.createElementNS(SVG_NS, 'rect');
    paddle.setAttributeNS(null, 'x', this.x);
    paddle.setAttributeNS(null, 'y', this.y);
    paddle.setAttributeNS(null, 'width', this.width);
    paddle.setAttributeNS(null, 'height', this.height);
    paddle.setAttributeNS(null, 'fill', 'white');

    svg.appendChild(paddle);



  }
}