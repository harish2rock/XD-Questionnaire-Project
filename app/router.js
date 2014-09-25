var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
   this.resource('questions');
   this.resource('thank-you');
  //this.route('helper-test');
  // this.resource('posts', function() {
  //   this.route('new');
  // });
});

// App.Router.map(function () {
//     this.resource('questions', function () {
//         this.resource('question', { path: ':question_id' });
//     });
// });


export default Router;
