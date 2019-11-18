import React from 'react';
import CustomizeListChoices from './CustomizeListChoices';


export default function CustomizeList(props) {
  return (
    <form className="main__form">
      <h2>Customize your Laptop</h2>
      <CustomizeListChoices
        listOfFeatures={props.featureList} 
        appStateList={props.stateList} 
        changeSelected={ (feature, item) => props.changeState(feature, item) }
        CurrencyFormat= {props.Currency}  />
    </form>
  )
}
