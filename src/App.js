import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import SearchInput, {createFilter} from 'react-search-input';
import axios from 'axios';

const KEYS_TO_FILTERS = ['first_name', 'last_name', 'department', 'job_title', 'city', 'state', 'email']

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      searchTerm: ''
    };
    this.searchUpdated = this.searchUpdated.bind(this);
  }
  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
  componentDidMount() {
    axios.get('/api/employee')
      .then(res => {
        this.setState({ employees: res.data });
        console.log(this.state.employees);
      });
  }

  render() {
    const filteredEmployee = this.state.employees.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Employee Directory
            </h3>
            
          </div>
          <SearchInput className="search-input" onChange={this.searchUpdated}/>
          <div className="panel-body">
            <h4><Link to="/create"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Employee</Link></h4>
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Title</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployee.map(employee =>
                  <tr>
                    <td><img src={employee.avatar} alt="employee picture"/></td>
                    <td><Link to={`/show/${employee._id}`}>{employee.first_name}</Link></td>
                    <td>{employee.last_name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.department}</td>
                    <td>{employee.job_title}</td>
                    <td>{employee.city}, {employee.state}</td>
                  </tr>
                  
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
