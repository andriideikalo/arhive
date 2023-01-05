import PropTypes from 'prop-types';
import { FrendItemStyles } from './FriendList.Styles';

export const FriendListItem = ({ friends }) => {
  return (
    <FrendItemStyles>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className="item" key={id}>
          <span id={isOnline ? 'online' : 'notonline'}>{isOnline}</span>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
        </li>
      ))}
    </FrendItemStyles>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default FriendListItem;
