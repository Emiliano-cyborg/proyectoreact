import React from 'react';

const ItemListContainer = ({ greeting }) => {
  const containerStyle = {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <h2>{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;
