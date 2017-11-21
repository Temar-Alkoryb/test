(function() {
  'use strict';

  angular
    .module('test')
    .controller('MainController', MainController);

  function MainController($interval) {
    var vm = this;
    var timer;
    
    vm.rows = [];
    
    function Row() {
      this.date = new Date(Date.now()).toString().split('GMT')[0];
      this.randomNum = Math.floor(Math.random()*4)*3;
      this.clicks = 0;
    }
    
    vm.createRow = function() {
	  vm.rows.push(new Row());
    }
    
    vm.addClick = function(id) { }

    function init() {
	      timer = $interval(vm.createRow, 10000);    
    }
    
    init();
    

  }
})();
