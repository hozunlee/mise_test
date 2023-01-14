import { useState } from "react";
import { useRecoilState } from "recoil";
import { doingState, doneState } from "../utils/store";

import Card from "./Card";
import ChangeWordDetail from "./ChangeWordDetail";
import SortDetail from "./SortDetail";
import TopButton from "./TopButton";

/**
 *
 * @returns 학습관련 메인 UI
 */
const Item = () => {
    const [doing, setDoing] = useRecoilState(doingState);
    const [done, setDone] = useRecoilState(doneState);

    const [openSortModal, setOpenSortModal] = useState(false);
    const [openChangeWordModal, setOpenChangeWordModal] = useState(false);
    const [taps, setTaps] = useState(true);

    // 학습 중 / 학습 완료 탭 제어 함수
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

    /**
     * doing에서 암기완료 버튼을 클릭 시 done 으로 옮기는 함수
     * @param {string} target 완료 시킬 단어
     */
    const onClickComplete = (target) => {
        const addArray = doing.find((item) => item.word === target);
        setDone([...done, addArray]);
        const newArray = doing.filter((item) => item.word !== target);
        setDoing(newArray);
    };

    /**
     * done 재학습 버튼을 클릭 시 doing 으로 옮기는 함수
     * @param {string} target 학습 중으로 이동시킬 단어
     */
    const onClickReturnDoing = (target) => {
        const addArray = done.find((item) => item.word === target);
        setDoing([...doing, addArray]);
        const newArray = done.filter((item) => item.word !== target);
        setDone(newArray);
    };

    // 모달 open/close 제어 함수
    const onOpenSortModalHandler = () => {
        setOpenSortModal((prev) => !prev);
    };

    // 학습 중일 땐 모달창 open
    // 암기완료 일 땐 배열 랜덤
    const onOpenChangeWordModalHandler = () => {
        if (taps) {
            setOpenChangeWordModal((prev) => !prev);
        } else {
            setDone([...done].sort(() => Math.random() - 0.5));
        }
    };

    const DOINGBUTTONS = [
        {
            id: 0,
            title: "X",
            target: "x_count",
            color: "bg-[#ED6A5A]",
            onclick: onClickXandOBtn,
        },
        {
            id: 1,
            title: "O",
            target: "o_count",
            color: "bg-[#E6EBE0]",
            onclick: onClickXandOBtn,
        },
        {
            id: 2,
            title: "암기완료",
            onclick: onClickComplete,
            round: "rounded-r-lg",
            color: "bg-[#9BC1BC]",
        },
    ];
    const DONEBUTTON = [
        {
            id: 0,
            title: "재학습",
            color: "bg-[#36C9C6]",
            onclick: onClickReturnDoing,
        },
    ];

    return (
        <div>
            <TopButton />
            <div className="flex justify-between">
                <ul>
                    <button
                        className="mt-2.5 mr-1 p-1"
                        value={true}
                        onClick={(e) => tapClick(e)}
                    >
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
                            onClick={onOpenChangeWordModalHandler}
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
            {openChangeWordModal && (
                <ChangeWordDetail
                    setHandleModal={onOpenChangeWordModalHandler}
                />
            )}
        </div>
    );
};

export default Item;
