import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		regresar(){
			return this.transitionToRoute('lista-peliculas');
		}
	}
});
