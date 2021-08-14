import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { LoginFacilitador, LoginPacce } from './pages/Login';
import { CadastroAluno, CadastroCelula } from './pages/Cadastro';
import { Feedback } from './pages/Feedback';
import { HomeFacilitador } from './pages/HomeFacilitador'
import { FrequenciaAluno } from './pages/Frequencia'

export function Routes() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/loginFacilitador" exact component={LoginFacilitador}/>
          <Route path="/loginPacce" exact component={LoginPacce}/>
          <Route path="/cadastroAluno" exact component={CadastroAluno}/>
          <Route path="/cadastroCelula" exact component={CadastroCelula}/>
          <Route path="/feedback/:id" exact component={Feedback} />
          <Route path="/frequencia" exact component={FrequenciaAluno} />
          <Route path="/homeFacilitador" exact component={HomeFacilitador} />
        </Switch>
      </BrowserRouter>
    </>
  );
}