# 책로그 Chaeklog - Back
- 프로젝트 이름: 책로그 Chaeklog
- 개발 인원: 1명
- 개발 기간: 2022.06.07 ~ 2022.06.20
- 기술 스택: JavaScript, React
- 배포: AWS - EC2
- [백 레포](https://github.com/jahnx/chaeklog-back)
- [명세서 겸 회고록](https://velog.io/@jahnx/%EC%B1%85%EB%A1%9C%EA%B7%B8-Chaeklog)


## preview
### 회원가입, 로그인
![](https://velog.velcdn.com/images/jahnx/post/7b51c3b1-4cf0-4d2f-acf3-1dc34f626f57/image.gif)

첫페이지가 로그인페이지로 기본적인 기능을 사용하기 위해선 회원이어야 합니다.

### 책 검색 후 기록 생성
![](https://velog.velcdn.com/images/jahnx/post/ec544899-0a87-4948-898f-f9f8fd94c696/image.gif)

읽은 책, 혹은 읽을 책을 검색하여 날짜를 선택한 후 추가합니다.. 
시작 날짜는 필수이며 완독날짜는 입력하지 않아도 됩니다.

### 기록 상세보기 및 독서 기간 수정
![](https://velog.velcdn.com/images/jahnx/post/917ba55a-503d-4842-95b4-62e3be71d149/image.gif)

디테일 페이지에서 상단 수정하기를 누르면 독서 기간 수정이 가능하며 수정한후 완료버튼을 클릭해야 합니다.

### 필사 생성
![](https://velog.velcdn.com/images/jahnx/post/e5187413-1776-421c-8354-0f826765a7bd/image.gif)

필사를 하기위해서 하단 ➕ 버튼을 클릭하면 입력창이 나타납니다. 
페이지는 숫자만 입력하면 되고 마음에 드는 문장을 적어준 후 저장버튼을 클릭합니다.

### 필사 삭제
![](https://velog.velcdn.com/images/jahnx/post/4f2e9f80-18c3-43eb-98a3-c90862aa78ca/image.gif)

삭제 버튼을 클릭하면 해당 필사가 삭제됩니다.

### 필사 수정
![](https://velog.velcdn.com/images/jahnx/post/0fc34277-2ab8-4d4c-b21d-f840cc958d6d/image.gif)

수정하고 싶은 페이지나 문장에 커서를 놓고 클릭하면 수정이 가능한 input으로 바뀌게 되며 수정 한 후 다시 저장버튼을 클릭하면 수정됩니다.

### 책 기록 삭제
![](https://velog.velcdn.com/images/jahnx/post/b14d322a-2657-4e75-868d-2f2087a2d079/image.gif)

상단에 삭제버튼을 클릭하면 기록한 책이 삭제됩니다.

### 로그아웃
![](https://velog.velcdn.com/images/jahnx/post/082257a0-1750-481d-9045-7f1c48d68c5b/image.gif)

로그아웃 버튼을 클릭하면 초기 로그인 페이지로 돌아가게 됩니다.

#### 부족한 반응형
![](https://velog.velcdn.com/images/jahnx/post/feffee98-0799-4d82-a81d-4029df88c279/image.gif)

카드형식이라 반응형까지 구현하면 좋을것 같다는 생각에 간단한 반응형을 목록페이지와 상세페이지에 깨지지 않을 정도로만 구현해보았습니다.
하지만 현재 쓰고 있는 브라우저(웨일)에서는 정상작동하는데 사파리에서는 제대로 작동하지 않고있습니다. 이부분은 추후 리팩토링시 수정할 예정입니다.
