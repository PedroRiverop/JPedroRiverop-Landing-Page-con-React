import React from 'react';
//import PropTypes from "prop-types";
const Card = (props)=>{
    return (
        <div className="card">
            <img src={props.imgUrl} className="card-img-top" alt="..."/>
             <div className="card-body">
                <h5 className="card-title">{props.postTitle}</h5>
                <p className="card-text" style={{height: '130px'}}>{props.postDescription}</p>
                <a href="#" className="btn btn-primary">{props.postButton}</a>
            </div>
        </div>
    );
};
Card.defaultProps = {imgUrl:"https://picsum.photos/500/325?random=0", postTitle: "Card Title", postDescription: "This is the description of your post.", postButton: "Find Out More!"}
export default Card;