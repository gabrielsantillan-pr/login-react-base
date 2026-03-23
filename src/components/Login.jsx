import React, { useState } from 'react'
import { Button, Card, Checkbox, Form, Input } from 'antd'
import appFirebase from '../credFirebase';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import toast from 'react-hot-toast';

export function Login() {

    const onFinish = async (values) => {
    const email = values.email
    const password = values.password

    if(entering){
        await createUserWithEmailAndPassword(auth, email, password)
    }else{
        try {
            await signInWithEmailAndPassword(auth, email, password)
            toast.success("Sesión iniciada correctamente")
        } catch (error) {
            toast.error("Error al iniciar sesión. Revise email y contraseña")
        }
    }
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

const auth = getAuth(appFirebase)

    const [entering, setEntering] = useState(false)

  return (
    <Card style={
        { width: `clamp(300px, 50%, 500px)`,
        border: `1px solid rgb(22, 119, 255)`,
    }}>
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout='vertical'
        >
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Ingrese su email!' }]}
                >
                <Input />
            </Form.Item>

            <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Por favor, ingrese una contraseña!' }]}
            >
            <Input.Password />
            </Form.Item>

            <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                    {entering ? "Registrate" : "Iniciar sesión"}
                </Button>
            </Form.Item>

            <Form.Item label={entering ? "¿Ya tienes una cuenta?" : "¿No tienes una cuenta?"}>
                <Button onClick={()=>{setEntering(!entering)}} type="secondary">{entering ? "Inicia sesión" :  "Registrate"}</Button>
            </Form.Item>
        </Form>
    </Card>
  )
}


