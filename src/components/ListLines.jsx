import React from 'react';

// IF statement to determine text color

const ListLines = (props) => {
  return (
    <div className="fl w-100">
      {
        props.lines.map((line) => {
          return (
            <div key={ line.id } className="fl fl w-20">
              <p><strong className="green f4">[ { line.container } ]</strong></p>
              <p>{ line.culture_id }</p>
	      <button className="shadow-4 b-blue bg-base03 green ba b--base03 ph3 pv1">Active</button>
              <button className="shadow-4 b-blue bg-base03 green ba b--base03 ph3 pv1">Expand</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default ListLines;
