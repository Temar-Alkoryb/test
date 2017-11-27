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

      var newRow = {};

      newRow.date = new Date(Date.now()).toString().split('GMT')[0];
      newRow.randomNum = Math.floor(Math.random() * 4) * 3;
      newRow.clicks = 0;
      newRow.visible = false;

      return newRow;
    }

    vm.createRow = function() {
      vm.rows.push(new Row());
    }

    vm.addClick = function(id) {
      vm.rows[id]['clicks']++;
      vm.rows[id]['visible'] = !vm.rows[id]['visible'];
    }

    function init() {
      timer = $interval(vm.createRow, 5000);
    }

    vm.$onDestroy = function() {
      $interval.cancel(timer)
    };

    init();

  }

})();
