import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type Address = {
  id: number;
  fullName: string;
  phone: string;
  city: string;
  postalCode: string;
  country: string;
  address: string;
  label: string;
  isDefault: boolean;
};

type AddressState = {
  addresses: Address[];
};

const initialState: AddressState = {
  addresses: [],
};

const addressSlice = createSlice({
  name: 'address',
  initialState,

  reducers: {
    addAddress: (state, action: PayloadAction<Address>) => {
      state.addresses.push(action.payload);
    },

    updateAddress: (state, action: PayloadAction<Address>) => {
      const index = state.addresses.findIndex(
        (address) => address.id === action.payload.id,
      );

      if (index !== -1) {
        state.addresses[index] = action.payload;
      }
    },

    deleteAddress: (state, action: PayloadAction<number>) => {
      state.addresses = state.addresses.filter(
        (address) => address.id !== action.payload,
      );
    },

    setDefaultAddress: (state, action: PayloadAction<number>) => {
      state.addresses.forEach((address) => {
        address.isDefault = address.id === action.payload;
      });
    },

    clearAddresses: (state) => {
      state.addresses = [];
    },
  },
});

export const {
  addAddress,
  updateAddress,
  deleteAddress,
  setDefaultAddress,
  clearAddresses,
} = addressSlice.actions;

export default addressSlice.reducer;