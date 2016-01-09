const React = require('react');
const { connect } = require('react-redux');

const userActions = require('../actions/userActions.js');
const EmailInput = require('../components/emailInput.js');
const NameInput = require('../components/nameInput.js');
const PhoneInput = require('../components/phoneInput.js');

function handleSave(user, e) {
  e.preventDefault();

  console.log(user);
}

const userForm = React.createClass({
  render: function() {
    const user = this.props.user;

    return (
      <div>
        <h1>{'JSVerified Form'}</h1>
        <form>
          <NameInput text={ user.name } handler={ this.props.updateName } />
          <EmailInput email={ user.email } handler={ this.props.updateEmail } />
          <PhoneInput phone={ user.phone } handler={ this.props.updatePhone } />
          <button onClick={ handleSave.bind(this, user) } type='submit'>Save</button>
        </form>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {user: state};
}

const dispatchProps = {
  updateName: userActions.updateName,
  updateEmail: userActions.updateEmail,
  updatePhone: userActions.updatePhone
};

module.exports = connect(mapStateToProps, dispatchProps)(userForm);
