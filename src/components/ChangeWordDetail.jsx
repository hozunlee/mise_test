import { useSetRecoilState } from "recoil";
import { changeWordState } from "../utils/store";

const ChangeWordDetail = ({ setHandleModal }) => {
    const setChangeWord = useSetRecoilState(changeWordState);

    const onChangeWord = () => {
        setChangeWord((prev) => !prev);
    };
    return (
        <div className="w-full h-screen z-50 fixed left-0 top-0 flex justify-center items-end bg-black bg-opacity-70 text-cente">
            <div className="bg-white rounded w-full md:w-1/3">
                <div className="border-b px-4 py-2 flex justify-between items-end">
                    <h3 className="font-extrabold text-center w-full">
                        더보기
                    </h3>
                    <p
                        onClick={setHandleModal}
                        className="border p-1 rounded-lg"
                    >
                        X
                    </p>
                </div>
                <div className="text-gray-500 text-sm  flex flex-col justify-between">
                    <div className="flex justify-between p-5">
                        <p>표기전환</p>
                        <div className="items-center flex">
                            <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                                영단어
                            </span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    value=""
                                    className="sr-only peer"
                                    onClick={onChangeWord}
                                />
                                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    뜻
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end items-center w-100 border-t p-3 text-gray-500"></div>
            </div>
        </div>
    );
};

export default ChangeWordDetail;
