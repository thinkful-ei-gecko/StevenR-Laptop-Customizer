import React from 'react';
import UserCart from './User-Cart';
import TotalCart from './Total-Cart'

export default function MainCart (props) {

  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      <UserCart 
        CartState={props.CartState}
        CurrencyFormat={props.CurrencyFormat}
      />
    <TotalCart
      TotalState={props.TotalState}
      TotalCurrency={props.TotalCurrency}
    />
    </section>
  )
}