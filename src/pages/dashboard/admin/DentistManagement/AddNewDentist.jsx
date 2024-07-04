import { useEffect, useState } from 'react';
import '../../../../scss/AdminAddNewDentist.css'
import { Button, Card, DatePicker, Form, Input, Radio, Select, Typography, notification } from 'antd';
import { DoAddNewDentistByAdmin, DoViewSpecialityByAdmin } from '../../../../apis/api';
import dayjs from 'dayjs';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const AddNewDentist = () => {

    // *****************************************
    // ------------- Variables ------------------
    const { Title } = Typography;
    const [form] = Form.useForm();
    const navigate = useNavigate();

    // -----------------------------------------
    // *****************************************


    // *****************************************
    // ------------- useState ------------------
    const [dentistSpeciality, setDentistSpeciality] = useState([]);

    const [dateForm, setDateForm] = useState('');

    // -----------------------------------------
    // *****************************************



    // *****************************************
    // ------------- API Function -------------
    const fecthDentistSpeciality = async () => {
        const APIDentistSpeciality = await DoViewSpecialityByAdmin();
        // console.log("APIDentistSpeciality", APIDentistSpeciality)
        const GetDataDentistSpeciality = APIDentistSpeciality?.data || {};
        setDentistSpeciality(GetDataDentistSpeciality);
    }

    const onFinish = async (values) => {
        console.log('Success:', values);
        values.date_of_birth = dayjs(values.date_of_birth).format("YYYY-MM-DD");
        // const { date_of_birth } = dateForm;
        const { email, full_name, phone_number, date_of_birth, gender, specialty_id, password } = values;

        try {
            const APIAddNewDentistByAdmin = await DoAddNewDentistByAdmin(email, full_name, phone_number, date_of_birth, gender, specialty_id, password);
            console.log("APIAddNewDentistByAdmin", APIAddNewDentistByAdmin)
            switch (APIAddNewDentistByAdmin.status) {
                case 201:
                    notification.success({
                        message: 'Thêm Nha sĩ thành công',
                        duration: 2,
                    });
                    navigate('/admin/quan-ly-nha-si');
                    break;

                default:
                    notification.error({
                        message: 'Thêm Nha sĩ thất bại',
                        duration: 2,
                    });
                    break;
            }
        } catch (error) {
            console.log(error);
        }

    };
    // -----------------------------------------
    // *****************************************



    // *****************************************
    // ------------- useEffect -----------------
    useEffect(() => {
        fecthDentistSpeciality();
    }, [])


    // -----------------------------------------
    // *****************************************



    // *****************************************
    // ------------- Others Function -----------

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onChangeDate = (date) => {
        // console.log("Date log:", date);
        // console.log("Date String log:", dateString);
        setDateForm(date)

    };

    const DentistSpecialityOps = dentistSpeciality.map((data) => (
        {
            value: data.id,
            label: data.name,
        }
    ))

    // ************ Checked Mở Button Nếu Người Dùng Nhập Đủ Form thì Cho Đăng Ký ***************
    const SubmitButton = ({ form, children }) => {
        const [submittable, setSubmittable] = useState(false);

        // Watch all values
        const values = Form.useWatch([], form);
        useEffect(() => {
            form
                .validateFields({
                    validateOnly: true,
                })
                .then(() => setSubmittable(true))
                .catch(() => setSubmittable(false));
        }, [form, values]);
        return (
            <Button type="primary" htmlType="submit" disabled={!submittable}>
                {children}
            </Button>
        );
    };

    // *********** Validate Dữ Liệu Người Dùng Nhập *****************
    // Validate Số Diện Thoại
    const validatePhoneNumber = (_, value) => {
        if (!value) {
            return Promise.reject(new Error(''));
        }

        const phoneRegex = /^0[1-9][0-9]{8}$/;

        if (!phoneRegex.test(value)) {
            return Promise.reject(new Error('Số điện thoại không hợp lệ!'));
        }
        return Promise.resolve();
    };

    // Validate Email
    // const validateEmail = (_, value) => {
    //     if (!value) {
    //         return Promise.reject(new Error('Email không được để trống!'));
    //     }

    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //     if (!emailRegex.test(value)) {
    //         return Promise.reject(new Error('Email không hợp lệ!'));
    //     }
    //     return Promise.resolve();
    // };

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
                            date_of_birth: dateForm,
                            password: '123456',
                        }}
                        onFinish={onFinish}
                        form={form}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    type: "email",
                                    message: "Email nhập không chính xác"
                                },
                                {
                                    required: true,
                                    message: 'Yêu cầu nhập email!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Họ và Tên"
                            name="full_name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập họ tên!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Số điện thoại"
                            name="phone_number"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập số điện thoại!',
                                    validator: validatePhoneNumber,
                                },
                            ]}
                        >
                            <Input />
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
                            {/* <span>{JSON.stringify(dateForm)}</span> */}
                            <DatePicker
                                onChange={onChangeDate}
                                format={moment(dateForm).format('YYYY-MM-DD')}
                            // value={dateForm}
                            />
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
                                <Radio value='Nam'>Nam</Radio>
                                <Radio value='Nữ'>Nữ</Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item
                            label="Chuyên khoa"
                            name="specialty_id"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng chọn chuyên khoa!',
                                },
                            ]}
                        >
                            <Select
                                style={{
                                    width: 200,
                                }}
                                placeholder="---"
                                allowClear
                                options={DentistSpecialityOps}
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
                            <Input disabled />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 6,
                                span: 16,
                            }}
                        >
                            <SubmitButton form={form}>Đăng ký Nha sĩ</SubmitButton>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </>
    )
}

export default AddNewDentist