import React from 'react';

function TotalLines(props) {
  return (
    <div className="fl w-100">
      <div key={ props.total_lines }>
        <strong className="f1">{ props.total_lines }</strong>
      </div>
    </div>
  )
}

export default TotalLines;
