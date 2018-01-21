import React from 'react';

const ListCultures = (props) => {
  return (
    <div className="fl w-100">
      {
	props.cultures.map((culture) => {
          return (
	    <div key={ culture.id } className="silver fl w-25">
              <strong className="orange f3">{ culture.culture_id }</strong>
              <br/><br/>
	      <em className="silver">{ culture.genus } { culture.species }</em>
	      <br/>
	      <strong>{ culture.strain }</strong>
	      <br/>
	      { culture.source }
	      <br/>
            </div>
          )
        })
      }
    </div>
  )
}

export default ListCultures;
