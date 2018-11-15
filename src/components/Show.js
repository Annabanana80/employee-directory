import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      employee: {}
    };
  }

  componentDidMount() {
    axios.get('/api/employee/'+this.props.match.params.id)
      .then(res => {
        this.setState({ employee: res.data });
        console.log(this.state.employee);
      });
  }

  delete(id){
    console.log(id);
    axios.delete('/api/employee/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              {this.state.employee.first_name}{this.state.employee.last_name}
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Employee List</Link></h4>
            <dl>
              <dt>Picture</dt>
              <dd><img src={this.state.employee.avatar} alt={this.state.employee.last_name} /></dd>
              <dt>Name:</dt>
              <dd>{this.state.employee.first_name} {this.state.employee.last_name}</dd>
              <dt>Email:</dt>
              <dd>{this.state.employee.email}</dd>
              <dt>Department:</dt>
              <dd>{this.state.employee.department}</dd>
              <dt>Title:</dt>
              <dd>{this.state.employee.job_title}</dd>
              <dt>Location:</dt>
              <dd>{this.state.employee.city}, {this.state.employee.state}</dd>
            </dl>
            <Link to={`/edit/${this.state.employee._id}`} className="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.employee._id)} className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;