import './App.css';

function App() {
  const name = '라이켓';
  function 함수() {
    return '함수';
  }
  const someStyle = { backgroundColor: "yellow", color: "white" };
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth()+1;
  const date = today.getDate();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  return (
    <div>
      <div>
        <h1 className="h1" style={someStyle}> 안녕 {함수() ? '함수' : 'JSX'}!</h1>
        <h1 className='newClass'>안녕 {name}!</h1>
        <input type="text" style={{ backgroundColor: "red" }} />
      </div>

      <div style={{ backgroundColor: "black", color:"white" }}>
        <h1 style={{color:'red'}}>년 : {year}</h1>
        <h1>월/일 :  {month}/{date}</h1>
        <h1>시간 : {hour}시 {min}분 {sec}초 </h1>
      </div>
    </div>
  );
}

export default App;