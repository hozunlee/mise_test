import axios from "axios";
import { useEffect } from "react";
import Nav from "./components/Nav";
import Status from "./components/Status";

function App() {
    useEffect(() => {
        (async () => {
            try {
                //FIXME Cors error
                const res = await axios.get(
                    `https://r0twvje5g7.execute-api.ap-northeast-2.amazonaws.com/TEST/fetest`
                );
                console.log("res :>> ", res);
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);
    return (
        <div className="bg-red-100">
            메인
            <Nav />
            <Status />
        </div>
    );
}

export default App;
