import { memo, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRecoilValue } from "recoil";
import { allShowWordState, changeWordState } from "../utils/store";

const Card = ({ data, BUTTONS }) => {
    const changeWord = useRecoilValue(changeWordState);
    const AllChangeShow = useRecoilValue(allShowWordState);
    const [isTrans, setIsTrans] = useState(false);

    const onTrans = () => {
        setIsTrans((prev) => !prev);
    };

    return (
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={14}
            grabCursor={true}
            className=" border-2 my-1"
        >
            <SwiperSlide>
                <div className="flex justify-between p-3 ">
                    <div className="flex flex-col w-full">
                        <div className="flex text-sm text-gray-300">
                            <p className="mr-2">
                                <i className="ri-close-circle-fill text-red-500"></i>
                                {data.x_count}
                            </p>
                            <p>
                                <i className="ri-emotion-line text-green-500"></i>
                                {data.o_count}
                            </p>
                        </div>
                        <p className="text-center">
                            {changeWord ? data.trans : data.word}
                        </p>
                        <p>　 </p>
                    </div>
                    <button
                        className={
                            "w-full" +
                            (AllChangeShow | isTrans
                                ? " border-l-2 border-blue-300 border-solid "
                                : " ")
                        }
                        onClick={onTrans}
                    >
                        <p className="text-sm">
                            {AllChangeShow | isTrans
                                ? changeWord
                                    ? data.word
                                    : data.trans
                                : ""}
                        </p>
                    </button>
                </div>
            </SwiperSlide>
            <SwiperSlide className="!w-3/4 flex items-center justify-end h-full">
                {BUTTONS?.map((item) => (
                    <div key={item.id}>
                        <button
                            onClick={() => item.onclick(data.word, item.target)}
                            className={`w-full h-full p-7 text-sm bg-[${item.color}] ${item.round}`}
                        >
                            {item.title}
                        </button>
                    </div>
                ))}
            </SwiperSlide>
        </Swiper>
    );
};

export default memo(Card);
