import React, { Component } from 'react';
import FeedbackOptions from './components/feedbackOptions/feedbackOptions';
import Section from './components/Section/section';
import Statistics from './components/statitics/statistics';
import Notification from './components/Notification/notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback() || 1;
    return Math.round((good / total) * 100);
  };
  onHandleFeedback = e => {
    if (e.target.nodeName !== 'BUTTON') return;
    const key = e.target.name;
    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    });
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onHandleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              {...this.state}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
