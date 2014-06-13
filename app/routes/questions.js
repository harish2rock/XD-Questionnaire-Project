export default Ember.Route.extend({
    model: function () {
        return [{
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
    }
});
