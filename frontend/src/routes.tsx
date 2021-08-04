import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { LoginFacilitador } from './pages/Login';
import { Cadastro } from './pages/Cadastro/'

export function Routes() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/loginFacilitador" exact component={LoginFacilitador}/>
          <Route path="/cadastroInCelula" exact component={Cadastro}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}