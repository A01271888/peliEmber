import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		save(){
			alert("Se guardó");
			this.sendAction('didSave');
;		}
	}
});
