# one-tooth-template

해당 template 프로젝트는 기본적으로 React를 이용해 구현되어 있습니다. Class 방식이 아닌 FP(Functional Programming)으로 Hooks를 이용해 상태관리를 합니다. 상태관리 미들웨어로는 redux를 사용합니다.

## 1. 추가 기술스택

### 1-1. 미들웨어

`redux`

## 2. 폴더링

기본적인 폴더링은 아래와 예시와 같이 component와 src 폴더로 나뉘어 집니다.

```shell
one-tooth-template
	...
├─src
│  ├─components(공통)
│      ├─containers
│      ├─css
│  ├─pages
|     ├─child (공통이 아니면서 page가 독립적이지 않은)
│  ├─index.tsx
   └─...

```

`components` : 화면에 들어갈 세부적인 component들과 필요한 Logic과 함께 단일 파일내에 담기게 됩니다.

`pages` : 실제 화면에 rendering되는 파일들이며 route구조와 동일하게 폴더링 됩니다. 
			이는 추구 다른 frameworks (예: nextJS나 GatsbyJS)로 변경 시 유용하도록 하기 위함 입니다. view역할을 합니다.

