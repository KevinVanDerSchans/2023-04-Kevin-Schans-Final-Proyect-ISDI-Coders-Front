import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../models/user";
import { UserRepository } from "../../core/services/user.repository";
import { loginResponse } from "../types/api.response";

export type UsersState = {
  users: User[];
  currentUser: Partial<User>;
  token?: string,
  role?: string | undefined,
  loginError: boolean | null;
};

const initialState: UsersState = {
  users: [] as User[],
  currentUser: {} as Partial<User>,
  token: localStorage.getItem("userToken") as string | undefined,
  role: undefined,
  loginError: null,
};

export const registerUserAsync = createAsyncThunk<
  User,
  { repo: UserRepository; user: Partial<User> }
>("users/register", async ({ repo, user }) => {
  return await repo.register(user);
});

export const loginUserAsync = createAsyncThunk<
  loginResponse,
  { repo: UserRepository;  user: Partial<User> }
>("users/login", async ({ repo, user }) => {
  const result = await repo.login(user);
  localStorage.setItem("userToken", result.token as string);
  return result;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    logoutUser: (state) => ({
      ...state,
      token: undefined,
      loginError: null,
    }),
  },
  extraReducers: (builder) => {

    builder.addCase(registerUserAsync.fulfilled, (state, { payload }) => ({
      ...state,
      users: [...state.users, payload],
      loginError: false,
    }));

    builder.addCase(loginUserAsync.fulfilled, (state, { payload }) => ({
      ...state,
      currentUser: payload,
      token: payload.token,
      role: payload.user.role,

      loginError: false,
    }));

    builder.addCase(loginUserAsync.pending, (state) => ({
      ...state,
      loginError: null,
    }));

    builder.addCase(loginUserAsync.rejected, (state) => ({
      ...state,
      loginError: true,
    }));
  },
});

export const ac = usersSlice.actions;
export default usersSlice.reducer;

