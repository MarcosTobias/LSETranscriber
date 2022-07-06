class API {
    constructor() {
        this.apiEndPoint = "http://localhost:5000";
    }

    async getPrediction(image, index) {
        const formData = new FormData();

        formData.append("image", image);
        formData.append("index", index.toString());

        const response = await fetch(`${this.apiEndPoint}/predict`,
            { method: "POST", body: formData });


        const res = await response.json();

        return res;
    }
}

const Api = new API();
export default Api;