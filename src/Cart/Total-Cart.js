import React from 'react';

export default function TotalCart(props){
  const total = Object.keys(props.TotalState.selected).reduce(
    (acc, curr) => acc + props.TotalState.selected[curr].cost,
    0
  );
  return (
    <div className="summary__total">
      <div className="summary__total__label">Total</div>
      <div className="summary__total__value">
        {props.TotalCurrency.format(total)}
      </div>
    </div>
  )
}