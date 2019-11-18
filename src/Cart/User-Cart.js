import React from 'react';


export default function UserCart (props) {
  const summary = Object.keys(props.CartState.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = props.CartState.selected[feature];

    return (
      <>
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {props.CurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
      </>
    );
  });
  return summary
}