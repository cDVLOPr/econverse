"use strict";

// Script created to add the images to the html page
// Get the objects
// Create array or object and put the images structure inside
// Do the magic


$(function(){
	// Array images
	var images = [
					'<figure id="fig-1"><img src="images/01-tendencies.jpg" alt="Image-01 of the tendencies section"><figcaption><h3>Men Dresses</h3><h4>ver produtos > </h4></figcaption></figure>',
					'<figure><img src="images/02-tendencies.jpg" alt="Image-02 of the tendencies section"><figcaption><h3>Jewellery</h3><h4>ver produtos > </h4></figcaption></figure>',
					'<figure><img src="images/03-tendencies.jpg" alt="Image-03 of the tendencies section"><figcaption><h3>Men Dresses</h3><h4>ver produtos > </h4></figcaption></figure>',
					'<figure><img src="images/01-popular.jpg" alt="Creative Adidas T-Shirts"><figcaption><h6>Creative Adidas T-Shirts</h6><h6>R$ 150.55</h6></figcaption></figure>',
					'<figure><img src="images/02-popular.jpg" alt="Mango-Navy"><figcaption class="active"><h6>Mango-Navy</h6><h6>R$ 190.99<i class="far fa-heart"></i></h6></figcaption></figure>',
					'<figure><img src="images/03-popular.jpg" alt="Gravida Est Quis Euismod"><figcaption><h6>Gravida Est Quis Euismod</h6><h6>R$ 150.55</h6></figcaption></figure>',
					'<figure><img src="images/04-popular.jpg" alt="Donec Condimentum Fer"><figcaption><h6>Donec Condimentum Fer</h6><h6>R$ 310.05</h6></figcaption></figure>',
					'<figure><img src="images/05-popular.jpg" alt="Creative Adidas T-Shirts"><figcaption><h6>Creative Adidas T-Shirts</h6><h6>R$ 150.55</h6></figcaption></figure>',
					'<figure><img src="images/06-popular.jpg" alt="Mongo-Navy"><figcaption><h6>Mongo-Navy</h6><h6>R$ 150.55</h6></figcaption></figure>',
					'<figure><img src="images/07-popular.jpg" alt="Creative Adidas T-Shirts"><figcaption><h6>Creative Adidas T-Shirts</h6><h6>R$ 150.55</h6></figcaption></figure>',
					'<figure><img src="images/08-popular.jpg" alt="Creative Adidas T-Shirts"><figcaption><h6>Creative Adidas T-Shirts</h6><h6>R$ 150.55</h6></figcaption></figure>'
				 ];
	
	// Tendencies section
	$('#tendencies div.col-12:first').wrapInner(images[0]);
	$('#tendencies div.col-12:last').wrapInner(images[1]);
	$('#tendencies div.col-6:last').wrapInner(images[2]);

	// Popular section
	$('#popular .row:first div.col-3:nth-child(1)').wrapInner(images[3]);
	$('#popular .row:first div.col-3:nth-child(2)').wrapInner(images[4]);
	$('#popular .row:first div.col-3:nth-child(3)').wrapInner(images[5]);
	$('#popular .row:first div.col-3:nth-child(4)').wrapInner(images[6]);
	$('#popular .row:last div.col-3:nth-child(1)').wrapInner(images[7]);
	$('#popular .row:last div.col-3:nth-child(2)').wrapInner(images[8]);
	$('#popular .row:last div.col-3:nth-child(3)').wrapInner(images[9]);
	$('#popular .row:last div.col-3:nth-child(4)').wrapInner(images[10]);
});