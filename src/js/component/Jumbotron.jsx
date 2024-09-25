import React from 'react';
import PropTypes from "prop-types";
const Jumbotron = (props) => {
    return (
        <div className='container-fluid text-start bg-dark bg-opacity-10 mt-4 pb-4 px-5 rounded'>
            <div className='py-5'>
                <h1 className="title" style={{fontSize: '350%'}}>{props.title}</h1>
                <p className='card-text'>{props.description}</p>
                <button type="button" className="btn btn-primary">{props.button}</button>
            </div>
            
        </div>
    )
}
Jumbotron.defaultProps = {title: "Title for the Blog", description: "The description of all your blog here...", button: "Call to action!"}

export default Jumbotron;