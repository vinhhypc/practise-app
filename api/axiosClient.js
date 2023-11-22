import axios from 'axios';
import cookieUtils from '../utils/cookieUtils';
import { message } from 'antd';

const axiosClient = axios.create({
  baseURL: '/',
  paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  config => {
    const token = cookieUtils.getCookie('token-id');
    if (token) {
      config.headers.common['token-id'] = JSON.parse(token);
    }
    return config;
  },
  error => {
    throw error;
  },
);

axiosClient.interceptors.response.use(
  response => {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    }

    return Promise.reject(new Error(`Lỗi khi kết nối tới server! `));
  },
  async error => {
    if (error.response?.status === 401) {
      cookieUtils.removeCookie('token-id');
    }
    if (error.response?.status === 403) {
      message.error('Bạn không có quyền!');
    }
    if (error.response?.status === 500) {
      message.error(
        'Lỗi không xác định. Vui lòng liên hệ kỹ thuật để được hỗ trợ!',
      );
    }
    const errorMessage = error.message;
    if (errorMessage) message.error(errorMessage);
    throw error;
  },
);

export default axiosClient;
