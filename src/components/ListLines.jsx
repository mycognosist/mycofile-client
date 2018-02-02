import React from 'react';
import ActiveButton from './ActiveButton';

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
	      <ActiveButton
		active={ line.active }
		line_object_id={ line.id }
	      />
              <button
		className="shadow-4 b-blue bg-base03 green ba b--base03 ph3 pv1"
		onClick={() => console.log('Parent:', line.id, 'Culture ID:', line.culture_id)}>
		Expand
	      </button>
            </div>
          )
        })
      }
    </div>
  )
}

export default ListLines;
