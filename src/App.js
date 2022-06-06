import { Form, Input, Col, Row, Select, InputNumber, Button } from "antd";
import "./App.css";

function App() {
  const { Option } = Select;

  const [tawform, tcfform, valueform] = Form.useForm();

  const RankSelection = () => (
    <Select defaultValue={0}>
      <Option value={0}>0</Option>
      <Option value={1}>1</Option>
      <Option value={2}>2</Option>
      <Option value={3}>3</Option>
      <Option value={4}>4</Option>
      <Option value={5}>5</Option>
    </Select>
  );

  const handleSubmit = (values) => {
    console.log(values);
  };

  const TAWandBMT = () => (
    <div className="form-wrapper">
      <Form
        labelCol={{ offset: 2 }}
        wrapperCol={{ span: 10 }}
        form={tawform}
        onFinish={handleSubmit}
      >
        <span>Nhập số tác nhân</span>
        <div className="actor-point section-div">
          <Form.Item label="Simple" name="simple-actors">
            <Input />
          </Form.Item>
          <Form.Item label="Medium" name="medium-actors">
            <Input />
          </Form.Item>
          <Form.Item label="Difficult" name="Difficult-actors">
            <Input />
          </Form.Item>
        </div>
        <span>Nhập số trường hợp sử dụng loại B</span>
        <div className="use-case-B section-div">
          <Form.Item label="Simple" name="simple-B">
            <Input />
          </Form.Item>
          <Form.Item label="Medium" name="medium-B">
            <Input />
          </Form.Item>
          <Form.Item label="Difficult" name="Difficult-B">
            <Input />
          </Form.Item>
        </div>
        <span>Nhập số trường hợp sử dụng loại M</span>
        <div className="use-case-M section-div">
          <Form.Item label="Simple" name="simple-M">
            <Input />
          </Form.Item>
          <Form.Item label="Medium" name="medium-M">
            <Input />
          </Form.Item>
          <Form.Item label="Difficult" name="Difficult-M">
            <Input />
          </Form.Item>
        </div>
        <span>Nhập số trường hợp sử dụng loại T</span>
        <div className="use-case-T section-div">
          <Form.Item label="Simple" name="simple-T">
            <Input />
          </Form.Item>
          <Form.Item label="Medium" name="medium-T">
            <Input />
          </Form.Item>
          <Form.Item label="Difficult" name="Difficult-T">
            <Input />
          </Form.Item>
        </div>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );

  //form bang tinh toan he so phuc tap kt-cn
  const TCF = () => (
    <div className="form-wrapper rank-form">
      <span>Nhập giá trị xếp hạng</span>
      <Form wrapperCol={{ span: 10 }} form={tcfform} onFinish={handleSubmit}>
        <Row gutter={24}>
          <Col span={12}>
            <div>
              <span>Hệ thống phân tán</span>
              <Form.Item name="hpt-rank">
                <RankSelection />
              </Form.Item>
              <span>
                Tính chất đáp ứng tức thời hoặc yêu cầu đảm bảo thông lượng
              </span>
              <Form.Item name="adaptive-rank">
                <RankSelection />
              </Form.Item>
              <span>Hiệu quả sử dụng trực tuyến</span>
              <Form.Item name="online-efective-rank">
                <RankSelection />
              </Form.Item>
              <span>Độ phức tạp của xử lý bên trong</span>
              <Form.Item name="inside-difficulty-rank">
                <RankSelection />
              </Form.Item>
              <span>Mã nguồn phải tái sử dụng được</span>
              <Form.Item name="recyclable-code-rank">
                <RankSelection />
              </Form.Item>
              <span>Dễ cài đặt</span>
              <Form.Item name="simple-install-rank">
                <RankSelection />
              </Form.Item>
              <span>Dễ sử dụng</span>
              <Form.Item name="simple-usage-rank">
                <RankSelection />
              </Form.Item>
            </div>
          </Col>
          <Col span={12}>
            <div>
              <span>Khả năng chuyển đổi</span>
              <Form.Item name="switch-ability-rank">
                <RankSelection />
              </Form.Item>
              <span>Khả năng dễ thay đổi</span>
              <Form.Item name="replace-ability-rank">
                <RankSelection />
              </Form.Item>
              <span>Sử dụng đồng thời</span>
              <Form.Item name="concurent-usage-rank">
                <RankSelection />
              </Form.Item>
              <span>Có các tính năng bảo mật đặc biệt</span>
              <Form.Item name="special-security-function-rank">
                <RankSelection />
              </Form.Item>
              <span>
                Cung cấp truy nhập trực tiếp tới các phần mềm của các hãng thứ
                ba
              </span>
              <Form.Item name="3rd-side-rank">
                <RankSelection />
              </Form.Item>
              <span>
                Yêu cầu phương tiện đào tạo đặc biệt cho người sử dụng
              </span>
              <Form.Item name="special-educate-for-user-rank">
                <RankSelection />
              </Form.Item>
            </div>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );

  //form xac dinh gia tri phan mem
  const CountValue = () => (
    <div className="form-wrapper">
      <Form form={valueform} onFinish={handleSubmit}>
        <span>Nội suy thời gian lao động (P)</span>
        <Form.Item name="p-value">
          <InputNumber />
        </Form.Item>
        <span>Mức lương lao động bình quân (H)</span>
        <Form.Item name="average-income">
          <InputNumber />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );

  return (
    <div className="container">
      <TAWandBMT />
      <TCF />
      <CountValue />
    </div>
  );
}

export default App;
