import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CardButton from "./CardButton";
import { doingState } from "../utils/store";
import { useRecoilState, useRecoilValue } from "recoil";

const Card = ({ data }) => {
    const [doing, setDoing] = useRecoilState(doingState);
    const [isTrans, setIsTrans] = useState(true);

    const onTrans = () => {
        setIsTrans((prev) => !prev);
    };

    const onClickXandOBtn = (target) => {
        const targetIndex = doing.findIndex(
            (target) => target.word === data.word
        );
        let temp = [...doing];
        temp[targetIndex] = {
            ...temp[targetIndex],
            [target]: data.x_count + 1,
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
        // <div className="border-4 flex  h-16 rounded-xl">
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={14}
            grabCursor={true}
            className=" border-2 my-1"
        >
            <SwiperSlide>
                <div className="flex justify-between p-3 ">
                    <div className="flex flex-col w-full">
                        <div className="flex">
                            <p>
                                <i className="ri-blur-off-fill"></i>
                                {data.x_count}
                            </p>
                            <p>
                                <i className="ri-check-double-line"></i>
                                {data.o_count}
                            </p>
                        </div>
                        {data.word}
                    </div>
                    <button
                        className={
                            "w-full" +
                            (isTrans
                                ? ""
                                : "border-l-2 border-blue-300 border-solid ")
                        }
                        onClick={onTrans}
                    >
                        {isTrans ? "" : data.trans}
                    </button>
                </div>
            </SwiperSlide>
            <SwiperSlide className="!w-3/4 flex justify-between items-center h-full">
                {BUTTONS.map((item) => (
                    <CardButton
                        key={item.id}
                        button={item}
                        onClick={onClickXandOBtn}
                    />
                ))}
            </SwiperSlide>
        </Swiper>
    );
};

export default Card;