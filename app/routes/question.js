export default Ember.Route.extend({
    model: function (params) {
        return questions.findBy('id', params.question_id);
    }
});
