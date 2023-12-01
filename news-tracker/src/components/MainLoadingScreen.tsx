import CircularProgress from "@mui/material/CircularProgress";

function MainLoadingScreen() {
    return (
        <div
            style={{
                background: "#101418",
                display: "flex",
                height: "calc(100vh - 60px)",
                flexDirection: "row",
                justifyContent: "center",
                paddingTop: "30px",
                alignItems: "center"
            }}
        >
            <CircularProgress style={{color: "white"}}/>
        </div>
    );
}

export default MainLoadingScreen;