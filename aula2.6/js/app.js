(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
   
  });

  app.controller('PanelController', function(){
	  this.tab = 1;
	  this.selectTab = function(setTab){
		  this.tab = setTab;
		  
	  };
	  
	  this.isSelected = function(current){
		  return this.tab === current;
		  
	  };
  });

})();