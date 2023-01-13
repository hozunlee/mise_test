import { useRecoilValue } from "recoil";
import { doingState, doneState } from "../utils/store";

const Status = () => {
    const doingCount = useRecoilValue(doingState).length;
    const doneCount = useRecoilValue(doneState).length ?? 0;

    const totalCount = doneCount + doingCount;
    const doneLate = (doneCount / totalCount) * 100;
    return (
        <div className="flex justify-between h-16 items-center">
            <div className="flex border p-3 mr-1 w-full justify-between rounded-lg bg-gray-100  text-sm h-12 ">
                <p>
                    {doneCount}/{totalCount}단어
                </p>{" "}
                <p className="text-gray-400">{doneLate.toFixed()}%</p>
            </div>
            <button className="border w-full ml-1 rounded-lg bg-blue-50 text-sm text-blue-400 font-bold h-12 ">
                큰 카드로 보기
            </button>
        </div>
    );
};

export default Status;
