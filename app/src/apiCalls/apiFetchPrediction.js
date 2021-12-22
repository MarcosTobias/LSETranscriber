import Api from "../api/API";

export default async function apiFetchPrediction(photo) {
    return await Api.getPrediction(photo);
}