import {  useState } from "react";
import { RenderFeedbackOpn } from "./FeedbackOptions/FeedbackOptions";
import { RenderStatistic } from "./Statisctic/statictic";
import { Notification } from "./Notification/Notification";

export const App = () =>{
  const [state, setState] = useState({
    good:0,
    neutral:0,
    bad:0
  })
  


 const countTotalFeedback = ({good,neutral,bad}) =>good + neutral + bad;

 const countPositiveFeedbackPercentage= ({good},countTotalFeedback) => Math.round((good * 100)/countTotalFeedback)

 const addFedback =(option)=>{
  console.log(option);
    setState(prevState =>{
      return {
        ...prevState,
        [option]: prevState[option] + 1,
      };
    })
      

  }

  return(
    <main>
     <section>
       <RenderFeedbackOpn
       title='Please leave feedback'
       options={Object.keys(state)}
       onLeaveFeedback={addFedback}
        />
    </section>
    <section>
    <RenderStatistic  
      title='Statistic' 
      good={state.good} 
      neutral={state.neutral} 
      bad={state.bad}
      countFeedback= {countTotalFeedback(state)}
      countPositiveFeedbackPercentage={countPositiveFeedbackPercentage(state, countTotalFeedback(state))}
      />
      <Notification $statusStatistic={state} message="There is no feedback"/>
    </section>
    </main>
  )
}





// export class App extends Component {
// state ={
//   good:0,
//   neutral:0,
//   bad:0
// }
// countTotalFeedback= ({good,neutral,bad}) =>good + neutral + bad;

// countPositiveFeedbackPercentage= ({good},countTotalFeedback) => Math.round((good * 100)/countTotalFeedback);


// addFedback =(option)=>{
//   this.setState((prevState) => {
//     return {
//       [option]: prevState[option] + 1,
//     };
// });
// }
//   render() {
//     const {good,neutral,bad} = this.state
//     return(
//       <main>
//     <section>
//       <RenderFeedbackOpn
//        title='Please leave feedback'
//        options={Object.keys(this.state)}
//        onLeaveFeedback={this.addFedback}
//         />
//     </section>
//     <section>
//     <RenderStatistic  
//       title='Statistic' 
//       good={good} 
//       neutral={neutral} 
//       bad={bad}
//       countFeedback={this.countTotalFeedback(this.state)}
//       countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage(this.state, this.countTotalFeedback(this.state))}
//       />
//       <Notification statusStatistic={this.state} message="There is no feedback"/>
//     </section>
//     </main>
//     )
//   }
// };
