import React from 'react';

const AddLine = (props) => {
  return (
    <form onSubmit={(event) => props.addLine(event)}>
      <fieldset id="add_line" className="b--solid br3 b--dark-blue">
	  <br/>
	  <div>
	    <input
	      id="line_culture_id"
	      name="line_culture_id"
	      className="bg-base03 base01 bn ph1 pv0 mv2"
	      type="text"
	      placeholder="Culture ID"
	      value={props.line_culture_id}
	      onChange={props.handleChange}
	    />
	    <input
	      id="parent_id"
	      name="parent_id"
	      className="bg-base03 base01 bn ph1 pv0 mv2"
	      type="text"
	      placeholder="Parent ID"
	      value={props.parent_id}
	      onChange={props.handleChange}
	    />
            <input
	      id="container"
	      name="container"
	      className="bg-base03 base01 bn ph1 pv0 mv2"
	      type="text"
	      placeholder="Container"
	      value={props.container}
	      onChange={props.handleChange}
	    />
	    <input
	      id="dimensions"
	      name="dimensions"
	      className="bg-base03 base01 bn ph1 pv0 mv2"
	      type="text"
	      placeholder="Dimensions"
	      value={props.dimensions}
	      onChange={props.handleChange}
	    />
<input
	      id="substrate"
	      name="substrate"
	      className="bg-base03 base01 bn ph1 pv0 mv2"
	      type="text"
	      placeholder="Substrate"
	      value={props.substrate}
	      onChange={props.handleChange}
	    />
	    <input
	      id="treatment"
	      name="treatment"
	      className="bg-base03 base01 bn ph1 pv0 mv2"
	      type="text"
	      placeholder="Treatment"
	      value={props.treatment}
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

export default AddLine;
