1. dialogflow로 기본 기능 구현
2. React로 프론트엔드 구현
3. routing으로 @가수명 입력하면 해당 라우팅(크롤링) 함수로 들어가게 구현
4. 크롤링 구현 (네이버TV 최신 영상 3개 json으로 가져오기)
5. json파일 카드로 넘겨주기


---
검색결과가 없을 때 -> 다시 dialogflow 라우터로 넘겨줘서 무슨 말인지 이해하지 못했어요
관련 영상이 3가지 미만일 때 -> 없다고 판단함.
---


node 서버: localhost: 5000
프론트엔드/ localhost: 3000

---- 정리

리덕스 참고: https://velopert.com/3528

dialogflow 
화자의 의도  intent ,사용자가 말하는 것과 dialogflow가 수행해야할 작업간의 매핑을 나타내는 것.
fallback intent : 사용자의 대화가 어떤 intent 와도 매칭되지 않을 때 선택되어지는 intent

화자의 속성 entity
ex. 내일 오후 2시 되나요? 에서 '내일', '오후 2시'를 파라미터로 뽑아내는 것.

문맥 context
내일 오후 2시 되나요? 에서 무엇을 위한 내일 오후 2시인가를 파악하기 위해서 그 전에 대화가 되었던 '수리'라는 것을 기억하는 것을 의미함

uuid 제대로 이해하고 다시 작성하기




-----
001 - welcome
002 - 인사
003 - @'가수명' 
-> 해당 가수명으로 크롤링을 했을 때 null이 3개이상 나오면 가수명이 없다고 판단함.
-> 만약 가수가 아니더라도 크롤링 시 해당되는 내용이 3개 이상 나오면 해당 내용을 리턴함.
-----

