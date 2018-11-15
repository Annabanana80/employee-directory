import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

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

  onChange = (e) => {
    const state = this.state.employee
    state[e.target.name] = e.target.value;
    this.setState({employee:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const {first_name, last_name, email, department, job_title, city, state, avatar} = this.state.employee;

    axios.put('/api/employee/'+this.props.match.params.id, { first_name, last_name, email, department, job_title, city, state, avatar })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
return(
      <div className="edit">
        <div className="container">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                  Edit Employee
                </h3>
              </div>
              <div className="panel-body">
                <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> All Employees</Link></h4>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label for="first_name">First Name:</label>
                    <input type="text" className="form-control" name="first_name" value={this.state.first_name} onChange={this.onChange} placeholder="First Name" />
                  </div>
                  <div className="form-group">
                    <label for="last_name">Last Name:</label>
                    <input type="text" className="form-control" name="last_name" value={this.state.last_name} onChange={this.onChange} placeholder="Last Name" />
                  </div>
                  <div className="form-group">
                    <label for="email">Email:</label>
                    <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.onChange} placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <label for="department">Department:</label>
                    <input type="text" className="form-control" name="department" value={this.state.department} onChange={this.onChange} placeholder="Department" />
                  </div>
                  <div className="form-group">
                    <label for="job_title">Title:</label>
                    <input type="text" className="form-control" name="job_title" value={this.state.job_title} onChange={this.onChange} placeholder="Title" />
                  </div>
                  <div className="form-group">
                    <label for="city">City:</label>
                    <input type="text" className="form-control" name="city" value={this.state.city} onChange={this.onChange} placeholder="City" />
                  </div>
                  <div className="form-group">
                    <label for="state">State:</label>
                    <input type="text" className="form-control" name="state" value={this.state.state} onChange={this.onChange} placeholder="State" />
                  </div>
                  <div className="form-group">
              <label for="avatar">Avatar</label>
              <input type="file" className="form-control-file" name="avatar" value={this.state.avatar} onChange={this.onChange} />
              </div>
                  <button type="submit" className="btn btn-default">Submit</button>
                </form>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Edit;