import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Table from "./components/Table";

function App() {
  
  return (
    <div className="App">

      <Header />

      <main className="main">

        {/* <!-- Section container --> */}
        <section className="todo-list-container">
          <h1>Todo List</h1>

          <div className="add-btn-container">
            <button className="btn">+ Add new Todo</button>
          </div>

          <div className="table-wrapper">

            {/* <Loader /> */}

            <Table />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
