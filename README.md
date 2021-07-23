# Movie App 만들기
- [영화진흥위원회 api](http://www.kobis.or.kr/kobisopenapi/)
- [네이버 영화검색 api](https://developers.naver.com/docs/search/movie/)
- [scss 스타일 작성](https://sass-lang.com/guide)
- [express Nodejs server](https://expressjs.com/ko/starter/installing.html)
- CRA 로 생성한 react 어플리케이션
- [fetch 비동기 콜 요청](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch)
- Class Component 로 만들기
- 검색기능
- 키워드 검색
- 영화 상세정보보기 모달

### setting
설치
```bash
npx create-react-app app-name
```

필요없는 파일 제거
```bash
src/logo.svg
src/App.test.js
src/App.css
src/index.css
public/logo192.png
public/logo512.png
```

패키지 파일 설치
```bash
yarn add react-router-dom
yarn add node-sass

npm install react-router-dom --save
npm install node-sass --save
```

환경변수 설정
```bash
.env.development.local 파일 생성

`REACT_APP_MOVIE_KEY={key_number}`  영화 진흥 위원회에서 발급받은 키값을 환경변수로 설정  
`MOVIE_BASE_URI=http://kobis.or.kr/kobisopenapi/webservice/rest/movie` 영화 진흥위원회 base api 주소
```

jsconfig.json 설정
```js
{
  "compilerOptions": {
    "baseUrl": "./src"
  }
}
```

폴더 및 파일생성
```bash
src/components
- Button/index.js
- Input/index.js
- InputButton/index.js

src/Pages
- Home/index.js
- MovieSearch/index.js

src/styles
- global.scss

src/utils
- callApi.js
```



## heroku 배포
