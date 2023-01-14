const Nav = () => {
    return (
        <nav className="">
            <div className="mx-auto max-w-6xl shadow-xl ">
                <div className="flex justify-between items-center text-black ">
                    <button className="my-2 space-x-1 p-2 font-bold">
                        <i className="ri-arrow-left-line"></i>
                    </button>
                    <p>
                        <b>기말고사 총 범위</b>
                    </p>
                    <button className="my-2 space-x-1 p-2 font-bold">
                        <i className="ri-more-line"></i>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
