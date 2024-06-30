import '../../../../scss/AdminAddNewDentist.css'
import { Button, Card, DatePicker, Form, Input, Radio, Select, Typography } from 'antd';

const AddNewDentist = () => {

    // *****************************************
    // ------------- Variables ------------------
    const { Title } = Typography;
    // const [form] = Form.useForm();


    // -----------------------------------------
    // *****************************************


    // *****************************************
    // ------------- useState ------------------



    // -----------------------------------------
    // *****************************************



    // *****************************************
    // ------------- API Function -------------



    // -----------------------------------------
    // *****************************************



    // *****************************************
    // ------------- useEffect -----------------



    // -----------------------------------------
    // *****************************************



    // *****************************************
    // ------------- Others Function -----------

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onChangeDate = (date, dateString) => {
        console.log(date, dateString);
    };


    // -----------------------------------------
    // *****************************************

    return (
        <>
            {/* Header */}
            {/* <Breadcrumb
                style={{
                    margin: '16px 0',
                }}
            >
                <Breadcrumb.Item>
                    <Link to='/admin/quan-ly-nha-si' style={{ textDecoration: 'none' }}>Loại hình dịch vụ</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to={`#`} style={{ textDecoration: 'none' }}>text</Link>
                </Breadcrumb.Item>
            </Breadcrumb> */}

            <div>
                <Title level={2}>Tạo tài khoản Nha sĩ</Title>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                <Card style={{ width: '80%' }}>
                    <Form
                        name="basic"
                        layout='horizontal'
                        labelCol={{
                            span: 6,
                        }}
                        wrapperCol={{
                            span: 10,
                        }}
                        style={{
                            width: '100%'
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập email!',
                                },
                            ]}
                        >
                            <Input placeholder='---' />
                        </Form.Item>

                        <Form.Item
                            label="Họ và Tên"
                            name="fullname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập họ tên!',
                                },
                            ]}
                        >
                            <Input placeholder='---' />
                        </Form.Item>

                        <Form.Item
                            label="Số điện thoại"
                            name="phone_number"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập số điện thoại!',
                                },
                            ]}
                        >
                            <Input placeholder='---' />
                        </Form.Item>

                        <Form.Item
                            label="Ngày sinh"
                            name="date_of_birth"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng chọn ngày!',
                                },
                            ]}
                        >
                            <DatePicker onChange={onChangeDate} placeholder='YYY-MM-DD' />
                        </Form.Item>

                        <Form.Item
                            label="Giới tính"
                            name="gender"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng chọn giới tính!',
                                },
                            ]}
                        >
                            <Radio.Group name="radiogroup">
                                <Radio value={1}>Nam</Radio>
                                <Radio value={2}>Nữ</Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item
                            label="Chuyên khoa"
                            name="specialty_id"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập chuyên khoa!',
                                },
                            ]}
                        >
                            <Select
                                style={{
                                    width: 200,
                                }}
                                placeholder="---"
                                allowClear
                                options={[
                                    {
                                        value: '1',
                                        label: 'Chuyên khoa 1',
                                    },
                                    {
                                        value: '2',
                                        label: 'Chuyên khoa 2',
                                    },
                                    {
                                        value: '3',
                                        label: 'Chuyên khoa 3',
                                    },
                                ]}
                            />
                        </Form.Item>

                        <Form.Item
                            label="Mật khẩu"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập mật khẩu!',
                                },
                            ]}
                        >
                            <Input.Password placeholder='---' />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 6,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </>
    )
}

export default AddNewDentist