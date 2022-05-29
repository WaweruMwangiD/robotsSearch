import React, { Component } from 'react'
import CardList from './CardList'
import { robots } from './robots'
import SearchBox from './SearchBox'

export default class App extends Component {
    constructor (){
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    onSearchChange = (event) => {

      this.setState({
        searchfield: event.target.value
      })  
    }
   

  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div>
        <h2 className='f1 tc'>RoboFriends</h2>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots}/>  

      </div>
    )
  }
}

