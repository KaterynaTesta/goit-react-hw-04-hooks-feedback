import { useState } from 'react';
import FeedbackOptions from './components/feedbackOptions/feedbackOptions';
import Section from './components/Section/section';
import Statistics from './components/statitics/statistics';
import Notification from './components/Notification/notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // const options = ['good', 'neutral', 'bad'];

  const onHandleFeedback = feedback => {
    switch (feedback) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  // countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   const total = good + neutral + bad;
  //   return total;
  // };

  // const countPositiveFeedbackPercentage = () => {
  //   const { good } = this.state;
  //   const total = this.countTotalFeedback() || 1;
  //   return Math.round((good / total) * 100);
  // };
  // onHandleFeedback = e => {
  //   if (e.target.nodeName !== 'BUTTON') return;
  //   const key = e.target.name;
  //   this.setState(prevState => {
  //     return { [key]: prevState[key] + 1 };
  //   });
  // };

  // render() {

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onClick={onHandleFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
}
