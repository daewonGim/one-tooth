# 개발1팀 Toy Project Template

해당 Repository는 개발 1팀 Toy Project의 Front End를 위해 만들어 졌으며,
기본 Template 이외에 다양한 Javascript Frameworks나 MiddleWare 들을 추가하여 Template으로 제공하여,
다른 Project에도 활용할 수 있도록 구성되어져 있습니다.

## 1. 기술스택

### 1-1. 언어, Frameworks

​	`javascript(ES6)`,  `typescript`,  `Css`,  `React`

### 1-2. 패키지 설치 관리

​	`yarn`

### 1-3. 기본 사용모듈

 `babel` : 이전 Javascript와 호환되도록 해주는 컴파일러 입니다.
`prettier` : 코드 스타일 통일을 위해 사용합니다.
`undtated-next` :  상태관리를 위한 라이브러리 입니다.

## 2. 추가 기술스택

추가 기술스택의 경우, 자세한 내용은 하위 Template폴더별로 README.md 파일 확인

## 3. Template 설명

기본 템플릿은 Toy Project의 기획에 따라, release-note 와 익명게시판 기능을 제공하며, 기본 디자인은 `material-ui` 를 기반으로 만들어 졌습니다. 이용하는 Framework에 따라 다른 node_modules를 import 하기 때문에, 폴더구조가 상이할 수 있습니다.

> `one-tooth-template` : 기본 템플릿 입니다.
>
> 

## 4. 설치 및 실행 방법

### 4-1. 설치

기본적으로 `yarn`을 사용하여 node_modules를 설치하는 것이 권장됩니다. 

```shell
yarn install
```

### 4-2. 실행

실행의 경우 각각의 템플릿별로 상이하므로 아래 명령으로 실행하는 것이 권장되며, 자세한 내용은 package.json 의 `"scripts": {}` 부분을 참고하시면 됩니다.

```shell
npm run start
```



