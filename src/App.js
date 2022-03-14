import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import CountryDetails from './components/CountryDetails';
import Header from './components/Header';

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:country" element={<CountryDetails />} />
    </Routes>
  </div>
);

export default App;

// <Route
// path = '/onboarding/:eventId/:groupId/:userId' exact component = {OnboardingViewController} />

// "today_confirmed": 176409,
// "today_deaths": 7645,
// "today_new_confirmed": 208,
// "today_new_deaths": 2,
// "today_new_open_cases": 206,
// "today_new_recovered": 0,
// "today_open_cases": 86178,
// "today_recovered": 82586,}
