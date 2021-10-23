import HomePage from "./pages/Home"
import LoginPage from "./pages/Login"
import SignupPage from "./pages/Signup"
import {Switch,Route,BrowserRouter} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} ></Route>
        <Route path="/login" component={LoginPage} ></Route>
        <Route path="/signup" component={SignupPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
