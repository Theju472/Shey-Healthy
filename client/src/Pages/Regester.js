import { Button, Form, Input } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';

function Regester() {

      const onFinish = (values) => {

            console.log('Received values of form: ", values');
      };

      return (
            <div className='authentication'>
                  <div className='authentication-form-card p-2'>
                        <h1 className='card-title'> Nice to meet you</h1>
                        <Form layout='vertical' onFinish={onFinish}>

                              <Form.Item label='Name' name='name'>
                                    <Input placeholder='Name' />
                              </Form.Item>
                              <Form.Item label='Email' name='email'>
                                    <Input placeholder='Email' />
                              </Form.Item>
                              <Form.Item label='Password' name='password'>
                                    <Input placeholder='Password' type='Password' />
                              </Form.Item>

                              <Button className='primary-button mt-2' htmlType='submit'>REGESTER</Button>

                              <Link to="/login" className="anchor mt-2">
                                    CLICK HERE TO LOGIN
                              </Link>
                        </Form>
                  </div>
            </div>
      )
}

export default Regester