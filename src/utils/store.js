import { atom } from "recoil";

const doingState = atom({
    key: "doingState",
    default: [],
});

const doneState = atom({
    key: "doneState",
    default: [],
});

const showWordState = atom({
    key: "showWordState",
    default: false,
});

export { doingState, doneState, showWordState };
