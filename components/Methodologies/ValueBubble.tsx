import { useState } from "react";
import { useRecoilState } from "recoil";
import { LifeValueState } from "states/Methodologies/LifeValueState";


export const ValueBubble = ({key, value, styles}: any) => {   
    const [lifeValues, setLifeValue] = useState(false);
    const [valueState, setValuesState] = useRecoilState(LifeValueState);

    const valueSelection = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
    
        /*var {
          innerText, style
        }: HTMLDivElement = event.currentTarget;*/
    
        // Add value to
        if (valueState.includes(value)) {
            // Remove value
            setLifeValue(false);
        } else {
            setLifeValue(true);
            // add value
            setValuesState((oldValuesList:string[]) => [
                ...oldValuesList, value
            ]);    
        }
    
      };
    return (<div key={key} onClick={valueSelection} className={styles.valuecircle} style={lifeValues ? {
        background: '',
        border: '',
        color: 'white'
    }: {

    }}>{`${value}`}</div>)
}

// Bubble Objects

