import axios from "axios";
export default class Connection {
  // constructor(
  //   connectionObject = {
  //     ip: process.env.REACT_APP_BACKEND_IP,
  //     port: process.env.REACT_APP_BACKEND_PORT
  //   }
  // ) {
  //   this.connectionObject = { ...connectionObject };
  // }
  /**
   * @param {string} accessToken
   *
   */
  constructor(accessToken, cancelLog) {
    this.cancelLog = cancelLog || false;
    this.accessToken = `Bearer ${accessToken}` || null;
    this.status = { message: "", code: "" };
    const connectionObject = {
      ip: process.env.REACT_APP_BACKEND_HOST,
      port: process.env.REACT_APP_BACKEND_PORT,
    };

    this.connectionObject = { ...connectionObject };
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    this.source = source;
  }
  /**
   * @param {string} baseUrl
   * @param {*} data
   *
   */
  create(baseUrl, data, cancelLog = false) {
    this.cancelLog = cancelLog;
    return this.request("post", baseUrl, data);
  }
  /**
   * @param {string} baseUrl
   * @param {(string | number)} id
   *
   */
  delete(baseUrl, id) {
    return this.request("delete", `${baseUrl}/${id}`);
  }
  /**
   * @param {string} baseUrl
   * @param {*} data
   *
   */
  update(baseUrl, data) {
    return this.request("patch", baseUrl, data);
  }
  /**
   * @param {string} baseUrl
   */
  get(baseUrl, data, cancelLog = false) {
    this.cancelLog = cancelLog;
    return this.request("get", baseUrl, data);
  }

  setData(data = {}) {
    this.data = data;
  }
  getLastRequestData() {
    return this.data ? this.data : null;
  }

  setHeaders(status, headers) {
    this.header = { status, headers };
  }

  getHeaders() {
    return { ...this.header };
  }

  setReportData(data) {
    this.header = { data };
  }

  getReportData() {
    return { ...this.data };
  }

  setStatus(code, message) {
    this.status = { message, code };
  }

  setDataContent(data, code) {
    this.scriptContent = { data, code };
  }

  getDataContent() {
    return { ...this.scriptContent };
  }

  getStatus() {
    return { ...this.status };
  }

  getData() {
    return { ...this.data };
  }
  cancel() {
    this.source && this.source.cancel("Operation canceled by the user.");
  }
  async request(method, url, data) {
    try {
      // const { status, statusText } = [];

      await axios({
        baseURL: `${this.connectionObject.ip}`,
        method,
        url,
        data,
        headers: {
          token: this.accessToken,
        },
      })
        .then((response) => {
          this.setData(response["data"]);
          this.setStatus(response.status, response.headers);
          if (!this.cancelLog) {
            console.log("SUCCESS RESPONSE: ", response.data);
            console.log("SUCCESS CODE: ", response.status);
          }
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log("Request canceled", error.message);
          } else {
            // handle error
          }
          console.log("ERROR RESPONSE: ", error.response.data);
          console.log("ERROR CODE: ", error.response.status);
          this.setData();
          this.setStatus(error.response.status, error.response.data);
        });

      return { data: this.getLastRequestData(), status: this.getStatus() };
    } catch (error) {
      const status = error.message.split(" ")[
        error.message.split(" ").length - 1
      ];
      this.setStatus(status, error.message);
      return { data: error.response?.data, status, statusText: error.message };
    }
  }

  async getContent(url, data, files) {
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    await axios({
      baseURL: `${this.connectionObject.ip}`,
      method: "POST",
      cancelToken: this.source.token,
      url,
      data: formData,
      headers: {
        Authorization: this.accessToken,
        "content-type": "multipart/form-data",
      },
    }).then((response) => {
      console.log(response);
      console.log("SUCCESS RESPONSE: ", response.data);
      console.log("SUCCESS CODE: ", response.status);
      this.setData(response["data"]);
      this.setStatus(response.status, response.headers);
      return response;
    });
  }
}
