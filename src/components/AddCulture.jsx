import React from 'react';

const AddCulture = (props) => {
  return (
    <form onSubmit={(event) => props.addCulture(event)}>
      <fieldset id="add_culture" className="b--solid br3 b--dark-blue">
	  <br/>
	  <div>
	    <input
	      id="culture_id"
	      name="culture_id"
	      className="bg-base03 base01 bn ph1 pv0 mv2"
	      type="text"
	      placeholder="Culture ID"
	      value={props.culture_id}
	      onChange={props.handleChange}
	    />
	    <br/>
	    <input
	      id="genus"
	      name="genus"
	      className="bg-base03 base01 bn ph1 pv0 mv2"
	      type="text"
	      placeholder="Genus"
	      value={props.genus}
	      onChange={props.handleChange}
	    />
	    <br/>
            <input
	      id="species"
	      name="species"
	      className="bg-base03 base01 bn ph1 pv0 mv2"
	      type="text"
	      placeholder="Species"
	      value={props.species}
	      onChange={props.handleChange}
	    />
	    <br/>
            <input
	      id="strain"
	      name="strain"
	      className="bg-base03 base01 bn ph1 pv0 mv2"
	      type="text"
	      placeholder="Strain"
	      value={props.strain}
	      onChange={props.handleChange}
	    />
            <br/>
	    <input
	      id="source"
	      name="source"
	      className="bg-base03 base01 bn ph1 pv0 mv2"
	      type="text"
	      placeholder="Source"
	      value={props.source}
	      onChange={props.handleChange}
	    />
	  </div>
	  <br/>
	<input
	  type="submit"
	  value="Add"
	  className="shadow-4 b-blue bg-base03 green ba b--base03 ph3 pv1"
	/>
      </fieldset>
    </form>
  )
}

export default AddCulture;
