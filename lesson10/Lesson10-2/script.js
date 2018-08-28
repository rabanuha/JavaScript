class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.backgroundColor  = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}
	newDiv() {

		let div = document.createElement('div');
		div.className = "text-div";
		div.innerHTML = "Записываю в него любой текст";
		div.style.cssText = `height: ${this.height}px; width: ${this.width}px; background-color: ${this.backgroundColor}; font-size: ${this.fontSize}px; text-align: ${this.textAlign}`;
		document.body.appendChild(div);
	}

}

let creDiv = new Options(200,200,'green',24,'right');

creDiv.newDiv();