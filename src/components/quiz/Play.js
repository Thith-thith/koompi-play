import React from 'react';
import { Helmet } from 'react-helmet';
// import { NavBar } from '/components/navbar';

const TITLE = "Quiz App | Play";

class Play extends React.Component {
    render() { 
        return ( 
            <React.Fragment>
                {/* <NavBar/> */}
                <Helmet><title>{TITLE}</title></Helmet>
                <div><h2>Hello world</h2></div>
            </React.Fragment>
         );
    }
}
 
export default Play;
 
