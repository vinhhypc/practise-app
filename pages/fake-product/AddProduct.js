import { Button, Input, Form } from 'antd';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { addedProduct } from './recoil';

function AddProduct() {
  const [form] = Form.useForm();
  const setCount = useSetRecoilState(addedProduct);
  const [item, setItem] = useState([]);
  const handleAdd = () => {
    const data = form.getFieldValue('product');
    if (!data) return;
    setItem(prev => [...prev, data]);
    form.resetFields();
  };
  const onFinish = () => {
    setCount(item);
  };
  return (
    <>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item label="Tên sản phẩm" name="product">
          <Input placeholder="Nhập tên sản phẩm" />
        </Form.Item>
        <>
          <Button onClick={handleAdd} htmlType="button">
            Thêm sản phẩm
          </Button>
          <Button htmlType="submit">Thêm vào giỏ hàng</Button>
        </>
      </Form>
      <ul className="mt-2 ml-5 flex gap-2 flex-col">
        {item?.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default AddProduct;
