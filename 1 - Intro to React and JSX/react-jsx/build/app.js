var rootElement = document.getElementById('root');
var root = ReactDOM.createRoot(rootElement);

var Heading = function Heading(props) {
    return React.createElement(
        "h1",
        { className: "heading" },
        "Hello From ",
        props.title,
        "!"
    );
};

var headerElement = React.createElement(
    "div",
    null,
    React.createElement(
        "header",
        null,
        React.createElement(Heading, { title: "React" }),
        React.createElement(
            "h2",
            null,
            "login here"
        ),
        React.createElement(
            "p",
            null,
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, unde."
        )
    ),
    React.createElement(
        "button",
        null,
        "click"
    )
);

root.render(headerElement);