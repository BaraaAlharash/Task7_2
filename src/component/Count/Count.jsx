import { useState ,useEffect  } from 'react';
import './Count.css';
import { HiXMark } from "react-icons/hi2";


export const Count = () => {
  const [count, setCount] = useState(0);
  const [decrease, setDecrease] = useState(true); 
  const [ShowPopup, setShowPopup] = useState(false)

  const increaseCount = () => {
    if (decrease) {
      if (count < 1000) {
        if (count >= 100) 
          {
          setCount(count + 100);
        } 
        else if (count >= 10) 
          {
          setCount(count + 10);
        } 
        else 
          {
          setCount(count + 1);
        }
        if (count + 100 >= 1000) 
          {
          setDecrease(false);
        }
      }
    }
  };

  const decreaseCount = () => {
    if (!decrease) {
      if (count > 0) {
        if (count > 100)
          {
          setCount(count - 100)
        }
        else if (count > 10)
          {
          setCount(count - 10);
        } 
        else {
          setCount(count - 1); 
        }
        if (count - 1 <= 0) {
          setDecrease(true);
        }
      }
    }
  };
  useEffect(() => {
    setShowPopup(true);
  }, [])
  
  const closePop_Up=() =>{
    setShowPopup(false)
  }

  useEffect(() => {
    if (count == 0 || count == 10 || count == 100 || count == 1000) {
      setShowPopup(true);
    }
  }, [count]);

  const resultCount =() =>{
    if(count % 1000 == 0 && count!=0){
      return "custombg1000";
    }
    if(count % 100 == 0 && count!=0){
      return "custombg100";
    }
    if(count % 10 == 0 && count!=0){
      return "custombg10";
    }
  }
  return (
    <>
      <div className="Count">
        <div className={`resultCount ${resultCount()}`}>{count} </div>
        <button 
          onClick={increaseCount} 
          className="increaseCount" 
          disabled={!decrease}
        >
          ADD
        </button> 
        {
          !decrease && (
            <button 
              onClick={decreaseCount} 
              className="decreaseCount"
            >
              MINUS
            </button>
          )
        }
      </div>
      { ShowPopup&&(
        <div className='Pop_Up'>
            <h2 className='textPop_Up'>
              {count==0 ? "Welcome To My Task" : `Warning: Your counter has reached ${count}`}
            </h2>
            <button onClick={closePop_Up} className='btnPop_Up'>
              <HiXMark className='iconPop_Up' />
            </button>
        </div>
      )}
    </>
  );
};
