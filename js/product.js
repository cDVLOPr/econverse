// main image
$(".e-product-image");

// mini images
$(".e-product-image1").click(function(event) {
	// $(".e-product-image").css('border', '3px solid green');
	$(".e-product-image").replaceWith( '<div class="e-product-image"> <figure> <a href="javascript:void()"><img src="images/03-image-mini-2_07.jpg" alt="Product image small"></a> </figure> </div>' );
});
// .css({"border":"5px solid orange"});