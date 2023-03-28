import PropTypes from 'prop-types';
import s from './PhoneBookList.module.css';
const PhoneBookList = ({ phoneList, onDeletePhoneListItem }) => {
  return (
    <ul className={s.contactList}>
      {phoneList.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <p>{name}:</p>
          <p className={s.number}>{number}</p>
          <button
            className={s.itemBtn}
            onClick={() => onDeletePhoneListItem(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PhoneBookList;

PhoneBookList.propTypes = {
  phoneList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeletePhoneListItem: PropTypes.func,
};
