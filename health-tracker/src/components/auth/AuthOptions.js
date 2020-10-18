import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Button from "@material-ui/core/Button";
import { ButtonGroup } from "@material-ui/core";

export default function AuthOptions(props) {
  const { userData, setUserData } = useContext(UserContext);

  const history = useHistory();

  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const logout = () => {
    setUserData({ token: undefined, user: undefined });
    localStorage.setItem("auth-token", "");
    history.push("/");
  };

  return (
    <nav className="auth-options">
      <ButtonGroup>
        {userData.user ? (
          <Button
            fullWidth
            variant="contained"
            color="#3f51b6"
            onClick={logout}
          >
            LOGOUT
          </Button>
        ) : (
          <>
            <Button
              mr="10rem"
              fullWidth
              variant="contained"
              color="#3f51b6"
              onClick={register}
            >
              REGISTER
            </Button>
            &nbsp; &nbsp;
            <Button
              mr="10rem"
              fullWidth
              variant="contained"
              color="#3f51b6"
              onClick={login}
            >
              LOGIN
            </Button>
          </>
        )}
      </ButtonGroup>
    </nav>
  );
}
