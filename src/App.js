import React, { Component } from 'react';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';



class App extends Component {

    state = {
      good: 0,
      neutral: 0,
      bad: 0
    };

    countTotalFeedback = () => {
      const { good, neutral, bad } = this.state;
      return good+neutral+bad;
    };

    countPositivePercentage = () => {
      const { good } = this.state;
      return ((good * 100) / this.countTotalFeedback());
    }

    onLeaveFeedback = (event) => {
      const name = event.target.name;
      this.setState((prevState) => ({
        [name]:prevState[name] + 1
      }

      ));
    };

    render () {
      const { good, neutral, bad } = this.state;
      const total = this.countTotalFeedback();
      const positivePercentage = Number(this.countPositivePercentage().toFixed());
      const objKey = Object.keys(this.state);

      return (
        <div className="App">
        <Section title='Please leave feedback'>
          <FeedbackOptions options={objKey} onLeaveFeedback={this.onLeaveFeedback}/>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
        </Section>
        </div>
      );
    }
}


export default App;