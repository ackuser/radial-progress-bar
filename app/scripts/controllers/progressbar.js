'use strict';

/**
 * @ngdoc function
 * @name cssradialApp.controller:ProgressbarCtrl
 * @description
 * # ProgressbarCtrl
 * Controller of the cssradialApp
 */
angular.module('cssradialApp')
  .controller('ProgressbarCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];




var circle = new ProgressBar.Circle('#containerProgressbar', {
    color: '#FCB03C',
    strokeWidth: 3,
    trailWidth: 1,
    duration: 1500,
    text: {
        value: '0'
    },
    step: function(state, bar) {
        bar.setText((bar.value() * 100).toFixed(1) + "%");
    }
});

circle.animate(.8, function() {
    //circle.animate(0);
})

  });
