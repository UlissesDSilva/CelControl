import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { LoginFacilitador, LoginPacce } from './pages/Login';
import { CadastroAluno, CadastroCelula } from './pages/Cadastro';
import { Feedback } from './pages/Feedback';
import { ListFeedback } from './pages/Feedback/listFeedback'
import { HomeFacilitador } from './pages/HomeFacilitador'
import { HomeAdm } from './pages/HomeAdm'
import { ListCel } from './pages/Cadastro/listCelula'
import { FrequenciaAluno } from './pages/Frequencia'
import { MenuSider } from './components/Menu';
import { useState } from 'react';

export function Routes() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  };

  return (
    <>
      <BrowserRouter>
        <Header collapsed={collapsed} toggleCollapsed={toggleCollapsed}/>
        <MenuSider collapsed={collapsed}/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/loginFacilitador" component={LoginFacilitador}/>
          <Route path="/loginPacce" component={LoginPacce}/>
          <Route path="/cadastroAluno/:id" exact component={CadastroAluno}/>
          <Route path="/cadastroCelula" exact component={CadastroCelula}/>
          <Route path="/feedback/:id" component={Feedback} />
          <Route path="/listFeedback/:id" component={ListFeedback}/>
          <Route path="/listCelulas"component={ListCel}/>
          <Route path="/frequencia/:idCelula" component={FrequenciaAluno} />
          <Route path="/homeFacilitador/:idCelula" component={HomeFacilitador} />
          <Route path="/homeAdm" component={HomeAdm}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}