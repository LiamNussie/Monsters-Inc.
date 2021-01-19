import React, { Component } from 'react';
import css from './aquila.css'
import girl from '../aquila/girl.png';

class Aquila extends Component {
    constructor() {
      super();
  
      this.state = {
        user: null,
        loading: true
      };
    }
  
      componentDidMount() {
        fetch('https://hirng-x2021.glitch.me/api')
          .then(res => res.json())
          .then(user => this.setState({ user: user, loading: false }))
      }
  
    render() {
      const loading = this.state.loading
      const user = this.state.user
      return (
        <div className="App">
          {loading ? (<h1>loading...</h1>) : 
            (
            <div key={user.id}>
                <h1>{user.name}</h1>
                <div className="socials">
                  <a href={user.social_media.twitter} className="fab fa-instagram"></a>
                  <a href={user.social_media.twitter} className="fab fa-twitter"></a>
                  <a href={user.social_media.twitter} className="fab fa-snapchat"></a>
                  <a href={user.social_media.twitter} className="fas fa-envelope"></a>
                </div>
                <img src={girl} alt="girl"></img>
            </div> 
            )
    }
          
          
        </div>
      );
    }
  
  }

  export default Aquila;