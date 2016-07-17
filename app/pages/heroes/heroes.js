angular.module('heroes', ['heroService'])
.component('heroes', {
  templateUrl: 'app/pages/heroes/heroes.html',
  bindings:{
      'name': '<',
      'age': '@'
  },
  controller: function(heroServiceFactory){
      this.heroes = heroServiceFactory.getAllHeroes();
      this.name = 'asd';
      this.age = 15;
  }
});