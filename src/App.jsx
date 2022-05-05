import './App.scss';
import Index from './views/Index/Index';
import SignIn from './views/Signin/SignIn';
import User from './views/User/User'
import Footer from './components/footer/Footer';
import { Routes , Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/profile' element={<User />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;