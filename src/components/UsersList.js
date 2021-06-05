import { Link } from "react-router-dom";
const UsersList = ({ users }) => {
  return (
    <div className="user-list">
      {users &&
        users.map((user) => (
          <div className="user-card" key={user.id}>
            <img src={user.avatar_url} alt="" />
            <div className="info">
              <h3>{user.login}</h3>

              <Link to={`/userdetails/${user.id}`}>
                <button className="detail-button">Details</button>
              </Link>

              <p>
                <a href={user.html_url} target="_blank" rel="noreferrer">
                  See on Github <i className="fa fa-github"></i>
                </a>
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default UsersList;
