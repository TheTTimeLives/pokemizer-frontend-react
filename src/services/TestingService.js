import axios from 'axios';

class TestingService {
  constructor() {
    this.configUrl = "";
  }

  getTesting(port) {
    console.log("Testing a get...");
    return axios.get(`http://localhost:${port}/hello`, { responseType: 'text' })
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  }

  postTesting(port) {
    return axios.post(`localhost://${port}/hello`, {});
  }

  putTesting(port) {
    return axios.put(`localhost://${port}/hello`, {});
  }

  deleteTesting(port) {
    return axios.delete(`localhost://${port}/hello`);
  }
}

export default TestingService;
