import { useState } from 'react';

const About = () => {
  const [list, setList] = useState([1, 2, 3, 4]);
  return (
    <div>
      <h1>About</h1>
      <header>header</header>
      {list.filter((v) => v !== 3)}
    </div>
  );
};

export default About;
