import HomePage from "./pages/Home"
import LoginPage from "./pages/Login"
import RegisterPage from "./pages/Register"
import Header from "./components/Header"
import Footer from "./components/Footer"
import {Switch,Route,BrowserRouter} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Switch>
        <Route exact path="/" component={HomePage} ></Route>
        <Route path="/login" component={LoginPage} ></Route>
        <Route path="/register" component={RegisterPage}></Route>
      </Switch>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
