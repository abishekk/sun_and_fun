import React, { Component } from 'react';
import {Button, Card, Checkbox, Col, Divider, Form, Row, Icon, Input} from 'antd';
import FacebookLogin from 'react-facebook-login';
import GoogleButton from 'react-google-button';

const FormItem = Form.Item;

class Login extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    }

    render() {
        const { getFieldDecorator }= this.props.form;
        const componentClicked = null;
        const responseFacebook = null;
        return (
            <div>
                {/* <Card style={{width: "100%", backgroundColor: "#bcd"}} bordered={false} title={ */}
                    <Row type="flex" justify="center">
                        <Col>
                            <div  style={{width: "600px", minWidth: "600px", maxWidth: "900px", padding: "10px"}}>
                                <b style={{fontFamily: "Oldenburg", cursive: true, fontSize: 32}}> THE NEW YORK TIMES </b>
                            </div>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col>
                        <Divider style={{width: "900px", blockSize: "2px"}}/>
                        </Col>
                    </Row>
                {/* }> */}
                    <Row type="flex" justify="center">
                        <Col> {/* push={8} span={16}> */}
                            <div  style={{width: "600px", minWidth: "600px", maxWidth: "600px", padding: "10px"}}>
                            <div style={{fontSize: "22px"}}> Log In </div>
                            Don't have an accounts? <a href="/signup">Create one</a><br /><br />
                            <div>
                            <FacebookLogin
                                size="small"
                                appId="1088597931155576"
                                autoLoad={true}
                                fields="name,email,picture"
                                onClick={componentClicked}
                                callback={responseFacebook} style={{float: "left", height: "70px"}}/>
                                <GoogleButton
                                    style={{float: "right", height: "50px", width: "230px"}}
                                    label="Be Cool!"
                                    onClick={() => { console.log('Google button clicked') }}
                            />
                            </div>
                            <Form onSubmit={this.handleSubmit} style={{width: "100%"}}>
                                <FormItem>
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                                )}
                                </FormItem>
                                <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                                )}
                                </FormItem>
                                <FormItem>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>Remember me</Checkbox>
                                )}
                                <a className="login-form-forgot" href="">Forgot password</a>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                                </FormItem>        
                                <Divider> Or </Divider>
                                <a href="">register now!</a>
                                <p>
                                <Checkbox style={{display: "inline"}}/> &nbsp; You agree to receive occasional updates and special offers for
                                The New York Times's products and services. You may opt out or contact us anytime. </p>
                                <p>
                                By creating an account, you agree to the Terms of Service and acknowledge our Privacy Policy. </p>
                            </Form>
                            </div>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col>
                            <Divider style={{width: "900px", blockSize: "2px"}}/>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col>
                            <center> © 2018 The New York Times Company <br />
                            Help Feedback </center>
                        </Col>
                    </Row>
                {/* </Card> */}
            {/* <Button onClick={this.rotateArray.bind(this)}>Hello</Button>
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
            </Row> */}
            </div>
        );
    }
}

const LoginOrSignup = Form.create()(Login);
export default LoginOrSignup;