import React from 'react';

function TotalCultures(props) {
  return (
    <div className="fl w-100">
      <div key={ props.total_cultures }>
        <strong className="f1">{ props.total_cultures }</strong>
      </div>
    </div>
  )
}

export default TotalCultures;
