import Api from "./API";

export default async function apiFetchPrediction(photo, index) {
    let image = await fetch(photo);
    image = await image.blob();
    image = new File([image], "image"); 
    
    return await Api.getPrediction(image, index);
}