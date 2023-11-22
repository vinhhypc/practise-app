import { ConfigProvider } from 'antd';
import '../styles/globals.css';
import dynamic from 'next/dynamic';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Header from '../components/Header';
import { RecoilEnv, RecoilRoot } from 'recoil';
import { SWRConfig } from 'swr';
import axiosClient from '../api/axiosClient';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
function App({ Component, pageProps }) {
  const prefixClass = 'vinh';
  const client_id =
    '651861546007-4hlfdum1af96efjp8kbs95pervtuovno.apps.googleusercontent.com';

  const fetcher = url => axiosClient.get(url).then(res => res.data);
  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnFocus: false,
        // revalidateOnFocus : moi khi nguoi dung chuyen tab, vi du 2 tab deu login, neu tab1 log out thi tab 2 cung tu logout theo
        shouldRetryOnError: false,
      }}
    >
      <RecoilRoot>
        <GoogleOAuthProvider clientId={client_id}>
          <ConfigProvider
            prefixCls={prefixClass}
            theme={{
              token: {
                colorPrimary: '#f7a90b',
              },
            }}
          >
            <Header />
            <Component {...pageProps} />
          </ConfigProvider>
        </GoogleOAuthProvider>
      </RecoilRoot>
    </SWRConfig>
  );
}
export default dynamic(() => Promise.resolve(App), { ssr: false });
