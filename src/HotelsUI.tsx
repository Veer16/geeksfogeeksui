import {
  AppBar,
  Button,
  Container,
  Grid,
  InputBase,
  makeStyles,
  Theme,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppState } from "./AppState";
import HotelCard from "./HotelCard";
import { completed, IHotel, started } from "./HotelsSlice";
import { UserContext } from "./UserProvider";

const useStyles = makeStyles<Theme, {}>({
  rootContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px 0",
  },
  serachContainer: {
    display: "flex",
    height: "80%",
    flexGrow: 0.9,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    padding: "0 15px",
  },
  textBox: {
    color: "white",
  },
  buttons: {
    display: "flex",
    flexGrow: 0.1,
    justifyContent: "space-evenly",
  },
  button: {
    color: "white",
  },
  grid: {
    padding: "30px",
  },
});
export default function HotelsUI() {
  const [searchString, setSearchString] = useState("");
  const context = useContext(UserContext);
  const styles = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const hotels: IHotel[] = useSelector((x: AppState) => x.HotelsSlice);
  useEffect(() => {
    async function api() {
      const response = await fetch("/hotel.json");
      const json = await response.json();
      dispatch(
        completed(json.map((x: { restaurant: IHotel }) => x.restaurant))
      );
    }
    dispatch(started());
    api();
  }, [dispatch]);

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl" className={styles.rootContainer}>
          <div className={styles.serachContainer}>
            <div className={styles.iconContainer}>
              <SearchIcon />
            </div>
            <InputBase
              onChange={(e) => {
                setSearchString(e.target.value);
              }}
              fullWidth
              className={styles.textBox}
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
            />
          </div>

          <div className={styles.buttons}>
            {context?.uid && (
              <Button
                className={styles.button}
                onClick={() => history.push("/Profile")}
              >
                Profile
              </Button>
            )}
            {!context?.uid && (
              <Button
                className={styles.button}
                onClick={() => history.push("/SignUp")}
              >
                SignUp
              </Button>
            )}
            {!context?.uid && (
              <Button
                className={styles.button}
                onClick={() => history.push("/Login")}
              >
                Login
              </Button>
            )}
          </div>
        </Container>
      </AppBar>
      <Grid container spacing={4} className={styles.grid}>
        {hotels
          .filter((x) =>
            x.name.toLowerCase().includes(searchString.toLowerCase())
          )
          .map((hotel) => (
            <Grid item xs={4} justifyContent="space-evenly" alignItems="center">
              <HotelCard {...hotel} />
            </Grid>
          ))}
      </Grid>
    </>
  );
}
