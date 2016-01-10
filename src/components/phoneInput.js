const React = require('react');

module.exports = React.createClass({
  render: function() {
    const {messages, validate} = this.props.validation;
    const invalid = messages.phone && messages.phone.length > 0;

    return (
      <div className={ `form-group${invalid ? ' invalid' : ''}` }>
        <label htmlFor='number'>Phone number</label>
        <div className='phone-number'>
          <input id='prefix' type='text' value={ this.props.phone.prefix } onChange={ this.props.handler }/>
          <input id='number' type='text' value={ this.props.phone.number } onChange={ this.props.handler } onBlur={ validate.bind(this, 'phone') } />
        </div>
        {invalid ? <p className='message'>{ messages.phone.join(', ') }</p> : null}
      </div>
    );
  }
});
