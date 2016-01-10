const React = require('react');
const { connect } = require('react-redux');

const userActions = require('../actions/userActions.js');
const EmailInput = require('../components/emailInput.js');
const NameInput = require('../components/nameInput.js');
const PhoneInput = require('../components/phoneInput.js');

const userForm = React.createClass({
  render: function() {
    const user = this.props.user;
    const validation = {
      messages: user.validationMessages,
      validate: this.props.validate
    };

    const handleSave = e => {
      e.preventDefault();
      this.props.validate('all');
    };

    return (
      <div>
        <h1>{'JSVerified Form'}</h1>
        <form>
          <NameInput text={ user.name } handler={ this.props.updateName } validation={ validation } />
          <EmailInput email={ user.email } handler={ this.props.updateEmail } validation={ validation } />
          <PhoneInput phone={ user.phone } handler={ this.props.updatePhone } validation={ validation } />
          <button onClick={ handleSave } type='submit'>Save</button>
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
  updatePhone: userActions.updatePhone,
  validate: userActions.validate
};

module.exports = connect(mapStateToProps, dispatchProps)(userForm);
