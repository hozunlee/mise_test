import { atom } from "recoil";

const doingState = atom({
    key: "doingState",
    default: [],
});

const doneState = atom({
    key: "doneState",
    default: [],
});

const changeWordState = atom({
    key: "changeWordState",
    default: false,
});

const allShowWordState = atom({
    key: "showWordState",
    default: false,
});

export { doingState, doneState, changeWordState, allShowWordState };
