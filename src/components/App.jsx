import React, { Component } from 'react';
import { connect } from 'react-redux';


import ProjectsList from './ProjectsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <div>
          <h1>My Projects</h1>
          <ProjectsList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{};
}

export default connect(mapStateToProps, null) (App);
