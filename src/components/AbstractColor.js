export default class AbstractColor {
	constructor(red, green, blue, alpha) {
		this.red = red;
		this.green = green;
		this.blue = blue;
		this.alpha = alpha;
	}

	toString() {
		return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
	}
}
