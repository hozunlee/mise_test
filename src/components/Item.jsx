import React, { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { doingState, doneState, showWordState } from "../utils/store";
import Card from "./Card";
import SortDetail from "./SortDetail";

const Item = () => {
    const [doing, setDoing] = useRecoilState(doingState);
    const [done, setDone] = useRecoilState(doneState);
    const setChangeWord = useSetRecoilState(showWordState);
    const [openSortModal, setOpenSortModal] = useState(false);
    const [taps, setTaps] = useState(true);

    const tapClick = (e) => {
        if (String(taps) !== e.target.value) setTaps((prev) => !prev);
    };

    /**
     *
     * @param {string} targetkey x 또는 o의 key 값 : o_count | x_count
     * @param {string} target btn count를 바꿀 word 값
     */
    const onClickXandOBtn = (target, targetkey) => {
        const targetIndex = doing.findIndex((item) => item.word === target);
        let temp = [...doing];
        temp[targetIndex] = {
            ...temp[targetIndex],
            [targetkey]: temp[targetIndex][targetkey] + 1,
        };
        setDoing(temp);
    };

    const onClickComplete = (target) => {
        const addArray = doing.find((item) => item.word === target);
        setDone([...done, addArray]);
        const newArray = doing.filter((item) => item.word !== target);
        setDoing(newArray);
    };

    const onClickReturnDoing = (target) => {
        const addArray = done.find((item) => item.word === target);
        setDoing([...doing, addArray]);
        const newArray = done.filter((item) => item.word !== target);
        setDone(newArray);
    };

    const DOINGBUTTONS = [
        {
            id: 0,
            title: "X",
            target: "x_count",
            color: "#ED6A5A",
            onclick: onClickXandOBtn,
        },
        {
            id: 1,
            title: "O",
            target: "o_count",
            color: "#E6EBE0",
            onclick: onClickXandOBtn,
        },
        {
            id: 2,
            title: "암기완료",
            onclick: onClickComplete,
            round: "rounded-r-lg",
            color: "#9BC1BC",
        },
    ];
    const DONEBUTTON = [
        {
            id: 0,
            title: "재학습",
            color: "#36C9C6",
            onclick: onClickReturnDoing,
        },
    ];

    const onOpenSortModalHandler = () => {
        setOpenSortModal((prev) => !prev);
    };
    return (
        <div>
            <div className="flex justify-between">
                <ul>
                    <button value={true} onClick={(e) => tapClick(e)}>
                        학습중
                    </button>
                    <button value={false} onClick={(e) => tapClick(e)}>
                        암기완료
                    </button>
                </ul>
                <div className="flex m-1">
                    <div className="m-1 p-1">
                        <i
                            onClick={onOpenSortModalHandler}
                            className="ri-arrow-up-down-line"
                        ></i>
                    </div>
                    <div className="m-1 p-1">
                        <i
                            onClick={() => setChangeWord((prev) => !prev)}
                            className="ri-shuffle-line"
                        ></i>
                    </div>
                </div>
            </div>

            {taps
                ? doing.length > 0 &&
                  doing.map((item) => (
                      <Card
                          key={item.word}
                          data={item}
                          BUTTONS={DOINGBUTTONS}
                      />
                  ))
                : done.length > 0 &&
                  done?.map((item) => (
                      <Card key={item.word} data={item} BUTTONS={DONEBUTTON} />
                  ))}
            {openSortModal && (
                <SortDetail setHandleModal={onOpenSortModalHandler} />
            )}
        </div>
    );
};

export default Item;
