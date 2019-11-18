import React from 'react';
import slugify from 'slugify';

export default function CustomizeListChoices(props) {
  const features = Object.keys(props.listOfFeatures).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const options = props.listOfFeatures[feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(feature)}
            checked={item.name === props.appStateList.selected[feature].name}
            onChange={e => props.changeSelected(feature, item)}
          />
          <label htmlFor={itemHash} className="feature__label">
            {item.name} {props.CurrencyFormat.format(item.cost)}
          </label> 
        </div>
      );
    });

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  });
  return features
}