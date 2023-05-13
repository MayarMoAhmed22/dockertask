import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { Component } from 'react'

const api = axios.create({
  baseURL: 'http://localhost:5000/persons/'
})

class App extends Component {

  state = {
    person: []
  }

  constructor(){
    super();
    // this.getPersons();
    
  }

  getPersons = async () => {
    try {
      let data = await api.get('/').then(({data})=>
      data);
      this.setState({ person: data })
    }
    catch(err){
      console.log(err);
       }
    
    }
  

    createPerson = async (event) => {
      event.preventDefault(); // prevent page reload
      let name = document.getElementById('in');
    
      let res = await api
        .post('/', {"name":`${name.value}`,"age":71,"gender":"Male","email":"Herman.Okuneva84@yahoo.com","id":"d89be41a-4b0d-4b45-ac07-ab59becdf1f0"})
        .catch(err => console.log(err))
    
      console.log(res);
      // this.getPersons();
    }

  deletePerson = async(id) => {
    let data = await api.delete(`/${id}`);
    
    this.getPersons();
  }

  getPersonById = async (id) => {
    try {
      let data = await api.get(`/${id}`).then(({data}) => data);
      console.log(data);
      // update the state with the person data
      this.setState({ person: [data] })
    } catch(err) {
      console.log(err);
    }
  }

  updateperson = async (id, val) => {
    let data = await api
      .put(`/${id}`, {"name": val})
      .catch(err=>console.log(err))
    // this.getPersons();
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.createPerson}>create person</button>
          <form onSubmit={this.createPerson} >
            <input type='text' id='in'></input>
            <input type='submit'></input>
          </form>

          <form onSubmit={(event) => {
              event.preventDefault();
              let id = document.getElementById('personId').value;
              this.getPersonById(id);
              }}>
            <label>Enter person id:</label>
            <input type='text' id='personId'></input>
            <input type='submit' value='Get person'></input>
          </form>

          <form onSubmit={(event) => {
              event.preventDefault();
              let id = document.getElementById('personId').value;
              let name = document.getElementById('name').value;
              this.up(id, `${name}`)
              }}>
            <label>Enter person id:</label>
            <input type='text' id='updateId'></input>
            <input type='text' id='name'></input>
            <input type='submit' value='update person'></input>
          </form>
          
          <button onClick={this.getPersons}>get all</button>
          {this.state.person.map( p => <h2 key={p.id}>{  p.name  }<button onClick={()=>this.deletePerson(p.id)}>delete</button></h2> )}

        </header>
      </div>
    );
  }
}

export default App;