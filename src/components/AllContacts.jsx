import React, { Component } from 'react'

class AllContacts extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
                <tr>
                    <td>
                    <img src={this.props.pic} alt={this.props.name}/>
                    </td>
                    <td>
                    {this.props.name}
                    </td>
                    <td>
                    {this.props.popularity}
                    </td>
                    {this.props.id}
                    <button onClick={this.props.clickToDelete}>Delete</button>
                </tr> 
        )
    }
}

export default AllContacts
