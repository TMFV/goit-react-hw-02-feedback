import style from './Statistics.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

class Statistics extends Component {
  static defaultProps = {
    stat: { good: 0, neutral: 0, bad: 0 },
    total: 0,
  };
  static propTypes = {
    stat: PropTypes.object.isRequired,
    total: PropTypes.number,
  };

  render() {
    return (
      <div className={style.statistics}>
        <h2 className={style.statistics__title}>Statistics</h2>
        <ul className={style.statistics__list}>
          {Object.entries(this.props.stat).map(([key, value]) => {
            return (
              <li className={style.statistics__item} key={shortid.generate()}>
                <span
                  className={style.statistics__name}
                  key={shortid.generate()}
                >
                  {key}:{' '}
                </span>
                <span key={shortid.generate()}>{value}</span>
              </li>
            );
          })}
          <li className={style.statistics__item} key={shortid.generate()}>
            <span key={shortid.generate()}>Total: </span>
            <span key={shortid.generate()}>{this.props.total}</span>
          </li>
          <li className={style.statistics__item} key={shortid.generate()}>
            <span key={shortid.generate()}>Positive feedback: </span>
            <span key={shortid.generate()}>
              {this.props.positivePercentage}%
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Statistics;
