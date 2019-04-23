// replace images
$(".e-product-image-small-container a").click(function(e) {
	e.preventDefault();
	var image_src = $(this).find('img').attr('src');
	$('.e-product-image img').attr('src', image_src);
});

// slide toogle
$( ".e-info-product button" ).on('click', function(e) {
	// toggleClass = add and remove css class, siblings = brother elements, slideToggle = apply the effect
	$(this).toggleClass('e-active').siblings().slideToggle("slow");

	// access the father element and search the "P" element to put the slideToggle effect  *other way with the same result*
	// $(this).parent().find('p').slideToggle("slow");
});