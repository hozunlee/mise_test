import { useRecoilState } from "recoil";
import { doingState } from "../utils/store";

const SortDetail = ({ setHandleModal }) => {
    const [doing, setDoing] = useRecoilState(doingState);

    const onOXSort = (item) => {
        let temp = [...doing];
        if (item === "word") {
            temp.sort((a, b) => a[item].localeCompare(b[item]));
        } else {
            temp.sort((a, b) => b[item] - a[item]);
        }
        setDoing(temp);
    };
    const lessCountSort = () => {
        let temp = [...doing];
        temp.sort((a, b) => {
            return a.x_count + a.o_count - (b.x_count + b.o_count);
        });
        setDoing(temp);
    };

    return (
        <div
            className="w-full h-screen z-50 fixed left-0 top-0 flex justify-center items-end bg-black bg-opacity-70 "
            onClick={setHandleModal}
        >
            <div className="bg-white rounded w-full md:w-1/3">
                <div className="border-b px-4 py-2 flex justify-between items-end">
                    <h3 className="font-extrabold text-center w-full">정렬</h3>
                </div>
                <div className="text-gray-500 text-sm  flex flex-col justify-between">
                    <button
                        onClick={() => onOXSort("word")}
                        className="p-2 border"
                    >
                        ABC 순
                    </button>
                    <button
                        onClick={() => onOXSort("x_count")}
                        className="p-2 border "
                    >
                        X많은 순
                    </button>
                    <button
                        onClick={() => onOXSort("o_count")}
                        className="p-2 border"
                    >
                        O많은 순
                    </button>
                    <button onClick={lessCountSort} className="p-2 border">
                        학습 횟수 적은 순
                    </button>
                </div>
                <div className="flex justify-end items-center w-100 border-t p-3 text-gray-500"></div>
            </div>
        </div>
    );
};

export default SortDetail;
