import PropTypes from 'prop-types';
import { FrendStyles } from "./FriendListStyles"



export const FriendList = ( { friends } ) => {
    return (<FrendStyles>
       
  <ul className="frend-list">
{friends.map(({ id, avatar, name, isOnline }) => (
          
         <li
            className="item"
            key={id}
             >
            <span class="status"></span>
  <img class="avatar" src={avatar} alt="User avatar" width="48" />
  <p class="name">{name}</p>
  </li>
  ))}
  </ul>
  </FrendStyles>)
};

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  };

export default FriendList;
