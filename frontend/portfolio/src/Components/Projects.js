import React from 'react';
import { Row, Col} from 'antd';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

function Projects() {
    return (
        <div>
            <div id="skills" className="section-title">Projects</div>
            <div 
                className="section-block"
                style={{
                    background: 'url(https://goldwallpapers.com/uploads/posts/city-lights-background/city_lights_background_002.jpg)',
                    backgroundSize: '1500px 700px'
                    }}>
                <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row grid-item" span={6}>
                        <Flippy
                            flipOnHover={true}
                            flipOnClick={false}
                            flipDirection="horizontal"
                            style={{ width: '100%', height: '100%' }}
                        >
                            <FrontSide
                                style={{
                                    backgroundColor: '#41669d',
                                }}
                            >
                                <div 
                                    className="grid-item-title"
                                    style={{
                                        backgroundColor: 'red',
                                        marginBottom: '10px'
                                    }}
                                >
                                    Charitable Time Donor App
                                </div>
                                <div className="grid-item-content">React | Redux</div>
                                <div className="grid-item-content">Django Rest Framework</div>
                                <div className="grid-item-content">Django Rest Auth</div>
                                <div className="grid-item-content">SQLite</div>
                                <div className="grid-item-content">Linux | Bash | Apache2</div>
                            </FrontSide>
                            <BackSide
                                style={{ 
                                    backgroundColor: '#175852',
                                    width: '115%', 
                                    height: '115%'
                                }}>
                                <ul style={{
                                    textAlign: 'left',
                                }}>
                                    <li className="grid-item-content">Web app that connects experts willing to donate time with those in need of help</li>
                                    <li className="grid-item-content">Includes user authentication, ability to create and update profile, and view other profiles</li>
                                    <li className="grid-item-content">Currently deployed at <span><a href="http://23.239.16.166">http://23.239.16.166</a></span></li>
                                    <li className="grid-item-content"><span><a href="https://github.com/wegman7/nonprofit">Source code</a></span></li>
                                </ul>
                            </BackSide>
                        </Flippy>
                    </Col>
                    <Col className="gutter-row grid-item" span={6}>
                        <Flippy
                            flipOnHover={true}
                            flipOnClick={false}
                            flipDirection="horizontal"
                            style={{ width: '100%', height: '100%' }}
                        >
                            <FrontSide
                                style={{
                                    backgroundColor: '#41669d',
                                }}
                            >
                                <div
                                    className="grid-item-title"
                                    style={{
                                        backgroundColor: 'green',
                                        marginBottom: '10px'
                                    }}
                                >
                                    Grocery List App
                                </div>
                                <div className="grid-item-content">HTML5</div>
                                <div className="grid-item-content">CSS3</div>
                                <div className="grid-item-content">Javascript</div>
                                <div className="grid-item-content">Python | Django</div>
                                <div className="grid-item-content">SQLite</div>
                                <div className="grid-item-content">Linux | Bash | Apache2</div>
                            </FrontSide>
                            <BackSide
                                style={{ 
                                    backgroundColor: '#175852',
                                    width: '115%', 
                                    height: '115%'
                                }}>
                                <ul style={{
                                    textAlign: 'left',
                                }}>
                                    <li className="grid-item-content">Allows users create grocery lists and share them with friends</li>
                                    <li className="grid-item-content">Includes user authentication, and CRUD with grocery lists</li>
                                    <li className="grid-item-content">Currently deployed at <span><a href="https://www.joshwegman.com">joshwegman.com</a></span></li>
                                    <li className="grid-item-content"><span><a href="https://github.com/wegman7/grocery_list">Source code</a></span></li>
                                </ul>
                            </BackSide>
                        </Flippy>
                    </Col>
                    <Col className="gutter-row grid-item" span={6}>
                        <Flippy
                            flipOnHover={true}
                            flipOnClick={false}
                            flipDirection="horizontal"
                            style={{ width: '100%', height: '100%' }}
                        >
                            <FrontSide
                                style={{
                                    backgroundColor: '#41669d',
                                }}
                            >
                                <div
                                    className="grid-item-title"
                                    style={{
                                        backgroundColor: 'yellow',
                                        marginBottom: '10px'
                                    }}
                                >
                                    Random Meme Generator
                                </div>
                                <div className="grid-item-content">React</div>
                                <div className="grid-item-content">CSS3</div>
                                <div className="grid-item-content">Axios</div>
                            </FrontSide>
                            <BackSide
                                style={{ 
                                    backgroundColor: '#175852',
                                    width: '115%', 
                                    height: '115%'
                                }}>
                                <ul style={{
                                    textAlign: 'left',
                                }}>
                                    <li className="grid-item-content">Users input their own meme text, and then a random meme picture is randomly fetched</li>
                                    <li className="grid-item-content">Incorporates public API to retreive the image</li>
                                    <li className="grid-item-content"><span><a href="https://github.com/wegman7/random_meme_generator">Source code</a></span></li>
                                </ul>
                            </BackSide>
                        </Flippy>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Projects;