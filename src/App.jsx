// import { BrowserRouter as Router, Route } from "react-router-dom";
// import SignIn from "./components/SignIn";

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
    <div className="flex">
      <div className="w-1/2">
        <img class="main-img" src="./sideImg.png" alt="side" />
      </div>

      <div className="w-1/2 ">
        <div className="mb-56 mt-16 ml-5">
          <img src="./Group 22.png" alt="" />
        </div>

        <div className="px-20 flex-col justify-center">
          <div className="flex justify-between mb-9 w-3/4">
            <h1 className="font-bold text-4xl">SignUp</h1>
            <p>
              Or <span className="text-[#17B582]">Sign</span>
            </p>
          </div>

          <div className="w-full">
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                // label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input style={{ borderRadius: "135px" }} placeholder="email" />
              </Form.Item>

              <Form.Item
                // label="Password"
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
                  placeholder="password"
                />
              </Form.Item>

              <Form.Item
                // label="Re-Enter Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                {/* <Input.Password /> */}
                <Input
                  style={{ borderRadius: "135px" }}
                  placeholder="Re-Enter Password"
                />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-[#17B582] w-full m-0 float-start"
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
