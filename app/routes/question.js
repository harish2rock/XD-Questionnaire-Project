export default Ember.Route.extend({

    model: function (params) {
        return questions.findBy('id', params.question_id);
    },
    actions: {
    error: function(error, transition) {

      if (error) {
        // error substate and parent routes do not handle this error
        return this.transitionTo('thank-you');
      }

      // Return true to bubble this event to any parent route.
      return true;
    }
  }
});
