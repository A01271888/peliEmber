import DS from 'ember-data';

export default DS.Model.extend({
	nombre: DS.attr('string'),
	director: DS.attr('string'),
	año: DS.attr('string'),

	proyecciones: DS.hasMany('proyeccion')
});
