$(".e-product-image-small-container a").click(function(e) {
	e.preventDefault();
	var image_src = $(this).find('img').attr('src');
	$('.e-product-image img').attr('src', image_src);
});


// slide toogle