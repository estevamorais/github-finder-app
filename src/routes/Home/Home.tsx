import { UserProps } from "../../types/user";

import Search from "../../components/Search/Search";
import User from "../../components/User/User";

import { useState } from "react";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (userName: string) => {
    const ras = await fetch(`https://api.github.com/users/${userName}`);

    const data = await ras.json();

    const { avatar_url, login, location, followers, following } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
  };

  return (
    <div>
      <Search loadUser={loadUser} />
    </div>
  );
};

export default Home;
