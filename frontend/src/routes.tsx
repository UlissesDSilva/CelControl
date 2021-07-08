import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';

export function Routes() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}