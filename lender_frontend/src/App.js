import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Login from './pages/Login'
import Profile from './pages/Profile'
import Admin from './pages/Admin'
import Client from './pages/Client'
import Password from './pages/Password'
import Dashboard from './pages/Dashboard'
import DashboardSuccess from './pages/DashboardSuccess'
import BankinfoLogin from './pages/BankinfoLogin'
import BaninfoMainpage from './pages/BankinfoMainpage'
import ClientBasicInfoUpdate from './pages/ClientBasicInfoUpdate'
import Mainpage from './pages/Mainpage'
import { BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path = "/" exact ={true}>
            <Mainpage />
          </Route>
          <Route path = "/bankinfomainpage" exact ={true}>
            <BaninfoMainpage />
          </Route>
          <Route path = "/login"><Header /><Login /></Route>
          <Route path = "/bankinfologin"><Header /><BankinfoLogin /></Route>
          <Route path = "/profile/:id?/:clientId?"><Header /><Profile /></Route>
          <Route path = "/admin"><Header /><Admin /></Route>
          <Route path = "/client/:id?"><Header /><Client /></Route>
          <Route path = "/clientbasicinfoupdate"><Header /><ClientBasicInfoUpdate/></Route>
          <Route path = "/password/:clientId?"><Header /><Password /></Route>
          <Route path = "/dashboard"><Header /><Dashboard /></Route>
          <Route path = "/dashboardsuccess/:zumId?/:clientEmail?"><Header /><DashboardSuccess /></Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
