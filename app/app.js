/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
//MAG - ORIGINAL App.js code. Commented out because I don't really know what it does
//import Resolver from 'ember/resolver';
//import loadInitializers from 'ember/load-initializers';
//
//var App = Ember.Application.extend({
//  modulePrefix: 'appkit', // TODO: loaded via config
//  Resolver: Resolver
//});
//
//loadInitializers(App, 'appkit');
//
//export default App;
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MAG - Ember code pulled from the video tutorial project because I understand how that works (sort of)/////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
App = Ember.Application.create();

App.Router.map(function () {
    this.resource('questions', function () {
        this.resource('question', { path: ':question_id' });
    });
});

App.QuestionsRoute = Ember.Route.extend({
    model: function () {
        return questions;
    }
});

App.QuestionRoute = Ember.Route.extend({
    model: function (params) {
        return questions.findBy('id', params.question_id);
    }
});

var questions = [{
    id: "1",
    type: "1",
    title: "CSS",
    body: "Write CSS classes that will remove the rounded corners from the Earth.",
    answer:""
}, {
    id: "2",
    type: "1",
    title: "Javascript",
    body: "Write a javascript function to create the perfect cup of tea.",
    answer: ""
}];

