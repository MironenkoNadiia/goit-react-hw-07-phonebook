import React, { Component } from "react";
import { connect } from "react-redux";
import phonebookSelectors from "./redux/phonebook/contacts-selectors";
import phonebookOperations from "./redux/phonebook/phonebook-operations";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import { CSSTransition } from "react-transition-group";
import Loader from "./components/Loader/Loader";


class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className="App">
        {this.props.isLoading && <Loader />}

        <div className="Container">
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames="title"
            unmountOnExit
          >
            <h1>Phonebook</h1>
          </CSSTransition>

          <ContactForm />

          <h1>Contacts</h1>

          <Filter />

          <ContactList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: phonebookSelectors.getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(phonebookOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
