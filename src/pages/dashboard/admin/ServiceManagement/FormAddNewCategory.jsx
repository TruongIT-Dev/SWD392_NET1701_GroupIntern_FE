import { Button, Form, Input, message, Row, Col } from 'antd';
import { DoAddCategoryByAdmin } from '../../../../apis/api';


const FormAddNewCategory = () => {

    const [form] = Form.useForm();
    const { TextArea } = Input;

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    // const onReset = () => {
    //     form.resetFields();
    // };

    const onFinish = async (values) => {
        const { banner_url, description, icon_url, name } = values;
        console.log("Check Form Data: ", values);
        try {
            const APIAddNewCategory = await DoAddCategoryByAdmin(banner_url, description, icon_url, name);
            console.log("Input data new service: ", APIAddNewCategory);

            switch (APIAddNewCategory.status) {
                case 201:
                    message.success('Thêm loại hình dịch vụ thành công');
                    window.location.reload();
                    break;
                case 400:
                    message.error('Thêm loại hình dịch vụ thất bại');
                    break;
                default:
                    message.error('Thêm loại hình dịch vụ thất bại');
                    break;
            }
        } catch (error) {
            console.log("Lỗi Thêm Dịch vụ:", error);
        }

    };

    return (
        <>
            <Form
                name="add-new-category"
                form={form}
                labelCol={{
                    span: 12,
                }}
                wrapperCol={{
                    span: 20,
                }}
                initialValues={{
                    remember: true,
                }}
                layout='vertical'
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Row>
                    <Col span={8}>
                        <Form.Item
                            label="Tên"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập tên!'
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item
                            label="Link Banner"
                            name="banner_url"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập link ảnh!'
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item
                            label="Link icon"
                            name="icon_url"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập link icon!'
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col span={24}>
                        <Form.Item
                            label="Mô tả"
                            name="description"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập mô tả!'
                                },
                            ]}
                        >
                            <TextArea rows={4} />
                        </Form.Item>
                    </Col>
                </Row>


                <Form.Item style={{ display: 'grid', placeItems: 'center' }}>
                    <Button style={{}} type="primary" htmlType="submit">
                        Thêm mới loại hình dịch vụ
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}
export default FormAddNewCategory