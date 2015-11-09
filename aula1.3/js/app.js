(function() {
	var app = angular.module('gemStore', []);
	app.controller('StoreController', function() {
		this.product = gem;
	});

	var gem = {
		name : "Macaxeira",
		price : 2.00,
		desc:"eh"
	};
})();
