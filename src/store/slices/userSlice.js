import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { rejectedReducer } from "../../utils/store";
import { Octokit } from "octokit";
import CONSTANTS from "../../constants";
const USER_SLICE_NAME = "user";

const octokit = new Octokit({
  auth: CONSTANTS.MY_TOKEN,
});

const initialState = {
  isFetching: true,
  error: null,
  data: null,
};
export const getUser = createAsyncThunk(
  `${USER_SLICE_NAME}/getUser`,
  async (username, { rejectWithValue }) => {
    try {
      let { data } = await octokit.request("GET /user", {
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      if (data.login === username) {
        window.localStorage.userData = JSON.stringify(data);
        console.log(username);
        return data;
      }
    } catch (err) {
      return rejectWithValue({
        data: err?.response?.data ?? "Gateway Timeout",
        status: err?.response?.status ?? 504,
      });
    }
  }
);

const reducers = {
  getUserdata: (state) => {
    state.data = window.localStorage.userData
      ? JSON.parse(window.localStorage.userData)
      : null;
    state.error = null;
    console.log(state.data);
  },
  clearUserStore: (state) => {
    state.error = null;
    state.data = null;
    window.localStorage.removeItem("userData");
  },
};
const extraReducers = (builder) => {
  builder.addCase(getUser.pending, (state) => {
    state.isFetching = true;
    state.error = null;
    state.data = null;
  });
  builder.addCase(getUser.fulfilled, (state, { payload }) => {
    state.isFetching = false;
    state.data = payload;
  });
  builder.addCase(getUser.rejected, rejectedReducer);
};

const userSlice = createSlice({
  name: USER_SLICE_NAME,
  initialState,
  reducers,
  extraReducers,
});

const { actions, reducer } = userSlice;

export const { clearUserStore, getUserdata } = actions;

export default reducer;
