import Hello from "./Components/Hello";
import HelloProps from "./Components/HelloProps";
import Time from "./Components/Time";
import Resume from "./Components/Resume";
import ColorText from "./Components/ColorText";

import test, { test2 } from "./Components/test";

function App() {
  // test();
  // test2();

  return (
    <div>
      <Hello name="gary" />
      <Time />
      <HelloProps name="gyugyeong" age={26} someFunc={() => 'awesome!!!'} someJSX={<img src="https://picsum.photos/id/237/200/300" />} someArr={[1, 2, 3]} someObj={{ one: 1 }}/>
      <Resume name="GG" hello="안녕하세요" hobby="넷플릭스 보기" food="해산물" color="skyblue" />
      <ColorText color="red"/>
      <ColorText color="green"/>
      <ColorText color="blue"/>
    </div>
  );
}

export default App;