import PropTypes from 'prop-types';
import { FrendStyles } from './FriendListStyles';

export const FriendList = ({ friends }) => {
  return (
    <FrendStyles>
      <ul className="frend-list">
        {friends.map(({ id, avatar, name, isOnline }) => (
          <li className="item" key={id}>
            <span id={isOnline ? 'online' : 'notonline'}>{isOnline}</span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </li>
        ))}
      </ul>
    </FrendStyles>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default FriendList;
