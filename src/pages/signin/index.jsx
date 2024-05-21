import { Button, Form, Input } from 'antd';


const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};


const SignIn = () => {

    return (
        <>
            <div className="sign-in" style={{ width: '100%' }}>
                <div className="container space-1">
                    <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-lg-5 mb-md-3">
                        <h2 style={{ color: '#f6921e', fontWeight: '400', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                            Đăng Nhập
                        </h2>
                        <p style={{ lineHeight: '1.5', margin: 0 }}>
                            <i style={{ fontStyle: 'italic', fontSize: '0.9625rem' }}>Vui lòng để lại thông tin, nhu cầu của quý khách.</i>
                        </p>
                        <p style={{ lineHeight: '1.5' }}>
                            <i style={{ fontStyle: 'italic', fontSize: '0.9625rem' }}>Nha Khoa Kim sẽ liên hệ đến Quý Khách trong thời gian sớm nhất</i>
                        </p>
                    </div>

                    {/* Form Inout */}
                    <div className='w-lg-60 mx-auto bg-light p-3 '>
                        <Form
                            name="signin"
                            labelCol={{
                                span: 6,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            style={{
                                maxWidth: 600,
                                marginTop: '1.5rem',
                                width: '100%',
                                display: 'inline-block',
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            {/* Nhập Username */}
                            <Form.Item
                                label="Tên đăng nhập"
                                name="usernameSignin"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Yêu cầu nhập tên đăng nhập!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            {/* Nhập Password */}
                            <Form.Item
                                label="Mật khẩu"
                                name="passwordSignin"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Yêu cầu nhập mật khẩu!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            {/* Nút Submit */}
                            <Form.Item
                                wrapperCol={{
                                    span: 16,
                                }}
                                style={{display:'flex', justifyContent:'center'}}
                            >
                                <Button type="primary" htmlType="submit">
                                    Đăng nhập
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SignIn