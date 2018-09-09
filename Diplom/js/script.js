window.addEventListener('DOMContentLoaded', function() {


	// Tab glazing_block

			let tabGlazing 							= document.getElementsByClassName('tab'),
							tabContent = document.getElementsByClassName('tabcontent'),
							tabGlazingContent = document.getElementsByClassName('glazing_slider')[0];


			function hideTabContent(a) {
			  for (let i = a; i < tabContent.length; i++) {


							tabGlazing[i].classList.remove('active');
			    tabContent[i].classList.remove('show');
			    tabContent[i].classList.add('hide');
			  }
			}

			hideTabContent(1);




			function showTabContent(b) {
			  if (tabContent[b].classList.contains('hide')) {
			    hideTabContent(0);
			    tabContent[b].classList.remove('hide');
			    tabContent[b].classList.add('show');
			    tabGlazing[b].classList.add('active');
			  }
			}


			tabGlazingContent.addEventListener('click', function(event) {

				let target = event.target;
				if (target.classList.contains('tab')) {
				  for (let i = 0; i < tabGlazing.length; i++) {
				    if (target == tabGlazing[i]) {
				      showTabContent(i);
				      break;
				    }
				  }
				}


			});


			// Tab internal_link

			let tabDecor = document.getElementsByClassName('no_click'),
							a = document.getElementsByClassName('text'),
							tabContentDecor = document.getElementsByClassName('decorat'),
							tabDecorSlider = document.getElementsByClassName('decoration_slider')[0];


				function hideTabContentDec(a) {
				  for (let i = a; i < tabContentDecor.length; i++) {
								tabDecor[i].classList.remove('after_click');
				    tabContentDecor[i].classList.remove('show');
				    tabContentDecor[i].classList.add('hide');
				  }
				}

				hideTabContentDec(1);




				function showTabContentDec(b) {
				  if (tabContentDecor[b].classList.contains('hide')) {
				    hideTabContentDec(0);
				    tabContentDecor[b].classList.remove('hide');
				    tabContentDecor[b].classList.add('show');
				    tabDecor[b].classList.add('after_click');
				  }
				}


				tabDecorSlider.addEventListener('click', function(event) {

					let target = event.target;
					if (target.classList.contains('no_click') || target.classList.contains('text')) {
					  for (let i = 0; i < tabDecor.length; i++) {
					    if (target == tabDecor[i] || target == a[i]) {
					      showTabContentDec(i);
					      break;
					    }
					  }
					}


				});


}); 