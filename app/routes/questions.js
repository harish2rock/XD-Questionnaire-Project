export default Ember.Route.extend({

    model: function () {
        return [
//     {
//     id: "Question-0",
//     answer_name: { value1: "name", value2: "email"},
//     display_name: "My Information",
//     textarea: null,
//     radio: null,
//     textfield: "yes",
//     options: { value1: "Name", value2: "Email"},
//     title: "Your Info",
//     body: "Please enter the below information",
//     answer:""
// },
    {
    id: "Question-1",
    question_name: "questions[question_1]",
    answer_name: "answers[answer_1]",
    display_name: "Question #1",
    textarea: "yes",
    radio: null,
    textfield: null,
    options: "",
    title: "HTML",
    body: "What is the benefit of using the new HTML5 tag semantics?",
    answer:""
},

 {
    id: "Question-2",
    question_name: "questions[question_2]",
    answer_name: "answers[answer_2]",
    display_name: "Question #2",
    textarea: "yes",
    radio: null,
    textfield: null,
    options: "",
    title: "HTML",
    body: "Which HTML/CSS framework do you use (if any) and why (or why not)?",
    answer:""
},
{
    id: "Question-3",
    question_name: "questions[question_3]",
    answer_name: "answers[answer_3]",
    display_name: "Question #3",
    textarea: "yes",
    textfield: null,
    radio: null,
    options: "",
    title: "HTML",
    body: "How would you create a widget that would fit in a 250px wide area as well as a 400px area?",
    answer: ""
},
{
    id: "Question-4",
    question_name: "questions[question_4]",
    answer_name: "answers[answer_4]",
    display_name: "Question #4",
    textarea: null,
    textfield: "yes",
    radio: null,
    options: "",
    title: "HTML",
    body: "What is the lifetime of local storage?",
    answer: ""
},
 {
    id: "Question-5",
    question_name: "questions[question_5]",
    answer_name: "answers[answer_5]",
    display_name: "Question #5",
    textarea: "yes",
    radio: null,
    textfield: null,
    options: "",
    title: "HTML",
    body: "What are some usual concerns or things to look out for with cross browser compatibility?  How do you personally test for compatibility and what type of solutions do you use to deal with browser specific limitations that might prevent cross browser compatibility?",
    answer:""
},
{
    id: "Question-6",
    question_name: "questions[question_6]",
    answer_name: "answers[answer_6]",
    display_name: "Question #6",
    textarea: "yes",
    textfield: null,
    radio: null,
    options: "",
    title: "HTML",
    body: "Create an input field that restricts the number of characters inside it to 10.",
    answer: ""
},
{
    id: "Question-7",
    question_name: "questions[question_7]",
    answer_name: "answers[answer_7]",
    display_name: "Question #7",
    textarea: "yes",
    textfield: null,
    radio: null,
    options: "",
    title: "CSS",
    body: "Have you used a CSS preprocessor before? Which do you prefer, and why?",
    answer: ""
},
// {
//     id: "Question-8",
//     question_name: "questions[question_8]",
//     answer_name: "answers[answer_8]",
//     display_name: "Question #8",
//     textarea: null,
//     textfield: null,
//     radio: "yes",
//     options: {
//         value1: "margin",
//         value2: "position-x",
//         value3: "width",
//         value4: "float-x",
//         value5: "border",
//         value6: "padding",
//         value7: "line-height–x"
//     },
//     title: "CSS",
//     body: "Which attributes are not part of the CSS box model?",
//     answer: ""
// },
{
    id: "Question-9",
    question_name: "questions[question_9]",
    answer_name: "answers[answer_9]",
    display_name: "Question #9",
    textarea: "testarea",
    textfield: null,
    radio: null,
    options: "",
    title: "CSS",
    body: "List 3 types of positioning and how they work, and explain the differences.",
    answer: ""
},
{
    id: "Question-10",
    question_name: "questions[question_10]",
    answer_name: "answers[answer_10]",
    display_name: "Question #10",
    textarea: "yes",
    textfield: null,
    radio: null,
    options: { value1: "display:block", value2: "display-block", value3: "display:inline-block", value4: "display:none" },
    title: "CSS",
    body: "You would like a container div that’s of fluid width, and to nest another div inside that has:
            a) padding; and
            b) 100% width (edge-to-edge with the container)
        What is the issue and how is it typically resolved?",
    answer: ""
},
{
    id: "Question-10",
    question_name: "questions[question_10]",
    answer_name: "answers[answer_10]",
    display_name: "Question #10",
    textarea: null,
    textfield: "yes",
    radio: null,
    options: "",
    title: "CSS",
    body: "In the following css example what color will the browser render .class name?
            #class-name { color: #000;  }
            .class-name { color: #333; }
    ",
    answer: ""
},
{
    id: "Question-10",
    question_name: "questions[question_10]",
    answer_name: "answers[answer_10]",
    display_name: "Question #10",
    textarea: null,
    textfield: "yes",
    radio: null,
    options: "",
    title: "CSS",
    body: "List one advantage of using IDs over classes. List one disadvantage.",
    answer: ""
},
{
    id: "Question-10",
    question_name: "questions[question_10]",
    answer_name: "answers[answer_10]",
    display_name: "Question #10",
    textarea: null,
    textfield: "yes",
    radio: null,
    options: "",
    title: "CSS",
    body: "When targeting media queries that are defined by variables using SASS ($width-small: 400px;). What is the solution for increasing the breakpoint by one value?",
    answer: ""
},
{
    id: "Question-10",
    question_name: "questions[question_10]",
    answer_name: "answers[answer_10]",
    display_name: "Question #10",
    textarea: null,
    textfield: "yes",
    radio: null,
    options: "",
    title: "CSS",
    body: "What does the \">\" (greater-than sign) CSS selector mean?",
    answer: ""
},
{
    id: "Question-10",
    question_name: "questions[question_10]",
    answer_name: "answers[answer_10]",
    display_name: "Question #10",
    textarea: "yes",
    textfield: null,
    radio: null,
    options: "",
    title: "CSS",
    body: "Give an example of a media query.",
    answer: ""
},
{
    id: "Question-10",
    question_name: "questions[question_10]",
    answer_name: "answers[answer_10]",
    display_name: "Question #10",
    textarea: "yes",
    textfield: null,
    radio: null,
    options: "",
    title: "CSS",
    body: "Explain CSS box model.",
    answer: ""
},
{
    id: "Question-10",
    question_name: "questions[question_10]",
    answer_name: "answers[answer_10]",
    display_name: "Question #10",
    textarea: "yes",
    textfield: null,
    radio: null,
    options: "",
    title: "CSS",
    body: "Briefly explain the benefits of using a grid system and any scenarios where using one of these frameworks could be bad.",
    answer: ""
},
{
    id: "Question-10",
    question_name: "questions[question_10]",
    answer_name: "answers[answer_10]",
    display_name: "Question #10",
    textarea: "yes",
    textfield: null,
    radio: null,
    options: "",
    title: "CSS",
    body: "How would you handle being given the conflicting business requirements to A) support versions of Internet Explorer down to IE8, and B) use features that Internet Explorer 8 does not support (gradients, rounded corners, transitions, etc)?",
    answer: ""
},
{
    id: "Question-10",
    question_name: "questions[question_10]",
    answer_name: "answers[answer_10]",
    display_name: "Question #10",
    textarea: "yes",
    textfield: null,
    radio: null,
    options: "",
    title: "CSS",
    body: "What are CSS Pseudo Classes?",
    answer: ""
},
{
    id: "Question-10",
    question_name: "questions[question_10]",
    answer_name: "answers[answer_10]",
    display_name: "Question #10",
    textarea: "yes",
    textfield: null,
    radio: null,
    options: "",
    title: "CSS",
    body: "Write CSS to make an object rotate (for a webkit browser)",
    answer: ""
},
//--------------------------------------------
{
    id: "Question-10",
    question_name: "questions[question_10]",
    answer_name: "answers[answer_10]",
    display_name: "Question #10",
    textarea: "yes",
    textfield: null,
    radio: null,
    options: "",
    title: "Javascript",
    body: "What’s your experience with object-oriented JavaScript?",
    answer: ""
},{
    id: "Question-10",
    question_name: "questions[question_10]",
    answer_name: "answers[answer_10]",
    display_name: "Question #10",
    textarea: "yes",
    textfield: null,
    radio: null,
    options: "",
    title: "Javascript",
    body: "How would you avoid conflicts between jQuery and prototype js libraries?",
    answer: ""
},{
    id: "Question-10",
    question_name: "questions[question_10]",
    answer_name: "answers[answer_10]",
    display_name: "Question #10",
    textarea: "yes",
    textfield: null,
    radio: null,
    options: "",
    title: "Javascript",
    body: "How would you select the last item in a list (must work in IE7)?",
    answer: ""
},{
    id: "Question-10",
    question_name: "questions[question_10]",
    answer_name: "answers[answer_10]",
    display_name: "Question #10",
    textarea: "yes",
    textfield: null,
    radio: null,
    options: "",
    title: "Javascript",
    body: "Find the value of an element that can be used (and reused) to be outputted to another element.",
    answer: ""
},{
    id: "Question-10",
    question_name: "questions[question_10]",
    answer_name: "answers[answer_10]",
    display_name: "Question #10",
    textarea: "yes",
    textfield: null,
    radio: null,
    options: "",
    title: "Javascript",
    body: "Without using any libraries such as jQuery, write native JavaScript to toggle the hiding of the “info box” when you click the “toggle” button in the HTML below:
        <div class=\"container\">
            <div class=\"infoBox\">
                <p>Click button to hide/show this message.</p>
            </div>
            <button class=\"toggle\" id=”toggleButton”>
                Toggle Info Box
            </button>
        </div>",
    answer: ""
},{
    id: "Question-10",
    question_name: "questions[question_10]",
    answer_name: "answers[answer_10]",
    display_name: "Question #10",
    textarea: "yes",
    textfield: null,
    radio: null,
    options: "",
    title: "Javascript",
    body: "Explain the term truthy as it relates to comparisons in javascript.",
    answer: ""
},{
    id: "Question-10",
    question_name: "questions[question_10]",
    answer_name: "answers[answer_10]",
    display_name: "Question #10",
    textarea: "yes",
    textfield: null,
    radio: null,
    options: "",
    title: "Javascript",
    body: "What will be the output (in the console)  from each of these statements:
            if(myvar === “not defined”){console.log(“hello”)} ==> ReferenceError: myvar is not defined
            If(myvar == “not defined”){console.log(“hello”)} ==> ReferenceError: myvar is not defined
            If(myvar = “not defined”){console.log(“hello”)} ==> hello",
    answer: ""
},{
    id: "Question-10",
    question_name: "questions[question_10]",
    answer_name: "answers[answer_10]",
    display_name: "Question #10",
    textarea: "yes",
    textfield: null,
    radio: null,
    options: "",
    title: "Javascript",
    body: "Show me a basic javascript try catch block that all js functions should have.",
    answer: ""
},

//----------------------------------

{
    id: "Question-10",
    question_name: "questions[question_10]",
    answer_name: "answers[answer_10]",
    display_name: "Question #10",
    textarea: "yes",
    textfield: null,
    radio: null,
    options: "",
    title: "Javascript",
    body: "How would you deal with a browser that does not support HTML5/CSS3(such as IE8) handle a responsive web page?",
    answer: ""
},{
    id: "Question-10",
    question_name: "questions[question_10]",
    answer_name: "answers[answer_10]",
    display_name: "Question #10",
    textarea: "yes",
    textfield: null,
    radio: null,
    options: "",
    title: "Javascript",
    body: "What are a few ways you can improve a site’s performance(load times)?",
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

