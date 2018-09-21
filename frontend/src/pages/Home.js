import React, { Component } from 'react';
import './Home.css';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

class Home extends Component {
    render() {
        return(
            <div>
               <div><NavigationBar /></div> 
                <div className="footer"><Footer /></div>
            </div>
        );
    }
}

export default Home;