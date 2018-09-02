function modal () {
	let more = document.querySelector('.more'),
					overlay = document.querySelector('.overlay'),
					close = document.querySelector('.popup-close');
					

	more.addEventListener('click', function () {

						this.classList.add('more-splash');
						overlay.style.display = "block";
						document.body.style.overflow = 'hidden';


	});
	close.addEventListener('click', function() {


			overlay.style.display = "none";
			more.classList.remove('more-splash');
			document.body.style.overflow = '';
			statusMessage.innerHTML = '';

			for (let i = 0; btn_block.length; i++) {
				btn_block[i].classList.remove('more-splash');
			}
	});

	let btn_block = document.querySelectorAll('.description-btn');


	for (let i = 0; i < btn_block.length; i++) {
	    let button = btn_block[i];
	    button.addEventListener('click', function (event) {
	    		if (event.target && event.target.className == 'description-btn') {

	    						event.target.classList.add('more-splash');
	    						overlay.style.display = "block";
	    						document.body.style.overflow = 'hidden';
	    		}
	    });

	}
}

module.exports = modal;