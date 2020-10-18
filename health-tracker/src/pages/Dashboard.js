import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FoodSearch from "../components/FoodSearch";
import Chart from "../components/Chart";
import TableUser from "../components/TableUser";
import API from "../utils/API";
import { useHistory } from "react-router-dom";
import UserProfile from "../components/UserProfile.js";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const Dashboard = (props) => {
  const history = useHistory();
  const [isUser, setIsUser] = useState("");
  const [foodLog, setFoodLog] = useState([]);
  const [flag, setFlag] = useState(false);
  const user = props.userData;
  const useStyles = makeStyles(() => ({
    root: {
      textAlign: "center",
    },
    left: {
      float: "left",
      width: "450px",
      marginLeft: "50px",
    },
    right: {
      float: "right",
      marginRight: "40px",
      // height: "auto"
    },
    center: {
      display: "inline",
      flexDirection: "row",
      marginLeft: "30px",
      justifyContent: "center",
    },
  }));

  let idUser;
  useEffect(() => {
    idUser = props.userData.user.id;
    API.getOneUser(idUser).then((res) => {
      if (res.data !== null) {
        let foodLogs = res.data.FoodLogs;
        let data = res.data;
        if (foodLogs.length !== 0) {
          setIsUser(data);
          setFoodLog(foodLogs);
          console.log("foodlogs:", foodLogs);
          console.log("data:", data);
          setFlag(true);
        } else {
          let data = res.data;
          setIsUser(data);
          console.log(data);
          setFlag(false);
        }
      }
    });
  }, [props.userData]);

  const eventSubmitBtn = (foodName, amount, volume) => {
    API.getNutrients(foodName, amount, volume).then((res) => {
      if (foodLog.length > 0) {
        let id = +foodLog[foodLog.length - 1].id + 1;
        let objFood = {
          id: id,
          foodName: foodName,
          carbs: res.data.totalNutrients.CHOCDF.quantity,
          protein: res.data.totalNutrients.PROCNT.quantity,
          fat: res.data.totalNutrients.FAT.quantity,
          calories: res.data.calories,
          UserId: props.userData.user.id,
        };
        API.newFoodLog(objFood);
        foodLog.push(objFood);
        setFoodLog([...foodLog]);
        console.log(foodLog);
      } else {
        let id = 1;
        let objFood = {
          id: id,
          foodName: foodName,
          carbs: res.data.totalNutrients.CHOCDF.quantity,
          protein: res.data.totalNutrients.PROCNT.quantity,
          fat: res.data.totalNutrients.FAT.quantity,
          calories: res.data.calories,
          UserId: props.userData.user.id,
        };
        setFlag(true);
        API.newFoodLog(objFood);
        foodLog.push(objFood);
        setFoodLog([...foodLog]);
      }
    });
  };

  const deleteFood = (idFood, idToDelete) => {
    foodLog.splice(idToDelete, 1);
    API.deleteLog(idFood);
    let idUser = props.userData.user.id;
    API.getOneUser(idUser);
    setFoodLog([...foodLog]);
  };

  const classes = useStyles();

  return (
    <div className={classes.center}>
      <h1 style={{ textAlign: "center", color: "#3F51B5" }}>
        Welcome to your MERN Health Tracker Dashboard {isUser.firstName}!
      </h1>
      <div>
        <UserProfile />
      </div>
      <div>
        <FoodSearch eventSubmitBtn={eventSubmitBtn} />
      </div>
      <div>
        {flag ? <Chart foodLog={[...foodLog]} isUser={isUser} /> : null}
      </div>
      <Card className={classes.card}>
        <CardContent>
          <div>
            {flag ? (
              <TableUser
                isUser={isUser}
                foodLog={[...foodLog]}
                user={user}
                deleteFood={deleteFood}
              />
            ) : null}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
