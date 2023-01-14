import { atom } from "recoil";

// 학습 중 state
const doingState = atom({
    key: "doingState",
    default: [],
});

// 학습 완료 state
const doneState = atom({
    key: "doneState",
    default: [],
});

// 영단어 <-> 뜻 표시 변환 state
const changeWordState = atom({
    key: "changeWordState",
    default: false,
});

// 모든단어 표시 state
const allShowWordState = atom({
    key: "showWordState",
    default: false,
});

export { doingState, doneState, changeWordState, allShowWordState };
