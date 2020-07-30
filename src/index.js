import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video/index';
import CadastroCategoria from './pages/cadastro/categoria/index'

//montaqr uma página 404 e colocar aqui
const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
    <BrowserRouter>
    
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/cadastro/video" component={CadastroVideo}/>
        <Route path="/cadastro/categoria" component={CadastroCategoria}/>
        <Route component={Pagina404}/>
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);
