import React, { useEffect, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import cookieUtils from '@/components/utils/cookieUtils';
import { useRouter } from 'next/navigation';

const AuthContext = () => {
  const [userInfo, setUserInfo] = useState({});
  const router = useRouter();
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  const onSuccess = credentialResponse => {
    const token = credentialResponse?.credential;
    const decoded = jwtDecode(token);
    const dataUser = {
      userName: decoded?.given_name,
      avatar: decoded?.picture,
    };
    setUserInfo(dataUser);
  };
  useEffect(() => {
    const login = cookieUtils.getCookie('user-login');
    if (login) return;
    cookieUtils.setCookie('userName', userInfo?.userName);
    cookieUtils.setCookie('avatar', userInfo?.avatar);
  }, [userInfo]);

  useEffect(() => {
    const userName = cookieUtils.getCookie('userName');
    const avatar = cookieUtils.getCookie('avatar');
    const login = userName !== 'undefined' && avatar !== 'undefined';
    if (login) router.push('trang-chu');
  }, [cookieUtils.getCookie('userName'), cookieUtils.getCookie('avatar')]);
  const [form] = Form.useForm();
  useEffect(() => form.setFieldsValue({ username: 'vinhhypc' }), []);

  return (
    <Form
      name="form"
      form={form}
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>
      <GoogleLogin
        onSuccess={onSuccess}
        onError={() => {
          console.log('Login Failed');
        }}
        shape="circle"
        theme="filled_blue"
        text="Đăng nhập với google"
      />
      <Form.Item className="mt-5">
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>{' '}
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
};
export default AuthContext;
