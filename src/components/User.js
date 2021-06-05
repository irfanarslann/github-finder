import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const User = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/user/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw Error("Error while fetching user info from api");
        }
        return res.json();
      })
      .then((data) => {
        setUserData(data);
      })
      .catch((err) => {
        console.log(err);
      });

    fetch(`https://api.github.com/user/${id}/repos?per_page=5&sort=created:asc`)
      .then((res) => {
        if (!res.ok) {
          throw Error("Error while fetching user repos from api");
        }
        return res.json();
      })
      .then((data) => {
        setRepos(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (userData) {
    return (
      <div className="user-container">
        <button type="button" className="btn btn-light">
          <Link to="/">Back to Search</Link>
        </button>

        <div className="user-info">
          <div className="img-container">
            <img src={userData.avatar_url} alt="" />
          </div>
          <div className="content">
            {userData.name ? (
              <h1>{userData.name}</h1>
            ) : (
              <h1>{userData.login}</h1>
            )}
            {userData.name && <p>{userData.login} </p>}
            {userData.location && <p>Location: {userData.location}</p>}
            {userData.company && <p>Compan(ies)y : {userData.company}</p>}
            {userData.twitter_username && (
              <a
                href={`https://twitter.com/${userData.twitter_username}`}
                target="blank"
              >
                Twitter Profile <i className="fa fa-twitter"></i>
              </a>
            )}
            {userData.blog && (
              <p>
                <a href={userData.blog} target="blank">
                  Blog<i className="fa fa-cloud"></i>
                </a>
              </p>
            )}
          </div>
        </div>
        <div className="badge-container">
          <span className="badge bg-primary">
            Followers : {userData.followers}
          </span>

          <span className="badge bg-success">
            Following : {userData.following}
          </span>

          <span className="badge bg-light text-dark">
            Public Repo's : {userData.public_repos}
          </span>
        </div>
        <div className="repo-container">
          <h1>User's public repositories </h1>
          <div className="repos">
            {!repos ? (
              <h2>Loading...</h2>
            ) : (
              repos.map((repo) => {
                return (
                  <div className="repo-info" key={repo.id}>
                    <h4>
                      <a href={repo.html_url} target="blank">
                        {repo.name}
                      </a>
                    </h4>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    );
  }
  return <h1>User Loading</h1>;
};

export default User;
