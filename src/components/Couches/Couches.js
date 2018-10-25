import React, { Component } from 'react'; 
import axios from 'axios'; 

export default class Couches extends Component {
    constructor() {
        super(); 
        this.state = {
            couches: []
        }; 
    }

    componentDidMount() {
        axios.get('/api/couches').then(response => {
          this.setState({ couches: response.data }); 
        })
      }

    render() {
        const couches = this.state.couches.map(couch => {
            return <div>
                <h1>{couch.name}</h1>
                <img src={couch.image}/>
                <p>Price: {couch.price}</p>
            </div>
        })
        return (
            <div>
                <h1>Welcome to cool couches</h1>
                {couches}
            </div>
        ); 
    }
}