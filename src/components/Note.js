import React, {Component} from 'react';
import '../css/note.css';
import { ReactPropTypes } from 'prop-types';
 
class Note extends Component {
  constructor() {
    super();
  }
 
  render() {
    return (
      <div className="col-sm-6">
        <div className="card card-view">
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p>{this.props.title}</p>
            <button className="btn btn-info">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}
	
Note.defaultProps = {
    title: "A cool title",
    body: "A cool body",
  };

export default Note;