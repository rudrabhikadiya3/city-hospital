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
import BookAppointment from './container/Appointment/BookAppointment';
import ListAppointment from './container/Appointment/ListAppointment';


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
          <Route path='/book_appointment' exact component={BookAppointment} />
          <Route path='/list_appointment' exact component={ListAppointment} />
        </Switch>
      <Footer />
    </>
  );
}

export default App;
