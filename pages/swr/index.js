import productApi from '@/components/api/productApi';
import { Button, Spin } from 'antd';
import { useState } from 'react';

function ListData() {
  const [page, setPage] = useState(1);
  const { data, mutate, isLoading } = productApi.listProduct(page);

  const onNextPage = () => {
    setPage(prev => prev + 1);
  };

  const onPrevPage = () => {
    if (page <= 1) return;
    setPage(prev => prev - 1);
  };

  if (data?.length < 1)
    return (
      <>
        <p>Bạn đã đi đến cuối trang</p>
        <Button onClick={() => setPage(1)}>Trở lại trang đầu</Button>
      </>
    );

  if (isLoading || !data) return <Spin />;
  return (
    <div>
      <Button onClick={() => mutate()}>Re Fetch</Button>
      <Button href="swr/useSWRInfinite">useSWR Infinite</Button>
      <ul className="mt-3 ml-5">
        {data?.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <Button onClick={onNextPage}>Next Page</Button>
      <Button onClick={onPrevPage}>Prev Page</Button>
    </div>
  );
}

export default ListData;
