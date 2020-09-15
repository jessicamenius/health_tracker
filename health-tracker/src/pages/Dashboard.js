import React, { useEffect, useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import FormSearch from '../components/FormSearch';
import Chart from '../components/Chart'
import TableUser from '../components/TableUser';
import API from '../utils/API'

const Dashboard = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      textAlign: "center",
    },
    left: {
      float: "left",
      width: "450px",
      marginLeft: "50px"

    },
    right: {
      float: "right",
      marginRight: "40px"

    },
    center: {
      display: "inline-block",
      flexDirection: "row",
      marginLeft: "30px"
    }
  }));

  const [isUser, setIsUser] = useState("");
  const [foodLog, setFoodLog] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    // need to get the user from the auth
    // Cheking if the user create some data inside the foodLog
    API.getOneUser("1").then(res => {
      console.log(res.data)
      if (res.data !== null) {
        let foodLogs = res.data.FoodLogs;
        let data = res.data;
        if (foodLogs.length > 0) {
          setIsUser(data);
          setFoodLog(foodLogs);
          setFlag(true)
        }
      } else {
        setFlag(false)
      }
    });
  }, [])

  const eventSubmitBtn = (foodName, amount, volume) => {
    API.getNutrients(foodName, amount, volume).then(res => {
      // need to get the user id from the auth
      if (foodLog.length > 0) {

        let id = + foodLog[foodLog.length - 1].id + 1;
        let objFood = {
          id: id,
          foodName: foodName,
          carbs: res.data.totalNutrients.CHOCDF.quantity,
          protein: res.data.totalNutrients.PROCNT.quantity,
          fat: res.data.totalNutrients.FAT.quantity,
          calories: res.data.calories,
          UserId: 1
        }
        API.newFoodLog(objFood);
        foodLog.push(objFood);
        setFoodLog([...foodLog]);
      } else {
        let id = 1;
        let objFood = {
          id: id,
          foodName: foodName,
          carbs: res.data.totalNutrients.CHOCDF.quantity,
          protein: res.data.totalNutrients.PROCNT.quantity,
          fat: res.data.totalNutrients.FAT.quantity,
          calories: res.data.calories,
          UserId: 1
        }
        API.newFoodLog(objFood);
        foodLog.push(objFood);
        setFoodLog([...foodLog]);

      }

    });

    // need to find the user to get all the food log that this user has, to represent it in our table and in our chart

  }

  const classes = useStyles();

  console.log("props.user in dashboard", props.user);
  return (
    <div className={classes.root}>
      <h1 style={{ textAlign: "center", color: "#3F51B5" }}>Welcome to Our Dashboard</h1>
      <div className={classes.left}>
        {
          flag ? <TableUser isUser={isUser} foodLog={foodLog} /> : null
        }

      </div>
      <div className={classes.center}>
        <FormSearch eventSubmitBtn={eventSubmitBtn} />
      </div>
      <div className={classes.right}>
        {
          flag ? <Chart foodLog={foodLog} isUser={isUser} /> : null
        }
      </div>
    </div>
  )
}


export default Dashboard;
