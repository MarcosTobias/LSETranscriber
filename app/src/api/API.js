class API {
    constructor() {
        //this.apiEndPoint = "http://156.35.163.139:5000";
        this.apiEndPoint = "http://192.168.99.103:5000";
    }

    buildHeaders() {
        const headers = new Headers();
        headers.append("Content-Type", "multipart/formdata");
        return headers;
    }

    async getPrediction(body = {}) {
        const formData = new FormData();

        formData.append("image", body);

        const response = await fetch(`${this.apiEndPoint}/predict`,
            { method: "POST", body: formData });


        const res = await response.json();
        console.log(res);

        return res;
    }
}

const Api = new API();
export default Api;