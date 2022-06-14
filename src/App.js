import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './container/Home';
import Departments from './container/Departments';
import Doctors from './container/Doctors';
import About from './container/About';
import Contact from './container/Contact';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Login from './container/Login';
import Appointment from './container/Appointment';


function App() {
  return (
    <>
      <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Departments' exact component={Departments} />
          <Route path='/Doctors' exact component={Doctors} />
          <Route path='/About' exact component={About} />
          <Route path='/Contact' exact component={Contact} />
          <Route path='/Login' exact component={Login} />
          <Route path='/Appointment' exact component={Appointment} />
        </Switch>
      <Footer />
    </>
  );
}

export default App;
