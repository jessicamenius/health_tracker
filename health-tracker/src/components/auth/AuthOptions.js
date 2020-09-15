import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Button from "@material-ui/core/Button";
import { ButtonGroup } from "@material-ui/core";

export default function AuthOptions() {
  const { userData, setUserData } = useContext(UserContext);

  const history = useHistory();

  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const logout = () => {
    setUserData({ token: undefined, user: undefined });
    localStorage.setItem("auth-token", "");
    history.push("/")
  };

  return (
    <nav className="auth-options">
      <ButtonGroup>
        {userData.user ? (
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={logout}
          >
            LOGOUT
          </Button>
        ) : (
            <>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={register}
              >
                REGISTER
            </Button>
              <Button
                fullWidth
                variant="contained"
                color="primary"
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
