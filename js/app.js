window.addEventListener('load', function () {
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente',
		},
		responsive: [
			{
				breakpoint: 450, //Aqui indicamos que cuando el tamaño de la pantalla sea mayor a 450px se mostraran dos imagenes en el slide
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 800, //Aqui indicamos que cuando el tamaño de la pantalla sea mayor a 800px se mostraran cuatro imagenes en el slide
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				},
			},
			{},
		],
	});
});
