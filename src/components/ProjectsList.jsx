import React, { Component } from 'react';
import { connect } from 'react-redux';
import { projectsRef } from '../firebase';
import { setProjects } from '../actions';

class ProjectsList extends Component {

  componentDidMount() {
    projectsRef.on('value', snap => {
      let projects = [];
      snap.forEach(project => {
        const { title, description, link } = project.val();
        const serverKey = project.key;
        //console.log('serverKey', serverKey);
        projects.push({title, description, link, serverKey});
      })
      console.log('projects', projects);
      this.props.setProjects(projects);
      console.log('this.props', this.props);
    })
  }

  render() {
    return(
      <div>
        {/* 
          {
            this.props.projects.map((project, index) => {
              const{ title, description, link } = project;
              return(
                <div key={index} >
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <span>{link}</span>
                </div>
              )
            })
          }
        */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state', state);
  const { projects } = state;
  return {
    projects
  }
}

export default connect(mapStateToProps, { setProjects })(ProjectsList);
