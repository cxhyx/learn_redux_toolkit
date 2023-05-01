import { useState, useRef, useEffect } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);

  const handleOddClick = () => {
    if (count % 2 == 0) return;
    setCount(count + 1);
  };

  const handleAsyncClick = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  };

  // input
  const inputEl = useRef();

  const [inputValue, setInputValue] = useState('placeholder');

  function useDebounceHook(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
      let timer = setTimeout(() => setDebounceValue(value), delay);
      return () => clearTimeout(timer);
    }, [value, delay]);

    return debounceValue;
  }

  const debounceText = useDebounceHook(inputValue, 500);

  useEffect(() => {
    // ...
    console.info('change', debounceText);
  }, [debounceText]);

  const handleInputChanged = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Home</h1>

      <div>
        <h2> {count}</h2>
        <button onClick={() => setCount(count + 1)}>onClick Add</button>
        <button onClick={() => setCount(count - 1)}>onClick minute</button>
        <button onClick={handleOddClick}>onClick if Odd</button>
        <button onClick={handleAsyncClick}>onClick async</button>
      </div>

      <div>
        <h2>Input</h2>
        <input
          value={inputValue}
          // onChange={debounce(handleInputChanged, 1000)}
          onChange={handleInputChanged}
          ref={inputEl}
        />
      </div>

      <span>{inputValue}</span>
    </div>
  );
};

export default Home;
