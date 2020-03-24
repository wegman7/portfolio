import React from 'react';

function Info() {
    return (
        <div>
            <div className="info-block">
                <div className="info-content" style={{
                    fontSize: '26px',
                    fontWeight: 'bold',
                }}>
                    Joshua Wegman
                </div>
                <div className="info-content">Full Stack Engineer</div>
                <div className="info-content">BS Mathematics | UTK</div>
                <div className="info-content">(865) 951-4402</div>
                <div className="info-content">jwegman@vols.utk.edu</div>
                <div className="info-content"><span><a href="https://github.com/wegman7">https://github.com/wegman7</a></span></div>
            </div>
        </div>
    )
}

export default Info;