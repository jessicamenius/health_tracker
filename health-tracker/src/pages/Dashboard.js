import React, { useEffect, useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import FormSearch from '../components/FormSearch';
import Chart from '../components/Chart'
import TableUser from '../components/TableUser';
import API from '../utils/API'
import Footer from '../components/Footer';

const Dashboard = (props) => {

  const [isUser, setIsUser] = useState("");
  const [foodLog, setFoodLog] = useState([]);
  const [flag, setFlag] = useState(false);
  const user = props.userData;
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
      marginRight: "40px",
      // height: "auto"
    },
    center: {
      display: "inline-block",
      flexDirection: "row",
      marginLeft: "30px"
    }
  }));


  let idUser;
  useEffect(() => {
    console.log(props.userData);
    idUser = props.userData.user.id;
    API.getOneUser(idUser).then(res => {
      if (res.data !== null) {
        let foodLogs = res.data.FoodLogs;
        let data = res.data;
        console.log(data)
        if (foodLogs.length !== 0) {
          setIsUser(data);
          setFoodLog(foodLogs);
          setFlag(true);
        } else {
          let data = res.data;
          setIsUser(data);
          setFlag(false);
        }

      }
    });
  }, [props.userData])


  const eventSubmitBtn = (foodName, amount, volume) => {
    API.getNutrients(foodName, amount, volume).then(res => {


      if (foodLog.length > 0) {
        let id = + foodLog[foodLog.length - 1].id + 1;
        let objFood = {
          id: id,
          foodName: foodName,
          carbs: res.data.totalNutrients.CHOCDF.quantity,
          protein: res.data.totalNutrients.PROCNT.quantity,
          fat: res.data.totalNutrients.FAT.quantity,
          calories: res.data.calories,
          UserId: props.userData.user.id
        }
        API.newFoodLog(objFood);
        foodLog.push(objFood);
        setFoodLog([...foodLog]);
      } else {
        console.log("inisde the else after api call");
        let id = 1;
        let objFood = {
          id: id,
          foodName: foodName,
          carbs: res.data.totalNutrients.CHOCDF.quantity,
          protein: res.data.totalNutrients.PROCNT.quantity,
          fat: res.data.totalNutrients.FAT.quantity,
          calories: res.data.calories,
          UserId: props.userData.user.id
        }
        setFlag(true);
        console.log(isUser);
        API.newFoodLog(objFood);
        foodLog.push(objFood);
        setFoodLog([...foodLog]);
      }
    });
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 style={{ textAlign: "center", color: "#3F51B5" }}>
        Welcome to Our Dashboard {isUser.userName}
      </h1>
      <div className={classes.left}>
        {
          flag ? <TableUser isUser={isUser} foodLog={[...foodLog]} user={user} /> : null
        }

      </div>
      <div className={classes.center}>
        <FormSearch eventSubmitBtn={eventSubmitBtn} />
      </div>
      <div className={classes.right}>
        {
          flag ? <Chart foodLog={[...foodLog]} isUser={isUser} /> : null
        }
      </div>
    </div>
  )
}


export default Dashboard;
