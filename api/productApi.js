import useSWR from 'swr';

const productApi = {
  listProduct: page =>
    useSWR(`https://test-one-zeta-99.vercel.app/products?_page=${page}`),
};

export default productApi;
