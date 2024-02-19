import React, { Component } from 'react';
import {
  ButtonAdd,
  Form,
  SearchInput,
  SearchWrapper,
} from './ContactForm.styled';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContact(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <SearchWrapper>
          {' '}
          Name
          <SearchInput
            type="text"
            name="name"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </SearchWrapper>
        <SearchWrapper>
          {' '}
          Number
          <SearchInput
            type="tel"
            name="number"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </SearchWrapper>
        <ButtonAdd type="submit">Add contact</ButtonAdd>
      </Form>
    );
  }
}
