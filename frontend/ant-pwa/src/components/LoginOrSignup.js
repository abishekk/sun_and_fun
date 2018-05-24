import React, { Component } from 'react';
import {Button, Card, Checkbox, Col, Divider, Form, Row, Icon, Input} from 'antd';

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
        return (
            <div>
                {/* <Card style={{width: "100%", backgroundColor: "#bcd"}} bordered={false} title={ */}
                    <div>
                        <Row justify="center">
                            <Col push={8} span={16}>Sun and Fun Logo</Col>
                        </Row>
                        <Row type="flex" justify="center">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4} style={{backgroundColor: "blue"}}>col-4</Col>
    </Row>
                        
                        <Divider />
                    </div>
                {/* }> */}
                    <Row justify="center">
                        <Col push={8} span={16}>
                            <div style={{fontSize: "22px"}}> Log In </div>
                            Don't have an accounts? <a href="/signup">Create one</a><br /><br />
                            <Form onSubmit={this.handleSubmit} className="login-form">
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
                                <Divider> Or </Divider> <a href="">register now!</a>
                                </FormItem>        
                            </Form>
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