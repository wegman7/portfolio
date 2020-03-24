import React from 'react';
import { Row, Col} from 'antd';

function Skills() {
    return (
        <div>
            <div id="skills" className="section-title">Skills</div>
            <div className="section-block">
                <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row grid-item" span={5}>
                        <div style={{
                            // backgroundColor: '#41669d',
                        }}>
                            <img className="grid-image" src="https://image.flaticon.com/icons/png/128/69/69045.png" alt=""/>
                            <div className="grid-item-title">Frontend</div>
                            <div className="grid-item-content">HTML5</div>
                            <div className="grid-item-content">CSS3</div>
                            <div className="grid-item-content">Javascript</div>
                            <div className="grid-item-content">React | Redux</div>
                        </div>
                    </Col>
                    <Col className="gutter-row grid-item" span={5}>
                        <img className="grid-image" src="https://image.flaticon.com/icons/png/128/83/83938.png" alt=""/>
                        <div className="grid-item-title">Backend</div>
                        <div className="grid-item-content">Python</div>
                        <div className="grid-item-content">Django | Django Rest Framework</div>
                    </Col>
                    <Col className="gutter-row grid-item" span={5}>
                        <img className="grid-image" src="https://image.flaticon.com/icons/png/128/13/13713.png" alt=""/>
                        <div className="grid-item-title">Database</div>
                        <div className="grid-item-content">SQLite</div>
                        <div className="grid-item-content">PostGreSQL</div>
                    </Col>
                    <Col className="gutter-row grid-item" span={5}>
                        <img className="grid-image" src="https://image.flaticon.com/icons/png/128/118/118171.png" alt=""/>
                        <div className="grid-item-title">Deployment</div>
                        <div className="grid-item-content">Linux | Bash</div>
                        <div className="grid-item-content">Git</div>
                        <div className="grid-item-content">Apache2</div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Skills;