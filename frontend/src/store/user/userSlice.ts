import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';
import { AxiosError } from 'axios';

interface UserData {
  email: string;
  birthday: string;
  name: string;
  cpf: string;
  graduationDate: string;
  cellphone: string;
}

interface UserState {
  loading: boolean;
  error: string | null;
  success: boolean;
  data: unknown | null;
}

const initialState: UserState = {
  loading: false,
  error: null,
  success: false,
  data: null,
};

// Envia os dados para o backend
export const sendUserData = createAsyncThunk(
  'user/sendUserData',
  async (userData: UserData, { rejectWithValue }) => {
    try {
      const response = await api.post('/user', userData); // Ajuste o endpoint se necessário
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      const message =
        (axiosError.response?.data as { message?: string })?.message ||
        (axiosError.response?.data as { error?: string })?.error ||
        axiosError.message ||
        'Falha ao enviar os dados. Tente novamente.';
      return rejectWithValue(message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUserStatus: (state) => {
      state.success = false;
      state.error = null;
      state.data = null;
    },
  },
});

export const { resetUserStatus } = userSlice.actions;
export default userSlice.reducer;
