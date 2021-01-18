#왜 함수형 프로그래밍이란 무었일까?
함수형 프로그래밍은 계산을 수학적 함수의 조합으로 생각하는 방식을 말한다. 
이것은 일반적인 프로그래밍 언어에서 함수가 특정 동작을 수행하는 역할을 담당하는 것과는 반대되는 개념으로, 함수를 수행해도 함수 외부의 값이 변경될 수 없다.

|--|명령형 프로그래밍|함수형 프로그래밍|
|------|--------|-----------|
|프로그램이란?|프로그램은 명령의 수행이다|프로그램은 함수의 계산이다|
|중점적 시각|어떻게에 초점|무엇에 초점|
|이론적 배경|튜링 머신|람다 계산식|
|주요 프로그래밍 언어|C , 자바등 대부분의 언어|scheme,haskell,ML,Erang|


#왜 함수형 프로그래밍이 지양되어야할까?
"일반적인 프로그래밍은 그냥 생각하면 되는 것이고, 함수형 프로그래밍은 기존과 다르게 생각하는 방법을 알려줄 것이다. 그러므로 당신은 아마도 예전 방식으로 절대 돌아가지 않을 것이다."


#왜 react hooks를 써야할까?
1. 컴포넌트 사이에서 상태와 관련된 로직을 재 사용하기 어렵다.
   Hook를 사용하면 컴포넌트로 부터 상태 관련 로직을 추상화 할 수 있다. 
   이것은 독립적인 테스트와 재사용이 가능하다. 
   Hook는 계층 변화 없이 상태 관련 로직을 재 사용할 수 있도록 한다. 
   이것은 많은 컴포넌트들이 공유하기 쉬워지는 역할을 한다.
2. 복잡한 컴포넌트들은 이해하기 어렵다.
   Hook를 통해 로직을 기반을 둔 작은 함수로 컴포넌트를 나눌 수 있다(구독 설정 및 데이터를 불러오는 것과 같은 로직
3. Class는 사람과 기계를 혼동 시킨다.
4. 개념적으로 React는 컴포넌트는 항상 함수에 더 가깝다.


'''
ex) class 기반
class ProfilePage extend React.Component{
   showMessage =() => { 
   alert('Followed' + this.props.user);
   };
    
   handleClick = () => {
     setTimeout(this.showMessage, 3000);
   };
   
   render(){
        return <button onClick={this.handleClick}>Follow</button>;
   }
}

ex) hooks 기반 변형
function ProfilePage(props){
    const showMessage = () => {
        alert('Followed' + props.user);
    };
    
    const handleClick = () => { 
        setTimeout(showMessage,3000);
    };
    
    return (<button onClick = {handleClick}>Follow</button>
}

'''


#참고
https://velog.io/@kyusung/%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EC%9A%94%EC%95%BD
https://ehddnjs8989.medium.com/react-hooks-%EC%82%AC%EC%9A%A9%EC%9D%B4%EC%9C%A0-ce03c66a53b0