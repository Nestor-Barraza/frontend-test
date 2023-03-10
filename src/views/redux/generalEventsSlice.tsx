import { createSlice } from "@reduxjs/toolkit";

interface GeneralEventsState {
  user_credentials: {
    email: string;
    full_name: string;
    phone: string;
    role: string;
  };
  product: {
    id: string;
    description: string;
    enterpriseNIT: string;
    price: number;
    title: string;
    unitsAvailable: number;
  };
  enterprises: object[];
}

const initialState: GeneralEventsState = {
  user_credentials: {
    email: "",
    full_name: "",
    phone: "",
    role: "",
  },
  product: {
    id: "",
    description: "",
    enterpriseNIT: "",
    price: 0,
    title: "",
    unitsAvailable: 0,
  },

  enterprises: [],
};

const slice = createSlice({
  name: "general_events",
  initialState,
  reducers: {
    getCredentials(
      state,
      {
        payload: { email, full_name, phone, role },
      }: {
        payload: {
          email: string;
          full_name: string;
          phone: string;
          role: string;
        };
      }
    ) {
      return {
        ...state,
        user_credentials: { email, full_name, phone, role },
      };
    },
    getEnterprises(
      state,
      { payload: { enterprises } }: { payload: { enterprises: object[] } }
    ) {
      return {
        ...state,
        enterprises,
      };
    },
    getProduct(
      state,
      {
        payload: {
          id,
          description,
          enterpriseNIT,
          price,
          title,
          unitsAvailable,
        },
      }: {
        payload: {
          id: string;
          description: string;
          enterpriseNIT: string;
          price: number;
          title: string;
          unitsAvailable: number;
        };
      }
    ) {
      return {
        ...state,
        product: {
          id,
          description,
          enterpriseNIT,
          price,
          title,
          unitsAvailable,
        },
      };
    },
    updateProduct(
      state,
      {
        payload: { description, price, title, unitsAvailable },
      }: {
        payload: {
          description: string;
          price: number;
          title: string;
          unitsAvailable: number;
        };
      }
    ) {
      return {
        ...state,
        product: {
          id: state.product.id,
          description,
          enterpriseNIT: state.product.enterpriseNIT,
          price,
          title,
          unitsAvailable,
        },
      };
    },
  },
});

export const { reducer } = slice;

export const { getCredentials, getEnterprises, getProduct, updateProduct } =
  slice.actions;
