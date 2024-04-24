import "./App.css";

import React from "react";
import { Button, Checkbox, Form, Input } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const App = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-1/2">
        <img className="main-img" src="./sideImg.png" alt="side" />
      </div>

      <div className="w-1/2 flex  justify-center">
        <div className="w-full px-5">
          <div className="mb-48 mt-16 ml-5">
            <img src="./Group 22.png" alt="" />
          </div>
          <div className="flex justify-between mb-9 px-32">
            <h1 className="font-bold text-4xl">SignUp</h1>
            <p>
              Or <span className="text-[#17B582]">SignIn</span>
            </p>
          </div>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="max-w-md mx-auto"
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input style={{ borderRadius: "135px" }} placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                style={{ borderRadius: "135px" }}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item
              name="re-enter-password"
              rules={[
                {
                  required: true,
                  message: "Please re-enter your password!",
                },
              ]}
            >
              <Input
                style={{ borderRadius: "135px" }}
                placeholder="Re-Enter Password"
              />
            </Form.Item>

            <Form.Item>
              <Checkbox>Remember me</Checkbox>
              <a href="#" className="ml-20">
                Forgot password?
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="bg-[#17B582] w-full"
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default App;
