const Search = ({ searchUser, searchKey, setSearchKey }) => {
  return (
    <div className="search-wrapper">
      <form onSubmit={(e) => searchUser(e)}>
        <input
          type="text"
          placeholder="Search user"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
