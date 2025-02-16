import React from "react";
import styles from "./UserProfile.module.sass";
import Header from "../../components/Header/Header";
const UserProfile = (props) => {
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
        </div>
      </div>
    </>
  );
};

// const mapStateToProps = (state) => {};

// const mapDispatchToProps = (dispatch) => ({

// });

export default UserProfile;
