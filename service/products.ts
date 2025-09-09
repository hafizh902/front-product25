import { metadata } from "@/app/layout";
import { apiFetch } from "@/lib/api";   

export interface Product {
 id ?: number;
 name ?: string;
 description ?: string;
 price ?: number;
 stock ?: number;
 category ?: string;
 created_at ?: string;
 updated_at ?: string;
}

export interface ProductPayload {
  name: string;
  description: string;
  price: number;
  stock: number;
}


// list products
export const getProducts = async (): Promise<Product[]> => {
  const res = await apiFetch<{ status: boolean; message: string; data: Product[]; metadata: any }>("/products");
  return res.data;
}
// detail product
export const getProductDetail = async (id: number): Promise<Product> => {
  const res = await apiFetch<{ status: boolean; message: string; data: Product; metadata: any }>(`/products/${id}`);
  return res.data;
}
// create product
export const createProduct = async (data: ProductPayload) => {
    return apiFetch<Product>(`/products`, {
        method: "POST",
        body: JSON.stringify(data),
    });
}
// update product
export const updateProduct = async (id: number, data: ProductPayload) => {
    return apiFetch<Product>(`/products/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
    });
}
// delete product
export const deleteProduct = async (id: number) => {
    return apiFetch<{ message: string }>(`/products/${id}`, {
    method: "DELETE",
  });
}
