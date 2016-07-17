angular.module('heroes', [])
.component('heroes', {
  templateUrl: 'app/pages/heroes/heroes.html',
  bindings:{
      'name': '<',
      'age': '@'
  },
  controller: function(){
      this.name = 'asd';
      this.age = 15;
  }
});