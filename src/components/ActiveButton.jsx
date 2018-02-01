import React from 'react';
import axios from 'axios';

class ActiveButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveButton: props.active,
      lineObjectId: props.line_object_id
    };
    console.log(props.active);
    console.log(props.line_object_id);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isActiveButton: !prevState.isActiveButton
    }));
    this.updateLineObject();
  }
  updateLineObject() {
    // This seems backwards to me
    // I'm not sure why != works
    const data = {
      active: !this.state.isActiveButton
    }
    axios.put(`${process.env.REACT_APP_API_SERVICE_URL}/api/v1/lines/${ this.state.lineObjectId }`, data)
    .then((res) => {
      console.log(data.active);
    })
    .catch((err) => { console.log(err); })
  }
  render() {
    return (
      <button
	className="shadow-4 b-blue bg-base03 green ba b--base03 ph3 pv1"
	onClick={this.handleClick}>
	{this.state.isActiveButton ? 'Active' : 'Retired'}
      </button>
    );
  }
}

export default ActiveButton;
