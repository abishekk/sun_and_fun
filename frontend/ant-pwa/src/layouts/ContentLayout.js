import React, { Component } from 'react';
import { Button, Menu, Breadcrumb, Layout } from 'antd';
// import logo from '../logo.svg';
const { Header, Footer, Content } = Layout;

class ContentLayout extends Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <Header style={{ position: 'fixed', width: '100%' }}>
                        {/* <div className="logo"><img src={logo} style={{ height: 100, width: 100 }} alt="logo" /></div> */}
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 10px', marginTop: 64 }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                            <Button type="primary">Button</Button>
                        </div>
                        <div style={{ background: '#aaa', padding: 24, minHeight: 200, position: 'relative' }}>
                            <div style={{ position: 'absolute', bottom: 0, right: 0 }}>
                                <Button type="dashed" >Button</Button>
                            </div>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Sun and Fun ©2018. Created by Abi
                    </Footer>
                </Layout>
            </div>
        );
    }
}

export default ContentLayout;



