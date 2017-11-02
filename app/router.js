import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('lista-peliculas');
  this.route('nueva-pelicula');
  this.route('detalles-pelicula', {path: 'detalles-pelicula/:id'});
});

export default Router;
