import {Box, styled, Typography} from "@mui/material";
import {parentCategoryToIconMap, toTitleCase} from "../../utilities/util.jsx";

const StyledParentCategoryBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.2rem",
}))

function GlobalNavBarNavElement({category}) {
    return (
        <StyledParentCategoryBox>
            {parentCategoryToIconMap[category]}
            <Typography variant={"subtitle2"} noWrap>
                {toTitleCase(category)}
            </Typography>
        </StyledParentCategoryBox>
    );
}

export default GlobalNavBarNavElement;