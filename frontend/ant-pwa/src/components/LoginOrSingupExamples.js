import React, { Component } from 'react';
import {Button, Card, Col, Divider, Row, Icon, Input} from 'antd';

class LoginOrSignupExamples extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: [1, 2, 3, 4]
        };           
    }

    rotateArray() {
        var newState = this.state.order;
        var a = newState[0];
        newState[0] = newState[1];
        newState[1] = newState[2];
        newState[2] = newState[3];
        newState[3] = a;
        console.log(this.state);
        console.log(newState);
        this.setState({order: newState});
    };

    render() {
        return (
            <div>
            <Button onClick={this.rotateArray.bind(this)}>Hello</Button>
            <Row type="flex">
                <Col span={3} order={this.state.order[0]} style={{ block: true, backgroundColor: "blue"}}>1 col-order-4</Col>
                <Col span={6} order={this.state.order[1]} style={{ block: true, backgroundColor: "red"}}>2 col-order-3</Col>
                <Col span={9} order={this.state.order[2]} style={{ block: true, backgroundColor: "yellow"}}>3 col-order-2</Col>
                <Col span={6} order={this.state.order[3]} style={{ block: true, backgroundColor: "green"}}>4 col-order-1</Col>
            </Row>
            <Card style={{width: 1000}}
            title={<p style={{ width: "50%", block: true, backgroundColor: "yellow"}}>Hello Card</p>}
            extra={<p style={{ width: "100%", block: true, backgroundColor: "red"}}>Extra </p>} >
            <Row>
                <Col span={6} offset={9}>
                <p> Log In </p>
                Don't have an account? <a href="/signup">Create one</a>
                </Col>
            </Row>
            <Row>
                <Col span={6} offset={9}>
                    <div className="loginOrSignup" style={{ block: true, backgroundColor: "blue"}}>
                        <Row type="flex" justify="space-between" gutter={12}>
                            <Col span={12} style={{ block: true, backgroundColor: "red"}}> 
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} type="button" text="Username" />
                            </Col>
                            <Col span={12} style={{ block: true, backgroundColor: "orange"}}>
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={6} offset={9}>
                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} type="button" text="Username" />
                </Col>
            </Row>
            <Row>
                <Col span={6} offset={9}>
                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} type="button" text="Username" />
                </Col>
            </Row>            
            <Row>
                <Col span={6} offset={9}>
                <div className="loginOrSignup" style={{ block: true, backgroundColor: "blue"}}>
                        <Row type="flex" justify="space-between" gutter={12}>
                            <Col span={12} style={{ block: true, backgroundColor: "red"}}> 
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} type="button" text="Username" />
                            </Col>
                            <Col span={12} style={{ block: true, backgroundColor: "orange"}}>
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>            
            <Row><Col span={6} offset={9} style={{backgroundColor: "#caf"}}>
                <Row type="flex" justify="center">
                    <Col>
                        <Button />
                    </Col>
                </Row>
            </Col></Row>
            </Card>


            <Row><Col span={6} offset={9}>
            <Row type="flex" justify="center"><Col><Divider>Or</Divider></Col>
            </Row></Col></Row>
            <br />
            <hr />
            <Row>
                <Col span={6} style={{ block: true, backgroundColor: "blue"}}>Hello</Col>
                <Col span={6} style={{ block: true, backgroundColor: "red"}}>Hello</Col>
                <Col span={6} style={{ block: true, backgroundColor: "yellow"}}>Hello</Col>
                <Col span={24} style={{ block: true, backgroundColor: "green"}}>Hello</Col>
            </Row>
            <Row>
                <Col span={6} style={{ block: true, backgroundColor: "black"}}>Hello</Col>
                <Col span={18} style={{ block: true, backgroundColor: "red"}}>Hello</Col>
            </Row>
            </div>
        );
    }
}

export default LoginOrSignupExamples;