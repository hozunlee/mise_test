import { useSetRecoilState } from "recoil";
import { allShowWordState } from "../utils/store";

/**
 *
 * @returns 버튼 클릭 시 tran 가 보이고 숨겨지는 toggle 버튼 UI
 */
const TopButton = () => {
    const setAllChangeShow = useSetRecoilState(allShowWordState);

    const onChange = () => {
        setAllChangeShow((prev) => !prev);
    };
    return (
        <div>
            <button
                onClick={onChange}
                className=" fixed z-50 bottom-8 right-8 border-0 w-16 h-16 rounded-full drop-shadow-md bg-indigo-500 text-white text-lg font-bold"
            >
                show
            </button>
        </div>
    );
};

export default TopButton;
