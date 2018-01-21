import React, { Component } from 'react';
import axios from 'axios';

import AddCulture from './components/AddCulture';
import AddLine from './components/AddLine';
import ListCultures from './components/ListCultures';
import ListLines from './components/ListLines';
import TotalCultures from './components/TotalCultures';
import TotalLines from './components/TotalLines';

class App extends Component {
  constructor() {
    super()
    this.state = {
      cultures: [],
      lines: [],
      culture_id: '',
      genus: '',
      species: '',
      strain: '',
      source: '',
      line_culture_id: '',
      container: '',
      dimensions: '',
      substrate: '',
      treatment: '',
      parent_id: '',      
      active: '',
      total_cultures: '',
      total_lines: ''
    }
  }
  componentDidMount() {
    this.getCultures();
    this.getLines();
    this.getCounts();
  }
  getCultures() {
    axios.get(`${process.env.REACT_APP_API_SERVICE_URL}/api/v1/cultures`)
    .then((res) => {
      this.setState({
        cultures: res.data.data.cultures
      });
    })
    .catch((err) => { console.log(err); })
  }
  getLines() {
    axios.get(`${process.env.REACT_APP_API_SERVICE_URL}/api/v1/lines`)
    .then((res) => {
      this.setState({
        lines: res.data.data.lines
      });
    })
    .catch((err) => { console.log(err); })
  }
  getCounts() {
    axios.get(`${process.env.REACT_APP_API_SERVICE_URL}/api/v1/counts`)
    .then((res) => {
      this.setState({
        total_cultures: res.data.data.total_cultures,
	total_lines: res.data.data.total_lines
      });
    })
    .catch((err) => { console.log(err); })
  }
  addCulture(event) {
    event.preventDefault();
    const data = {
      unique_id: this.state.culture_id,
      genus: this.state.genus,
      species: this.state.species,
      strain: this.state.strain,
      source: this.state.source
    }
    axios.post(`${process.env.REACT_APP_API_SERVICE_URL}/api/v1/cultures`, data)
    .then((res) => { 
      this.getCultures();
      this.setState({
        culture_id: '',
        genus: '',
        species: '',
        strain: '',
        source: ''
      });
    })
    .catch((err) => { console.log(err); })
  }
  addLine(event) {
    event.preventDefault();
    const data = {
      culture_id: this.state.line_culture_id,
      container: this.state.container,
      dimensions: this.state.dimensions,
      substrate: this.state.substrate,
      treatment: this.state.treatment,
      parent_id: this.state.parent_id
    }
    axios.post(`${process.env.REACT_APP_API_SERVICE_URL}/api/v1/lines`, data)
    .then((res) => {
      this.getLines();
      this.setState({
        line_culture_id: '',
        container: '',
	dimensions: '',
        substrate: '',
	treatment: '',
	parent_id: '',
	active: ''
      });
    })
    .catch((err) => { console.log(err); })
  }
  handleChange(event) {
    const obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }
  render() {
    return (
      <div className="avenir bg-base03 tc fl w-100">
        <h1 className="f2 yellow">mycofile</h1>
	<br/>
        <div className="bg-base03 fl w-100">
          <div className="bg-base03 fl w-25">
	    <div className="bg-base03 tc fl w-80 ph4 pv4">
	      <AddCulture
	        culture_id={this.state.culture_id}
                genus={this.state.genus}
	        species={this.state.species}
	        strain={this.state.strain}
	        source={this.state.source}
	        handleChange={this.handleChange.bind(this)}
	        addCulture={this.addCulture.bind(this)}/>
            </div>
	  </div>
	  <div className="bg-base03 fl w-50 pv4">
	    <ListCultures
	      cultures={this.state.cultures}
	    />
	  </div>
	  <div className="bg-base03 green f1-l fl w-25">
	    <TotalCultures
	      total_cultures={this.state.total_cultures}
	    />
	  </div>
	</div>
	<div className="bg-base03 fl w-100">
	  <div className="bg-base03 fl w-25">
            <div className="bg-base03 tc fl w-80 ph4 pv4">
              <AddLine
	        line_culture_id={this.state.line_culture_id}
	        container={this.state.container}
	        dimensions={this.state.dimensions}
	        substrate={this.state.substrate}
	        treatment={this.state.treatment}
	        parent_id={this.state.parent_id}
	        handleChange={this.handleChange.bind(this)}
	        addLine={this.addLine.bind(this)}/>
	    </div>
	  </div>
	  <div className="bg-base03 base01 fl w-50 pv4">
            <ListLines
	      lines={this.state.lines}
	    />
	  </div>
	  <div className="bg-base03 magenta tc fl w-25 ph4 pv4">
	    <TotalLines
	      total_lines={this.state.total_lines}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App
