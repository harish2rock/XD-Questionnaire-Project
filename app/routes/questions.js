export default Ember.Route.extend({

    model: function () {
        return [
    {
    id: "Question-0",
    post_name: { value1: "name", value2: "emailid"},
    display_name: "My Information",
    textarea: null,
    radio: null,
    textfield: "yes",
    options: { value1: "Name", value2: "Email Address"},
    title: "Your Info",
    body: "Please enter the below information",
    answer:""
},
    {
    id: "Question-1",
    post_name: "questions[question_1]",
    display_name: "Question #1",
    textarea: "yes",
    radio: null,
    textfield: null,
    options: "",
    title: "CSS",
    body: "Write CSS classes that will remove the rounded corners from the Earth.",
    answer:""
},

 {
    id: "Question-2",
    post_name: "questions[question_2]",
    display_name: "Question #2",
    textarea: "yes",
    radio: null,
    textfield: null,
    options: "",
    title: "HTML",
    body: "Describe what is a DOCTYPE",
    answer:""
},
{
    id: "Question-3",
    post_name: "questions[question_3]",
    display_name: "Question #3",
    textarea: null,
    textfield: null,
    radio: "yes",
    options: { value1: "css", value2: "html", value3: "javascript", value4: "xml" },
    title: "Javascript",
    body: "Select your favorite language",
    answer: ""
},
{
    id: "Question-4",
    post_name: "questions[question_4]",
    display_name: "Question #4",
    textarea: null,
    textfield: null,
    radio: "yes",
    options: { value1: "jQuery", value2: "dojo", value3: "php", value4: "prototype" },
    title: "Javascript",
    body: "Which of the below is not a javascript library ?",
    answer: ""
},
 {
    id: "Question-5",
    post_name: "questions[question_5]",
    display_name: "Question #5",
    textarea: "yes",
    radio: null,
    textfield: null,
    options: "",
    title: "javascript",
    body: "What is event handling ?",
    answer:""
},
{
    id: "Question-6",
    post_name: "questions[question_6]",
    display_name: "Question #6",
    textarea: null,
    textfield: null,
    radio: "yes",
    options: { value1: "display:block", value2: "display-block", value3: "display:inline-block", value4: "display:none" },
    title: "CSS",
    body: "Which of these is not a proper syntax ?",
    answer: ""
}
];
    },
    actions: {
    redirect: function() {


            this.transitionTo('thank-you');

}

    }
});

