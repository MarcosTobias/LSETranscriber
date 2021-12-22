class API {
    constructor() {
        this.apiEndPoint = "http://127.0.0.1:5000";
    }

    buildHeaders() {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        return headers;
    }

    async getPrediction(body = {}) {
        const response = await fetch(`${this.apiEndPoint}/prediction`,
            { method: "POST", headers: this.buildHeaders(), body: JSON.stringify(body) });

        return await response.json();
    }
}

const Api = new API();
export default Api;