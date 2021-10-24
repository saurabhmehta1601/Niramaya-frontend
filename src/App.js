import {HomePage,LoginPage , RegisterPage ,ProfilePage } from "./pages/exports"
import {Header,Footer} from "./components/exports"

import {Switch,Route,BrowserRouter} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Switch>
        <Route exact path="/" component={HomePage} ></Route>
        <Route path="/login" component={LoginPage} ></Route>
        <Route path="/register" component={RegisterPage}></Route>
        <Route path="/register" component={RegisterPage}></Route>
        <Route path="/profile/:id" component={ProfilePage}></Route>
      </Switch>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
