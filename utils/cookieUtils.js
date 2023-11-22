import Cookies from 'js-cookie';

const cookieUtils = {
  getCookie: key => Cookies.get(key),

  setCookie: (key, value) => {
    Cookies.set(key, value, {
      path: '/',
      domain:
        window.location.hostname.indexOf('localhost:3000') >= 0
          ? 'localhost:3000'
          : '',
      secure: window.location.protocol === 'http:',
    });
  },

  removeCookie: key => {
    Cookies.remove(key, {
      path: '/',
      domain:
        window.location.hostname.indexOf('localhost:3000') >= 0
          ? 'localhost:3000'
          : '',
      secure: window.location.protocol === 'http:',
    });
  },
};

export default cookieUtils;
