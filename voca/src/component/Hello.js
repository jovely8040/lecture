import { useState } from 'react';
import UserName from './UserName';

 export default function Hello(props) { // props를 물려받으면서 App.js에서 입력했던 값이 들어온다
    console.log(props)
    const [name, setName] = useState('Zoey');

    // age값을 변경하고 싶다면 새로운 state 생성해야함
    const [age, setAge] = useState(props.age);
    const msg = age > 19 ? "성인입니다.":"미성년자입니다.";

    return (
        <div>
            <h2 id='name'>
                {name}({age}) : {msg} // age값은 컴포넌트 내부에서 변경 불가능
            </h2>
            <UserName name={name} /> /* {name}은 이 컴포넌트에선 state지만 <UserName />컴포넌트 입장에서는 props. 한 컴포넌트가 가지고 있는 props를 state로 넘길 수 있음 */
            <button
                onClick={()=>{
                    setName(name === 'Zoey' ? 'Jane' : 'Zoey');
                    setAge(age + 1); // 넘겨받은 age값을 변경시키는거 아니라 state값을 변경하는 것
                }}
            >
            Change
            </button>
        </div>
    )
 }