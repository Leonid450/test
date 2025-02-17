import React from "react";
import { connect } from "react-redux";

import styles from "./UserProfile.module.sass";
import { getUserdata } from "../../store/slices/userSlice";
const UserInfo = (props) => {
  const created_at = props.user.created_at;
  const date = new Date(created_at);
  const year = date.getFullYear();

  //уявимо, що  існує список популярних репозиторії, код для списку закоментовано для коректного відображення сторінки
  // const popularRepo = [...props.user.popular_repo];
  // popularRepo.sort((repo1, repo2) =>
  //   repo1["createdAt"] > repo2["createdAt"] ? -1 : 1
  // );
  // popularRepo.splice(9);
  // const PopularRepoList = popularRepo.map((repo) => (
  //   <RepoItem key={repo.created_at} nameOfRepo={repo.nameOfRepo} />
  // ));
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainContainer}>
        <header>
          <div>
            <h2>{props.user.login}</h2>
            <h3>Passionate GitHub user</h3>
          </div>
        </header>
        <article className={styles.articleContainer}>
          <div className={styles.articleItem}>
            <div className={styles.headerItem}>
              <h3>GitHub Profile</h3>
            </div>
            <p>
              On GitHub as an early adopter since {year} , {props.user.login}
              is a developer with {props.user.public_repos} public repositories
              and {props.user.followers} followers.
            </p>
          </div>
          <div className={styles.articleItem}>
            <div className={styles.headerItem}>
              <h3>Website</h3>
            </div>
            <p>{props.user.html_url}</p>
          </div>{" "}
          <div className={styles.articleItem}>
            <div className={styles.headerItem}>
              <h3>Languages</h3>
            </div>
            <div className={styles.languagesList}>
              <div className={styles.languagesItem}>
                Ruby {props.user.procent_of_language}%
              </div>
              <div className={styles.languagesItem}>
                Emacs Lisp {props.user.procent_of_language}%
              </div>
              <div className={styles.languagesItem}>
                JavaScript {props.user.procent_of_language}%
              </div>
              <div className={styles.languagesItem}>
                Python {props.user.procent_of_language}%
              </div>
              <div className={styles.languagesItem}>
                CoffeeScript {props.user.procent_of_language}%
              </div>
              <div className={styles.languagesItem}>
                Objective-C {props.user.procent_of_language}%
              </div>
              <div className={styles.languagesItem}>
                HTML {props.user.procent_of_language}%{" "}
              </div>
              <div className={styles.languagesItem}>
                Io {props.user.procent_of_language}%
              </div>
              <div className={styles.languagesItem}>
                C {props.user.procent_of_language}%
              </div>
            </div>
          </div>{" "}
          <div className={styles.articleItem}>
            <div className={styles.headerItem}>
              <h3>Popular Repositories</h3>
            </div>
            {/* <ul>{PopularRepoList}</ul> */}
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
  );
};
// function RepoItem({ nameOfRepo }) {
//   return (
//     <li>
//       <p>{nameOfRepo}</p>
//     </li>
//   );
// }
const mStP = (state) => ({
  user: state.userStore.data,
});

const mDtp = (dispatch) => ({
  getUserdata: () => dispatch(getUserdata()),
});

export default connect(mStP, mDtp)(UserInfo);
