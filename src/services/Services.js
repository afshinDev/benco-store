import { BASE_URL } from "./baseUrl";

export async function getNewArrival() {
  try {
    const res = await fetch(`${BASE_URL}/products/category/men's clothing`);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function getProducts(URL) {
  try {
    const res = await fetch(`${URL}`);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function getAllCategories() {
  try {
    const res = await fetch(`${BASE_URL}/products/categories`);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function getCategory(category) {
  try {
    const res = await fetch(`${BASE_URL}/products/category/${category}`);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function getProduct(id) {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err.message);
  }
}
