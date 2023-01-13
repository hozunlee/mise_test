import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { doingState, doneState } from "../utils/store";
import Card from "./Card";

const Item = () => {
    const [doing, setDoing] = useRecoilState(doingState);
    const [done, setDone] = useRecoilState(doneState);
    const [taps, setTaps] = useState(true);

    const tapClick = () => {
        setTaps((prev) => !prev);
    };

    const onClickXandOBtn = (targetkey, target) => {
        const targetIndex = doing.findIndex((item) => item.word === target);
        let temp = [...doing];
        temp[targetIndex] = {
            ...temp[targetIndex],
            [targetkey]: temp[targetIndex][targetkey] + 1,
        };
        setDoing(temp);
    };

    const BUTTONS = [
        {
            id: 0,
            title: "X",
            target: "x_count",
        },
        {
            id: 1,
            title: "O",
            target: "o_count",
        },
        {
            id: 2,
            title: "암기완료",
            onClick: null,
            round: "rounded-r-lg",
        },
    ];

    return (
        <div>
            <div className="flex justify-between">
                <ul>
                    <button onClick={(e) => tapClick(e)}>학습중</button>
                    <button onClick={tapClick}>암기완료</button>
                </ul>
                <div className="flex">
                    <p>
                        <i className="ri-arrow-up-down-line"></i>
                    </p>
                    <p>
                        <i className="ri-shuffle-line"></i>
                    </p>
                </div>
            </div>
            {taps
                ? doing.length > 0 &&
                  doing.map((item) => (
                      <Card
                          key={item.word}
                          data={item}
                          onClick={onClickXandOBtn}
                          BUTTONS={BUTTONS}
                      />
                  ))
                : done.length > 0 &&
                  done?.map((item) => <Card key={item.word} data={item} />)}
        </div>
    );
};

export default Item;
