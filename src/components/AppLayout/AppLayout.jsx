import Header from "../../Features/Header/Header.jsx";
import {Box, Stack} from "@mui/material";
import {Outlet} from "react-router-dom";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {getAuthStatus} from "../../services/user/authStatusSlice.js";
import {useLoginWithToken} from "../../Features/Authentication/useLoginWithToken.js";

function AppLayout() {
    const authStatus = useSelector(getAuthStatus);
    const {loginUser} = useLoginWithToken();

    useEffect(() => {
        if (authStatus && authStatus.email && authStatus.token) {
            loginUser({
                email: authStatus.email,
                token: authStatus.token
            })
        }
    }, []);

    return (
        <Box>
            <Header/>
            <Stack marginTop={2} gap={2} overflow={"auto"}>
                <Outlet/>
            </Stack>
        </Box>
    );
}

export default AppLayout;