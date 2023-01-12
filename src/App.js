import axios from "axios";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import Item from "./components/Item";

import Nav from "./components/Nav";
import Status from "./components/Status";
import { doingState } from "./utils/store";

function App() {
    const setInitData = useSetRecoilState(doingState);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const source = axios.CancelToken.source();
        (async () => {
            try {
                //FIXME Cors error
                const {
                    data: {
                        body: { list },
                    },
                } = await axios.get(
                    "https://r0twvje5g7.execute-api.ap-northeast-2.amazonaws.com/TEST/fetest",
                    { cancelToken: source.token }
                );
                setInitData(list);
                setLoading(false);
            } catch (err) {
                if (axios.isCancel(err)) {
                    console.log("Axios request aborted.");
                } else {
                    console.error(err);
                }
            }
        })();

        // useEffect strict mode 등 ajax 중복 요청을 방지하기 위해 abort 기능 구현
        return () => {
            source.cancel();
        };
    }, []);
    return (
        <div className="p-3">
            <Nav />
            {loading ? (
                "로딩중"
            ) : (
                <div>
                    <Status />
                    <Item />
                </div>
            )}
        </div>
    );
}

export default App;
