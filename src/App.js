import React from 'react';
import NavbarComponent from './NavbarComponent';
import ItemListContainer from './ItemListContainer';
import Productos from './Productos';

const App = () => {
  return (
    <div>
      <NavbarComponent />
      <div style={contentStyle}>
        <h1>SuperMercado Don Gato</h1>
        <ItemListContainer greeting="¡Bienvenido a nuestro sitio de ecommerce!" />
        <div style={productsContainer}>
          <Productos />
          
        </div>
      </div>
    </div>
  );
};

const contentStyle = {
  margin: '20px',
};

const productsContainer = {
  display: 'flex',
  flexWrap: 'wrap',
};

export default App;
