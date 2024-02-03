import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = "https://65babcceb4d53c0665538e25.mockapi.io/api";

export const getBrands = async () => {
  try {
    const { data } = await axios.get(`/brands`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getAllAdverts = createAsyncThunk(
  "adverts/getAdverts",
  async (page, thunkAPI) => {
    try {
      const { data } = await axios.get(`/adverts?page=${page}&limit=12`);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getAdvertById = async (id) => {
  try {
    const { data } = await axios.get(`/adverts`, {
      params: {
        id: id,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const fetchFilteredAdverts = createAsyncThunk(
  "adverts/filteredAdverts",
  async ({ make, rentalPrice }, thunkAPI) => {
    const filter =
      (make !== null ? { make } : {}) ||
      (rentalPrice !== null ? { rentalPrice } : {});

    try {
      const response = await axios.get(`/adverts/${filter}`);
      toast.success("We've found a few adverts for your request");
      return response.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
