import PacmanLoader from "react-spinners/PacmanLoader";

/**
 *
 * @returns 로딩 시 보여지는 UI
 */
export const IsLoading = () => (
    <div className="flex flex-col justify-center items-center h-[85vh] ">
        <PacmanLoader color="#034ac5" size="15px" />
    </div>
);
