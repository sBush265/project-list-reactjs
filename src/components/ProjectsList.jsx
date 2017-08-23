import React, { Component } from 'react';
import { connect } from 'react-redux';
import { projectsRef } from '../firebase';
import { setProjects } from '../actions';
import ProjectItem from './ProjectItem';

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
    })
  }


  render() {
    return(
      <div>
        {
          this.props.projects.map((project, index) => {
            return(
              <ProjectItem key={index} project={project}/>
            )
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state
  }
}

export default connect(mapStateToProps, { setProjects })(ProjectsList);
