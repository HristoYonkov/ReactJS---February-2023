const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const Heading = (props) => {
    return (
        <h1 className="heading">Hello From {props.title}!</h1>
    )
}

const headerElement = (
    <div>
        <header>
            <Heading title="React" />
            <h2>login here</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, unde.</p>
        </header>
        <button>click</button>
    </div>
);

root.render(headerElement);