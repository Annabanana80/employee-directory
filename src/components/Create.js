import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {
	constructor(){
		super();
		this.state = {
			first_name: '',
			last_name: '', 
			email: '',
			department: '',
			job_title: '',
			city: '',
			state: '',
			avatar: ''
		};
	}

	onChange = (e) =>{
		switch(e.target.value){
			case 'avatar':
				this.setState({avatar: e.target.files[0]});
				break;
			default:
				this.setState({[e.target.name]: e.target.value});
		}
	}

	onSubmit = (e) =>{
		e.preventDefault();
		const {first_name, last_name, email, department, job_title, city, state, avatar} = this.state;
		axios.post('/api/employee' , { first_name, last_name, email, department, job_title, city, state, avatar })
			.then((result)=>{
				this.props.history.push("/")
		});
	}
	render(){
		const {first_name, last_name, email, department, job_title, city, state, avatar} = this.state;
		return(
			<div className="create">
				<div className="container">
		        <div className="panel panel-default">
		          <div className="panel-heading">
		            <h3 className="panel-title">
		              ADD EMPLOYEE
		            </h3>
		          </div>
		          <div className="panel-body">
		            <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> All Employees</Link></h4>
		            <form accept="image/x-png,image/gif,image/jpeg" enctype="multipart/form-data" onSubmit={this.onSubmit}>
		              <div className="form-group">
		                <label for="first_name">First Name:</label>
		                <input type="text" className="form-control" name="first_name" value={first_name} onChange={this.onChange} placeholder="First Name" />
		              </div>
		              <div className="form-group">
		                <label for="last_name">Last Name:</label>
		                <input type="text" className="form-control" name="last_name" value={last_name} onChange={this.onChange} placeholder="Last Name" />
		              </div>
		              <div className="form-group">
		                <label for="email">Email:</label>
		                <input type="email" className="form-control" name="email" value={email} onChange={this.onChange} placeholder="Email" />
		              </div>
		              <div className="form-group">
		                <label for="department">Department:</label>
		                <input type="text" className="form-control" name="department" value={department} onChange={this.onChange} placeholder="Department" />
		              </div>
		              <div className="form-group">
		                <label for="job_title">Title:</label>
		                <input type="text" className="form-control" name="job_title" value={job_title} onChange={this.onChange} placeholder="Title" />
		              </div>
		              <div className="form-group">
		                <label for="city">City:</label>
		                <input type="text" className="form-control" name="city" value={city} onChange={this.onChange} placeholder="City" />
		              </div>
		              <div className="form-group">
		                <label for="state">State:</label>
		                <input type="text" className="form-control" name="state" value={state} onChange={this.onChange} placeholder="State" />
		              </div>
		              <div className="form-group">
    					<label for="avatar">Avatar</label>
    					<input type="file" className="form-control-file" name="avatar" value={avatar} onChange={this.onChange} />
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
export default Create;