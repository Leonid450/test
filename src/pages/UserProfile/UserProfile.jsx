import React, { useEffect } from "react";
import { connect } from "react-redux";
import styles from "./UserProfile.module.sass";
import Header from "../../components/Header/Header";
import { getUserdata } from "../../store/slices/userSlice";
const UserProfile = (props) => {
  useEffect(() => {
    props.getUserdata();
  }, []);
  console.log(props.user);

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.mainContainer}>
          <header>
            <div>
              <h2>Username</h2>
              <h3>Passionate GitHub user</h3>
            </div>
          </header>
          <article className={styles.articleContainer}>
            <div className={styles.articleItem}>
              <div className={styles.headerItem}>
                <h3>GitHub Profile</h3>
              </div>
              <p>
                On GitHub as an early adopter since 2007, Chris Wanstrath is a
                developer with 107 public repositories and 22437 followers.
              </p>
            </div>
            <div className={styles.articleItem}>
              <div className={styles.headerItem}>
                <h3>Website</h3>
              </div>
              <p>
                On GitHub as an early adopter since 2007, Chris Wanstrath is a
                developer with 107 public repositories and 22437 followers.
              </p>
            </div>{" "}
            <div className={styles.articleItem}>
              <div className={styles.headerItem}>
                <h3>Languages</h3>
              </div>
              <p>
                On GitHub as an early adopter since 2007, Chris Wanstrath is a
                developer with 107 public repositories and 22437 followers.
              </p>
            </div>{" "}
            <div className={styles.articleItem}>
              <div className={styles.headerItem}>
                <h3>Popular Repositories</h3>
              </div>
              <p>
                On GitHub as an early adopter since 2007, Chris Wanstrath is a
                developer with 107 public repositories and 22437 followers.
              </p>
            </div>
            <div className={styles.articleItem}>
              <div className={styles.headerItem}>
                <h3>Contributions</h3>
              </div>
              <p>
                On GitHub as an early adopter since 2007, Chris Wanstrath is a
                developer with 107 public repositories and 22437 followers.
              </p>
            </div>{" "}
            <div className={styles.articleItem}>
              <div className={styles.headerItem}>
                <h3>Organizations</h3>
              </div>
              <p>
                On GitHub as an early adopter since 2007, Chris Wanstrath is a
                developer with 107 public repositories and 22437 followers.
              </p>
            </div>{" "}
            <div className={styles.articleItem}>
              <div className={styles.headerItem}>
                <h3>About This Résumé</h3>
              </div>
              <p>
                On GitHub as an early adopter since 2007, Chris Wanstrath is a
                developer with 107 public repositories and 22437 followers.
              </p>
            </div>
          </article>
          <footer className={styles.footerContainer}></footer>
        </div>
      </div>
    </>
  );
};

const mStP = (state) => ({
  user: state.userStore,
});

const mDtp = (dispatch) => ({
  getUserdata: () => dispatch(getUserdata()),
});

export default connect(mStP, mDtp)(UserProfile);
