import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { doingState, doneState } from "../utils/store";
import Card from "./Card";

const Item = () => {
    const doing = useRecoilValue(doingState);
    const done = useRecoilValue(doneState);
    const [taps, setTaps] = useState(true);

    const tapClick = (e) => {
        console.log(e.target.value);
        setTaps((prev) => !prev);
    };
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
                  doing.map((item) => <Card key={item.word} data={item} />)
                : done.length > 0 &&
                  done?.map((item) => <Card key={item.word} data={item} />)}
        </div>
    );
};

export default Item;
