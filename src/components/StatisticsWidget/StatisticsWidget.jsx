import { useState, useEffect } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { StatisticList } from 'components/StatisticsList/StatisticsList';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export default function StatisticsWidget() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const [total, setTotal] = useState(0);
  const [rate, setRate] = useState(0);

  const methodUp = method => {
    setState(prevState => ({
      ...prevState,
      [method]: prevState[method] + 1,
    }));
    setTotal(() => total + 1);
  };
  const { good, neutral, bad } = state;

  useEffect(() => {
    setRate(Math.round((good / total) * 100));
  }, [good, total]);

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={methodUp}
        />
      </Section>
      <Section title={'Statistics'}>
        {total ? (
          <StatisticList
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={rate}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
