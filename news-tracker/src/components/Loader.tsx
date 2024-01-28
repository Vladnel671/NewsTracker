import CircularProgress from "@mui/material/CircularProgress";

function Loader() {
    return (
        <div
            style={{
                background: "var(--loader-background-color)",
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

export default Loader;