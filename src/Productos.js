import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';


const Productos = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleBuy = () => {
    // Lógica para agregar el producto al carrito de compras o realizar la acción de compra
    alert(`Producto comprado: Cantidad ${quantity}`);
  };

  const handleRemove = () => {
    // Lógica para eliminar el producto del carrito de compras o la lista de productos
    alert('Producto eliminado');
  };

  return (
    <div>
  <Card style={{ width: '18rem', marginBottom: '20px' }}>
    <Card.Img variant="top" src="https://alberdisa.vteximg.com.br/arquivos/ids/174063-600-600/Gaseosa-Coca-Cola--x-3-Lt.png?v=638146573800700000" />
    <Card.Body>
      <Card.Title>Nombre del producto 1</Card.Title>
      <Card.Text>Descripción del producto 1.</Card.Text>
      <Button variant="secondary" onClick={decreaseQuantity}>
            -
          </Button>
          <span style={{ margin: '0 10px' }}>{quantity}</span>
          <Button variant="secondary" onClick={increaseQuantity}>
            +
          </Button>
          <Button variant="primary" onClick={handleBuy} style={{ marginRight: '10px' }}>
          Comprar
        </Button>
        <Button variant="danger" onClick={handleRemove}>
          Eliminar
        </Button>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem', marginBottom: '20px' }}>
    <Card.Img variant="top" src="https://http2.mlstatic.com/D_NQ_NP_876717-MLA54226967201_032023-O.webp" />
    <Card.Body>
      <Card.Title>Nombre del producto 2</Card.Title>
      <Card.Text>Descripción del producto 2.</Card.Text>
      <Button variant="secondary" onClick={decreaseQuantity}>
            -
          </Button>
          <span style={{ margin: '0 10px' }}>{quantity}</span>
          <Button variant="secondary" onClick={increaseQuantity}>
            +
          </Button>
          <Button variant="primary" onClick={handleBuy} style={{ marginRight: '10px' }}>
          Comprar
        </Button>
        <Button variant="danger" onClick={handleRemove}>
          Eliminar
        </Button>
    </Card.Body>
  </Card>

  {/* Puedes agregar más elementos Card según la cantidad de imágenes de productos que desees mostrar */}
</div>

  );
};

export default Productos;
