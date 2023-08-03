import React from 'react';
import { BiBasket } from 'react-icons/bi';


const CartWidget = () => {
  const cartItemsCount = 5; 

  return (
    <div>
      <BiBasket size={80} />
      {cartItemsCount > 0 && (
        <span style={styles.notification}><i class="bi bi-cart"></i>{cartItemsCount}</span>
      )}
    </div>
  );
};

const styles = {
  notification: {
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '20%',
    padding: '5px 8px',
    fontSize: '20px',
    position: 'center',
    top: '0',
    right: '0',
    transform: 'translate(25%, -25%)',
  },
};

export default CartWidget;