const express = require('express') //express 라이브러리 사용
const app = express()              //express 라이브러리 사용

//서버 띄우는 코드
//내 컴퓨터 PORT 하나 오픈하는 문법
app.listen(8080, () => {
    console.log('http://localhost:8080 에서 서버 실행중')
})

//간단한 서버 기능 main페이지에 방문시 반갑다
app.get('/', (요청, 응답) => {
    응답.sendFile(__dirname + '/index.html')
})



//누가 이런 URL을 접속하면
app.get('/news', (요청, 응답) => {
    응답.send('오늘 비옴')
})

app.get('/shop', (요청, 응답) => {
    응답.send('쇼핑페이지임')
})

app.get('/about', (요청, 응답) => {
    응답.sendFile(__dirname + '/intro.html')
})