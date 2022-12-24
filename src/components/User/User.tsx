import styles from "./User.module.css";

import { UserProps } from "../../types/user";

import { MdLocationPin } from "react-icons/md";

const User = ({
  avatar_url,
  login,
  location,
  followers,
  following,
}: UserProps) => {
  return (
    <div className={styles.user}>
      <img className={styles.avatar} src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p className={styles.location}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}
      <div className={styles.stats}>
        <div>
          <p>Followers:</p>
          <p className={styles.statsNumber}>{followers}</p>
        </div>
        <div>
          <p>Following:</p>
          <p className={styles.statsNumber}>{following}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
