import UsersList from "./UsersList";
import { useState, useEffect } from "react";
import Search from "./Search";
const Home = () => {
  const [url, setUrl] = useState(
    "https://api.github.com/users?access_token=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"
  );
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    setIsPending(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.message);
        }
        return res.json();
      })
      .then((data) => {
        if (data.items) {
          setData(data.items);
        } else {
          setData(data);
        }

        setIsPending(false);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  }, [url]);

  const searchUser = (e) => {
    e.preventDefault();
    if (searchKey === "") {
      setUrl(
        "https://api.github.com/users?access_token=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"
      );
    } else {
      setUrl(
        "https://api.github.com/search/users?q=" +
          searchKey +
          "&access_token=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&"
      );
    }
  };

  return (
    <div className="home">
      <Search
        searchUser={searchUser}
        searchKey={searchKey}
        setSearchKey={setSearchKey}
      />
      <div className="userLists">
        {isPending && <h1> Loading...</h1>}
        {!isPending && <UsersList users={data} />}
        {error && console.log(error)}
      </div>
    </div>
  );
};

export default Home;
