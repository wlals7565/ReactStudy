//useState를 가져옵니다.
import React, { useState } from 'react';

//왼쪽 버튼과 오른쪽 버튼 중 무슨 버튼을 눌렀는지 확인하는 함수형 컴포넌트입니다.
const RLChecker = () => {
    //구조 분해 할당을 통해 useState()를 통해 만들어진 객체에서 message와 setMessage를 가져옵니다.
    const [message, setMessage] = useState('');
    //이벤트 발생시 수행할 함수들입니다.
    const pressLBTN = () => setMessage('왼쪽 버튼 누름');
    const pressRBTN = () => setMessage('오른쪽 버튼 누름');

    return (
        <div>
            <button onClick={pressLBTN}>왼쪽 버튼</button>
            <button onClick={pressRBTN}>오른쪽 버튼</button>
            <p>{message}</p>
        </div>
    );
}

export default RLChecker;