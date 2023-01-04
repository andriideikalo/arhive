export const Profile = ( { users } ) => {
    return <div>
       <div className="profile">
  <div className="description">
    <img
      src={users.avatar}
      alt="User avatar"
      className="avatar"
    />
    <p className="name">{ users.username}</p>
    <p className="tag">@{users.tag}</p>
    <p className="location">{users.location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{users.stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{users.stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{users.stats.likes}</span>
    </li>
  </ul>
</div>
    </div>;
};