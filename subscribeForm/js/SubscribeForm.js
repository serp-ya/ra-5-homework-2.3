class SubscribeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInputIsValid: false,
      emailInputIsPristine: true
    };
  }

  render() {
    let currentValidationStateClassName;

    if (this.state.emailInputIsPristine) {
      currentValidationStateClassName = '';
    } else {
      currentValidationStateClassName = this.state.emailInputIsValid ? 'is-valid' : 'is-error';
    }

    return (
      <div className="subscribe__form">
        <form className={`form form--subscribe ${currentValidationStateClassName}`}>
          <h4 className="form-title">Подписаться:</h4>
          <div className="form-group">

            <label htmlFor="input-email" className="sr-only">Email</label>
            <input
              type="email"
              id="input-email"
              placeholder="Email"
              className="form-control"
              onChange={this.checkIsValidEmailInput}
            />
            <div className="form-error">Пожалуйста, проверьте корректность адреса электронной почты</div>

            <button type="submit" className="form-next">
              <i className="material-icons">keyboard_arrow_right</i>
            </button>

          </div>
        </form>
      </div>
    );
  }

  checkIsValidEmailInput = (event) => {
    const enteredData = event.currentTarget.value;
    const isValid = event.currentTarget.validity.valid;

    this.setState({emailInputIsValid: isValid});

    if (this.state.emailInputIsPristine && enteredData.length > 2) {
      this.setState({emailInputIsPristine: false});
    }
  };
}