import './App.css';
import Description from './components/Description';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import Tickets from './components/Tickets';
function App() {
  return (
    <div>
      <Nav />
      <Header />
      <div className="container">
        {/* <!-- Start: Desc --> */}
        <Description />
        {/* <!-- End: Desc --> */}

        {/* <!-- Start: Speakers --> */}
        <Speakers />
        {/* <!-- End: Speakers --> */}
      </div>

      {/* <!-- Start: Tickets --> */}
      <Tickets />
      {/* <!-- End: Tickets --> */}

      {/* <!-- Start: Schedule --> */}
      <Schedule />
      {/* <!-- End: Schedule --> */}

      {/* <!-- Start: Footer --> */}
      <Footer />
      {/* <!-- End: Footer --> */}
    </div>
  );
}

export default App;
