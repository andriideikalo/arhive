import PropTypes from 'prop-types';
import { TransHistStyles } from './TransactionHistoryStyles';

export const TransactionHistory = ({ items }) => {
  return (
    <TransHistStyles>
      <ul className="frend-list">
        {items.map(({ id, avatar, name, isOnline }) => (
          <li className="item" key={id}>
            <span id={isOnline ? 'online' : 'notonline'}>{isOnline}</span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </li>
        ))}
      </ul>
    </TransHistStyles>
  );
};

TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};

export default TransactionHistory;
