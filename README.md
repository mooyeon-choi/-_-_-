# 2024년 (주) 두번째 프론트엔드 개발자 채용 과제

(주) 두번째 - 하우스텝/반장창고 프론트엔드 개발자 채용 과제 코드입니다.

## 코드 실행

### package install

```bash
npm install
```

### json-server 실행

```bash
npm run server
```

### Client 개발모드 실행

```bash
npm run dev
```

## 폴더 구조

```
public/
└ (이미지 파일)
src/
├ app/
│ ├ complete/  * 주문 성공 화면
│ ├ error/     * 주문 실패 화면
│ ├ lib/
│ │ └ registry.tsx   * styled-components 설정 파일
│ ├ order/     * 주문 화면
│ │ └ components/
│ │    └ (navbar, footer 등 주문화면에서 사용하는 공용 컴포넌트)
│ ├ actions.ts * 주문 화면으로 돌아가는 navigator 설정
│ └ not-found.tsx    * 없는 url 처리
├ db/          * 테스트에 사용될 데이터
└ redux/       * redux 설정
  ├ features/
  │ └ cart-slice.ts  * 장바구니 state, reducer 설정
```

## 참고 사항

* 주문 아이템의 합계 수량이 0일 경우 주문 실패 화면으로 이동하도록 하였습니다.