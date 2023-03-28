import React from 'react';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import PhoneBookList from './PhoneBookList';
import Form from './Form';
import Filter from './Filter';

export class App extends Component {
  state = {
    phoneList: [
      { id: 'id-1', name: 'Tony Stark', number: '459-12-56' },
      { id: 'id-2', name: 'Stephen Rogers', number: '443-89-12' },
      { id: 'id-3', name: 'Bruce Banner', number: '645-17-79' },
      { id: 'id-4', name: 'Thor Odinson', number: '227-84-62' },
      { id: 'id-5', name: 'Natasha Romanoff', number: '207-91-27' },
      { id: 'id-6', name: 'Clint Barton', number: '564-92-48' },
    ],
    filter: '',
  };
  handleFormSubmit = ({ name, number }) => {
    const { phoneList } = this.state;

    console.log(name, number);

    const addItemBook = {
      id: nanoid(),
      name: name,
      number: number,
    };

    if (phoneList.find(item => item.name === addItemBook.name)) {
      return alert(`${addItemBook.name}  is olrady in contacts`);
    }
    this.setState(prevState => ({
      phoneList: [...prevState.phoneList, addItemBook],
    }));
  };

  deleteItemBook = phoneId => {
    this.setState(prevState => ({
      phoneList: prevState.phoneList.filter(
        phoneListItem => phoneListItem.id !== phoneId
      ),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });

    const { phoneList, filter } = this.state;

    return phoneList.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  getVisibleFilter = () => {
    const { phoneList, filter } = this.state;

    return phoneList.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;

    const filteredPhonebookList = this.getVisibleFilter();

    return (
      <>
        <Form onSubmit={this.handleFormSubmit} />

        <Filter value={filter} onChange={this.changeFilter} />
        <PhoneBookList
          phoneList={filteredPhonebookList}
          onDeletePhoneListItem={this.deleteItemBook}
        />
      </>
    );
  }
}
