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
        <img className="main-img" src="./sideImg.png" alt="side" />
      </div>

      <div className="w-1/2 ">
        <div className="mb-56 mt-16 ml-5">
          <img src="./Group 22.png" alt="" />
        </div>

        <div className="px-20 flex flex-col justify-center">
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

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 0,
                  span: 24,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 0,
                  span: 16,
                }}
              >
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
    </div>
  );
};

export default App;
