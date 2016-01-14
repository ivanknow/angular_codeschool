(function() {
	var app = angular.module('pessoaApp', []);
	app.controller('PessoaController', function() {
		this.pessoas = pessoas;
	});

	var pessoas = [ {
		nome : "Macaxeira",
		idade : 20,

	}, {
		nome : "Tibucio",
		idade : 90,

	},{
		nome : "Solomon",
		idade : 40,

	} ];
	
	app.directive('pessoa',function(){
		return {
			restrict:'E',
			templateUrl:'pessoa.html'
		}
	});
	
	app.directive('pessoaAttr',function(){
		return {
			restrict:'A',
			templateUrl:'pessoa.html'
		}
	});
})();
