import s from './Filter.module.css';
const Filter = ({ value, onChange }) => {
  return (
    <div className={s.filter}>
      <h1>Contacts:</h1>
      <label>
        Find contacts by name:
        <input type="text" name="name" value={value} onChange={onChange} />
      </label>
    </div>
  );
};

export default Filter;
