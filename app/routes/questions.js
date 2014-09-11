export default Ember.Route.extend({
    model: function () {
        return [
    {
    id: "question_1",
    textarea: "yes",
    radio: null,
    options: "",
    title: "CSS",
    body: "Write CSS classes that will remove the rounded corners from the Earth.",
    answer:""
},
{
    id: "question_2",
    textarea: null,
    radio: "yes",
    options: { value1: "css", value2: "html", value3: "javascript", value4: "xml" },
    title: "Javascript",
    body: "Select your favorite language",
    answer: ""
},
 {
    id: "question_3",
    textarea: "yes",
    radio: null,
    options: "",
    title: "CSS",
    body: "Write CSS classes that will remove the rounded corners from the Earth.",
    answer:""
},
{
    id: "question_4",
    textarea: null,
    radio: "yes",
    options: { value1: "css", value2: "html", value3: "javascript", value4: "xml" },
    title: "Javascript",
    body: "Select your favorite language",
    answer: ""
},
 {
    id: "question_5",
    textarea: "yes",
    radio: null,
    options: "",
    title: "CSS",
    body: "Write CSS classes that will remove the rounded corners from the Earth.",
    answer:""
},
{
    id: "question_6",
    textarea: null,
    radio: "yes",
    options: { value1: "css", value2: "html", value3: "javascript", value4: "xml" },
    title: "Javascript",
    body: "Select your favorite language",
    answer: ""
}
];
    }
});
