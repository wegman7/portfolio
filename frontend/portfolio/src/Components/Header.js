import React from 'react';

function Header() {
    return (
        <div className="container">
            <img className="header-img" src="https://images.unsplash.com/photo-1503642551022-c011aafb3c88?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" width="800px" height="650px" alt="" />
            <div className="centered name">Joshua Wegman</div>
            <div className="centered title">Full Stack Engineer</div>
            <a className="centered link" href="#skills">See skills and projects</a>
        </div>
    )
}

export default Header;