import { atom } from "recoil";

const doingState = atom({
    key: "doingState",
    default: {},
});

const doneState = atom({
    key: "doneState",
    default: [],
});

export { doingState, doneState };
