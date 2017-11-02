import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		let id = params.id;

		if(id == 1){
			return {
				id: 1, 
				nombre: "Coco",
				genero: "Animada",
				año: "2017"
			};
		} else if(id == 2){
			return	{
				id: 2, 
				nombre: "It",
				genero: "Terror",
				año: "2017"
			}
		} else {
			return {
				id: 3, 
				nombre: "Cars 3",
				genero: "Animada",
				año: "2017"
			};
		}
	}
});
