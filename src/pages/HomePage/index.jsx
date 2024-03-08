import { Login } from "../LoginPage/index";

export const HomePage = ({setUser}) => {
    return (
        <>
            <Login setUser={setUser} />
        </>
    );
}