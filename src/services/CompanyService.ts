import axios from 'axios';
// services
import APIService from 'src/services/APIService';
// endpoints
import {COMPANIES,COMPANIES_DETAIL, SEARCH} from '../lib/constants/endpoints';

class CompanyService extends APIService {
  create(data: any): Promise<any> {
    return axios
      .post(COMPANIES, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error.response;
      });
  }
  getData(data: any): Promise<any> {
    return axios
      .get(COMPANIES_DETAIL(data))
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error.response;
      });
  }

  search(url): Promise<any> {
    return axios
      .get(SEARCH(url))
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error.response;
      });
  }
}

export default CompanyService;