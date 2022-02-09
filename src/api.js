import { API_URL } from "./config";

const getAllCategories = async () => {
    const response = await fetch (API_URL + 'categories.php');
    return await response.json();
}

const getMealById = async (idMeal) => {
    const response = await fetch (API_URL + 'lookup.php?i=' + idMeal);
    return await response.json();
}

const getFiltredCategory = async (catName) => {
    const response = await fetch (API_URL + 'filter.php?c=' + catName);
    return await response.json();
}

export {getAllCategories, getMealById, getFiltredCategory};