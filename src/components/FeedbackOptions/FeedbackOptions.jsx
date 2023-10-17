import { BlockButtons } from "./feedbackOptions.styled"

 export const RenderFeedbackOpn = ({title,onLeaveFeedback,options}) =>{  //onClickGood,onClickNeutral,onClickBad
    return <div>
        <h2>{title}</h2>
        <BlockButtons>
            {options.map(option =>{
             return <button 
             key={option}
                onClick={() => onLeaveFeedback(option)}>
                {option}
            </button>
            })}
        

        
        </BlockButtons>
    </div>
}