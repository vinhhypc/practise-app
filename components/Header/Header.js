import { Avatar, Badge, Button } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import cookieUtils from '@/components/utils/cookieUtils';
import { useRecoilValue } from 'recoil';
import { addedProduct } from '@/components/pages/fake-product/recoil';

export const Header = () => {
  const [user, setUser] = useState({ userName: '', avatar: '' });
  const data = useRecoilValue(addedProduct);
  useEffect(() => {
    const dataUserName = cookieUtils.getCookie('userName');
    const dataUserAvatar = cookieUtils.getCookie('avatar');
    if (!dataUserAvatar && !dataUserName) return;
    setUser({
      userName: dataUserName,
      avatar: dataUserAvatar,
    });
  }, [cookieUtils.getCookie('userName'), cookieUtils.getCookie('avatar')]);
  return (
    <div className=" h-16 bg-slate-400 flex items-center justify-end">
      <div className="flex gap-5 mr-2">
        <Button type="primary" htmlType="link" href="/test-motion">
          Test Motion
        </Button>
        <Button type="primary" htmlType="link" href="/test-motion/card">
          Card
        </Button>
        <Button type="primary" htmlType="link" href="/swr">
          SWR
        </Button>
        <Badge count={data.length} size="small" className="mt-1 cursor-pointer">
          <ShoppingOutlined style={{ fontSize: '24px', color: 'white' }} />
        </Badge>
        {user?.userName && user.avatar ? (
          <Avatar src={user.avatar}>{user.userName}</Avatar>
        ) : (
          <Avatar>Khách</Avatar>
        )}
      </div>
    </div>
  );
};
