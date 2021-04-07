import style from './FeedbackOptions.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  static defaultProps = {
    options: [],
  };
  static propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className={style.feedback}>
        <h1 className={style.feedback__title}>Please leave feedback</h1>
        <div className={style.feedback__buttons}>
          {this.props.options.map(btn => (
            <button
              className={style.feedback_buttons}
              value={btn}
              key={btn}
              type="button"
              onClick={e => this.props.onLeaveFeedback(e)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default FeedbackOptions;
