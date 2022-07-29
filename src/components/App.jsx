import React from 'react';
import { Component } from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const options = [
  { title: 'Good', name: 'good' },
  { title: 'Neutral', name: 'neutral' },
  { title: 'Bad', name: 'bad' },
];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonClick = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state);
    return total.reduce((acc, value) => (acc += value), 0);
  };

  countPositiveFeedbackPercentage = () => {
    let positivePercent = this.countTotalFeedback();

    return ((this.state.good / positivePercent) * 100).toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onButtonClick}
        />
        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positive={this.countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    );
  }
}

export default App;
