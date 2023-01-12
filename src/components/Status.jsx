const Status = () => {
    return (
        <div className="flex justify-between h-16 items-center">
            <div className="flex border p-3 mr-1 w-full justify-between rounded-lg bg-gray-100  text-sm h-12 ">
                <p>0/70단어</p> <p className="text-gray-400">0%</p>
            </div>
            <button className="border w-full ml-1 rounded-lg bg-blue-50 text-sm text-blue-400 font-bold h-12 ">
                큰 카드로 보기
            </button>
        </div>
    );
};

export default Status;
