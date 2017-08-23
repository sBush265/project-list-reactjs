import React, { Component } from 'react';


class ProjectItem extends Component {
  render() {
    const {title, description, link } = this.props.projects;

    return(
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{link}</span>
      </div>
    );
  }
}


export default ProjectItem;
