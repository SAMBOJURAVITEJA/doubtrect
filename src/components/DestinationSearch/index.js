import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {input1: ''}

  changing = event => {
    this.setState({input1: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {input1} = this.state
    const filtering = destinationsList.filter(each =>
      each.name.toLowerCase().includes(input1),
    )

    return (
      <div className="bg-container">
        <h1>Destination Search</h1>
        <input type="search" onChange={this.changing} />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
          className="searchIcon"
        />
        <div className="sub-container">
          <ul className="list-container">
            {filtering.map(each => (
              <DestinationItem key={each.id} each={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
