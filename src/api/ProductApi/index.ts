import axiosClient from "api/axiosClient";

export type ProductModel = {
  id: string;
  title: string;
  author: string;
  description: string;
  createdAt: number;
  updatedAt: number;
  imageUrl: string;
};

const baseProductUrl = "/products";

const productApi = {
  getAll: (params?: any) => {
    return axiosClient.get(baseProductUrl, { params });
  },

  get: (id: string) => {
    return axiosClient.get(`${baseProductUrl}/${id}`);
  },
};

export default productApi;
