export default Ember.Route.extend({

    model: function () {
        return [
    {
    id: "question_1",
    display_name: "Question #1",
    textarea: "yes",
    radio: null,
    options: "",
    title: "CSS",
    body: "Write CSS classes that will remove the rounded corners from the Earth.",
    answer:""
},
{
    id: "question_2",
    display_name: "Question #2",
    textarea: null,
    radio: "yes",
    options: { value1: "css", value2: "html", value3: "javascript", value4: "xml" },
    title: "Javascript",
    body: "Select your favorite language",
    answer: ""
},
 {
    id: "question_3",
    display_name: "Question #3",
    textarea: "yes",
    radio: null,
    options: "",
    title: "CSS",
    body: "Write CSS classes that will remove the rounded corners from the Earth.",
    answer:""
},
{
    id: "question_4",
    display_name: "Question #4",
    textarea: null,
    radio: "yes",
    options: { value1: "css", value2: "html", value3: "javascript", value4: "xml" },
    title: "Javascript",
    body: "Select your favorite language",
    answer: ""
},
 {
    id: "question_5",
    display_name: "Question #5",
    textarea: "yes",
    radio: null,
    options: "",
    title: "CSS",
    body: "Write CSS classes that will remove the rounded corners from the Earth.",
    answer:""
},
{
    id: "question_6",
    display_name: "Question #6",
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
