친구코드 등록/검색/삭제 소스
======================

## 1. 개요
채팅 자동응답 봇(Automatic ChatBot, ACB)의 7번째 소스코드</p>
Copyright (c) 2022, Nev_Lin</p>
이 코드는 무료로 배포되는 소프트웨어입니다. 소프트웨어의 양도자는 자유 소프트웨어 재단이 발행하는 GNU 일반 공중 사용 허가서의 2개 이상 버전을 임의로 선택하고 규정에 따라 프로그램을 수정하거나 재배포할 수 있습니다. 이 오픈 소스 코드는 유용하게 사용될 수 있으리라는 희망으로 배포되지만, 특정 목적에 대한 적합성 여부나 판매용 사용 여부의 묵시적 보증 등 어떠한 형태의 보증도 제공하지 않습니다.

## 2. 친구코드 등록 방법
### 2.1 본텐도(제 1계정) 등록 입력 순서
	1. 주민대표 이름
	2. 닌텐도 아이디(친구요청 시 상대방에게 보이는 이름)
	3. 친구코드
#### (ex) 네비링 / Nev_Lin / 1234-5678-2345
  
  슬래시(/)입력 주위의 공백은 입력해도 되고 생략해도 되며,
  
  친구코드는 하이픈(-)입력 여부와 상관없이 어떠한 방식으로 입력하든 12자리의 숫자만 성립하면 됩니다.

### 2.2 부텐도(제 2계정) 등록 입력 순서
	1. 부텐도 주민대표 이름
	2. 부텐도 아이디(친구요청 시 상대방에게 보이는 이름)
	3. 부텐도 친구코드
  4. 본텐도(제 1계정)의 주민대표 이름
#### (ex) 네비링부텐도 / Nev_Lin2 / 1234-2345-3456 / 네비링
  
  본텐도와 부텐도의 주민대표 이름이 같더라도 상관없습니다.
### 2.3 3텐도 이상 등록 입력 순서
	1. 주민대표 이름
	2. 아이디(친구요청 시 상대방에게 보이는 이름)
	3. 친구코드
  4. 본텐도(제 1계정)의 주민대표 이름
  5. 숫자
#### (ex) 네비링4텐도 / Nev_Lin4 / 1234-2345-3456 / 네비링 / 4

  마지막 숫자는 3텐도이면 3, 4텐도이면 4...와 같은 방식으로 입력합니다.
  
  숫자가 10을 넘어가면 자동으로 오류입력으로 감지하니, 실제 10텐도 이상(?)이신 분들은 직접 관리자에게 연락 바랍니다.
****
## 3. 친구코드 검색 방법
#### ex) 제 1계정 : "네비링", 제 2계정 : "네붕이"일 경우
* 일반적인 검색 방법(제 1계정 주민대표 검색)
```
!친구코드 네비링
```
* 제 2계정 주민대표 검색
```
!친구코드 네붕이
```
```
!친구코드 네비링 부텐도
```
예시에서 제공된 "네비링 부텐도"에서 각 단어를 띄어쓰기하지 않고 입력해도 정상작동합니다.
