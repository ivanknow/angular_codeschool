(function() {
	var app = angular.module('gemStore', []);
	app.controller('StoreController', function() {
		this.products = gems;
	});

	var gems = [ {
		name : "Macaxeira",
		price : 2.00,
		desc : "o melhor para se comer",
		canPurchase : true,
		soldOut : false
	}, {
		name : "Batata",
		price : 2.00,
		desc : "o melhor para explodir de gordura",
		canPurchase : false,
		soldOut : false
	} ];
})();
