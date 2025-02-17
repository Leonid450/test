import React, { useEffect } from "react";
import { connect } from "react-redux";

import Header from "../../components/Header/Header";
import { getUserdata, clearUserStore } from "../../store/slices/userSlice";
import UserInfo from "./UserInfo";
const UserProfile = (props) => {
  const { getUserdata, user } = props;

  useEffect(() => {
    if (!user) {
      getUserdata();
    }
  }, []);

  if (user)
    return (
      <>
        <Header />
        <UserInfo user={props.user} />
      </>
    );
};

const mStP = (state) => ({
  user: state.userStore.data,
});

const mDtp = (dispatch) => ({
  getUserdata: () => dispatch(getUserdata()),
  clearUserStore: () => dispatch(clearUserStore()),
});

export default connect(mStP, mDtp)(UserProfile);
