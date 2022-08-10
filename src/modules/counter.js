// 액션 타입
export const INC_COUNT = "INC_COUNT";
export const DEC_COUNT = "DEC_COUNT";

// 액션 생성 함수
export function incCount(diff) {
  return {
    type: INC_COUNT,
    payload: {diff}
  }
}

export function decCount(diff) {
  return {
    type: DEC_COUNT,
    payload: {diff}
  }
}

// 초기값
const initialState = { number: 0 };

// 리듀서
export default function count(state = initialState, action) {
  switch (action.type) {
    case INC_COUNT:
      return {number: state.number + action.payload.diff}
    case DEC_COUNT:
      return {number: state.number - action.payload.diff}
    default:
      return state
  }
}