import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		detalles(nombre){
			alert("Detalles de " + nombre);
		}
	}
});
