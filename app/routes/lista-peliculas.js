import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return [
			{
				id: 1, 
				nombre: "Coco",
				genero: "Animada",
				año: 2017, 
			},
			{
				id: 3, 
				nombre: "It",
				genero: "Terror",
				año: 2017, 
			},
			{
				id: 3, 
				nombre: "Cars 3",
				genero: "Animada",
				año: 2017, 
			}
		]

		//return this.store.findAll('pelicula')
	}
});
