/* eslint-disable import/no-extraneous-dependencies */

import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import Burgers from '@/mockData/burgers';

const axiosInstance = axios.create();
const mock = new AxiosMockAdapter(axiosInstance, { delayResponse: 500 });

mock.onGet('/burgers').reply(200, Burgers);

export default axiosInstance;
