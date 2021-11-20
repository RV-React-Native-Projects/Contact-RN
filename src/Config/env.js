import {DEV_BACKEND_URL, PROD_BACKEND_URL} from '@env';

const DevENV = {
  DEV_BACKEND_URL,
};

const ProdENV = {
  PROD_BACKEND_URL,
};

export default __DEV__ ? DevENV : ProdENV;
