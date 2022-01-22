/*eslint-disable */
import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let[글제목, 글제목변경] = useState(['남자 코트 추천', '가을 여자 코디','겨울 남자 코디'])
  let [따봉, 따봉변경] = useState([0,0,0])
  let [modal,modal변경]=useState(false)
  let [누른제목, 누른제목변경] =useState(0)
  let [입력값, 입력값변경] = useState("")
  function 입력받은값(e){
    입력값변경(e.target.value)
  }

  function 따봉증가(index){
    let 따봉복사 = [...따봉]
    따봉복사[index]+=1
    따봉변경(따봉복사)
  }
  function 제목바꾸기(){
    var newArray =[...글제목]
    newArray.sort()
    글제목변경(newArray)}
  
  return (
    <div className="App">
      <div className='black-nav'>
        <div>
          개발 Blog
        </div>
      </div>
      {글제목.map((data, index)=>{  
          return  (
          <div className='list' key={index}>
              <h3 onClick={()=>{누른제목변경(index)}}>{data} <span onClick={()=>{따봉증가(index)}}>👍</span>{따봉[index]}</h3>
              <p>2월 17일 발행</p>
              <hr/>
          </div>)
        })
      }
        <div className='publish'>
          <input onChange={입력받은값}/>
          <button onClick={()=>{ 글제목변경([...글제목,입력값])}}>저장</button>
        </div>
        
        <button onClick={제목바꾸기}>정렬</button>
        <button onClick={()=>{modal변경(!modal)}}>열고닫기</button>
          {modal===true?<Modal 글제목={글제목} 누른제목={누른제목}/>: null}
      </div>
  );
}

function Modal(props){
  return(
        <div className='modal'>
        <h2>{props.글제목[props.누른제목]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;

/*   var newArray =[...글제목]
    spread 구문으로 deep copy 하는것 
     */

    /*    Component : 첫글자 대문자로 사용, HTML코드 축약해서 사용 장점, 관리편함 ex) Modal
    - 과거 conponent 만드는법
    class Profile extends React.Component {
  constructor(){
    super();
    this.state = { name : 'Kim', age : 30 }
  }

  changeName=()=>{
    this.setState( {name : 'Park'} )
  }

  render(){
    return (
      <div>
        <h3> 저는 { this.state.name } 입니다 </h3>
        <button onClick={ this.changeName }> 버튼 </button>
      </div>
    )
  }
} */