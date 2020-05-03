import React, { Component } from 'react'
import contacts from "../contacts.json"
import AllContacts from "./AllContacts"

class Table extends Component {
    constructor(props) {
        super(props)
        this.sortByName=this.sortByName.bind(this)
        this.sortByPopularity=this.sortByPopularity.bind(this)
        this.addRandomContact=this.addRandomContact.bind(this)
        this.state = {
                contacts:contacts.slice(0,5)
        }
        
    }
    deleteContact(arg){
             let contactsCopy = [...this.state.contacts]
             contactsCopy.splice(arg,1) 
             this.setState({
            contacts:contactsCopy
            })
    }
    sortByName(){
        let arr = [...this.state.contacts]
        let sortArr = arr.sort(function(a, b) {
            var x = a.name; var y = b.name;
            return ((x < y) ? -1 : ((x > y) ? 1 : 0))
        })
        this.setState({contacts:sortArr})
            }
           
    
    sortByPopularity(){
              let arr = [...this.state.contacts]
        let sortArr = arr.sort(function(a, b) {
            var x = a.popularity;  var y = b.popularity;
            return ((x > y) ? -1 : ((x < y) ? 1 : 0))
        });
        this.setState({contacts:sortArr})
           
    }
    
    addRandomContact(){
        let contactsCopy = [...this.state.contacts]
        let theRandomInd = Math.floor(Math.random()*contacts.length)
        let theRandomCont = contacts[theRandomInd]
        contactsCopy.push(theRandomCont)
        this.setState({
            contacts:contactsCopy
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.addRandomContact}>Add Random Contact</button>
                <button onClick={this.sortByName}>Sort By Name</button>
                <button onClick={this.sortByPopularity}>Sort By Popularity</button>
            <table>
                <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
            <tbody>
                {this.state.contacts.map((cont,index)=>{
                    return <AllContacts  key={index} pic={cont.pictureUrl}
                    name={cont.name} popularity={cont.popularity.toFixed(1)}
                    clickToDelete={this.deleteContact.bind(this,index)}
                    />
                })}
            </tbody>
            </table>
            </div>
        )
    }
}

export default Table
