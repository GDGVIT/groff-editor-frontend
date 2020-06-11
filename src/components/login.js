import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';

const Login = () => {

    const onFinish = values => {
        console.log('Received values of form: ', values);
    }
    

    return(
        <div className="loginpage">
        <h1> Online groff editor </h1>
        <div style={{ margin: "10px" }}>
        <p>groff belongs to an older generation of document preparation systems, 
          which operate more like compilers than the more recent interactive WYSIWYG1 systems.</p>
        <p> “GUIs normally make it simple to accomplish simple actions and impossible to accomplish complex actions.” –Doug Gwyn </p>
        </div>
        <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        {/* <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
  
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item> */}
  
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            <Link to="/editor">Sign In</Link>
          </Button>
          {/* Or <a href="">register now!</a> */}
        </Form.Item>
      </Form>
      </div>
    )
}
export default Login;