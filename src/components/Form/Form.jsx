import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import s from './Form.module.css';

class Form extends Component {
  state = { name: '', number: '' };

  nameId = nanoid();
  numberId = nanoid();

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameId}>
          Name:
          <input
            className={s.formInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleInputChange}
            id={this.nameId}
          />
        </label>
        <label htmlFor={this.numberId}>
          Number:
          <input
            className={s.formInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleInputChange}
            id={this.numberId}
          />
        </label>
        <button className={s.formBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
