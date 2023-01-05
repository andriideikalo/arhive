import PropTypes from 'prop-types';
// import React from 'react';
import { ProfStyles } from './Profile.Styles';
import { DescriptionStyles } from './Profile.Styles';
import { StatsStyles } from './Profile.Styles';

export const Profile = ({ users }) => {
  return (
    <ProfStyles>
      <div className="profile">
        <DescriptionStyles>
          <div className="description">
            <img src={users.avatar} alt="User avatar" className="avatar" />
            <p className="name">{users.username}</p>
            <p className="tag">@{users.tag}</p>
            <p className="location">{users.location}</p>
          </div>
        </DescriptionStyles>
        <StatsStyles>
          <ul className="stats">
            <li>
              <span className="label">Followers </span>
              <span className="quantity">{users.stats.followers}</span>
            </li>
            <li>
              <span className="label">Views </span>
              <span className="quantity">{users.stats.views}</span>
            </li>
            <li>
              <span className="label">Likes </span>
              <span className="quantity">{users.stats.likes}</span>
            </li>
          </ul>
        </StatsStyles>
      </div>
    </ProfStyles>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
