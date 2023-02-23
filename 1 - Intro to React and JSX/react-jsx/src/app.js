const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
console.log(root);
const headerElement = (
    <div>
        <header>
            <h1 className="heading">Hello From React!</h1>
            <h2>login here</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, unde.</p>
        </header>
        <button>click</button>
    </div>
);

root.render(headerElement);