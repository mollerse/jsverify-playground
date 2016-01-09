const React = require('react');
const phoneValidator = require('../validators/phoneValidator.js');

module.exports = React.createClass({
  render: function() {
    const validation = phoneValidator(this.props.phone);
    const invalid = validation.length > 0;

    return (
      <div className={ `form-group${invalid ? ' invalid' : ''}` }>
        <label htmlFor='phone'>Phone number</label>
        <div className='phone-number'>
          <input id='prefix' type='text' value={ this.props.phone.prefix } onChange={ this.props.handler }/>
          <input id='phone' type='text' value={ this.props.phone.number } onChange={ this.props.handler } />
        </div>
        {invalid ? <p className='message'>{ validation.join(', ') }</p> : null}
      </div>
    );
  }
});
