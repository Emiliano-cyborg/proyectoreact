import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarComponent from './NavbarComponent';
import ItemListContainer from './ItemListContainer';
import Productos from './Productos';
import { Switch, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div>
        <NavbarComponent />
        <div style={contentStyle}>
          <h1>SuperMercado Don Gato</h1>
          {/* Configuramos las rutas */}
          <Switch>
            <Route path="/" exact render={() => <ItemListContainer greeting="¡Bienvenido a nuestro sitio de ecommerce!" />} />
            <Route path="/productos" component={Productos} />
            {/* Agrega más rutas según sea necesario */}
          </Switch>
        </div>
      </div>
    </Router>
  );
};

const contentStyle = {
  margin: '20px',
};

export default App;
