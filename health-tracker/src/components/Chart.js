import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";

const Chart = (props) => {
  console.log(props.foodLog);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const RADIAN = Math.PI / 180;
  let carbs = 0;
  let protein = 0;
  let fat = 0;
  let calories = 0;
  for (let i = 0; i < props.foodLog.length; i++) {
    carbs += props.foodLog[i].carbs;
    protein += props.foodLog[i].protein;
    fat += props.foodLog[i].fat;
    calories += props.foodLog[i].calories;
  }
  const foodArr = [
    { name: "Carbs", value: carbs },
    { name: "Protein", value: protein },
    { name: "Fat", value: fat },
  ];
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <PieChart width={200} height={200}>
        <Pie
          data={foodArr}
          cx={100}
          cy={100}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          isAnimationActive={true}
        >
          {foodArr.map((entry, index) => (
            <Cell fill={COLORS[index % COLORS.length]} key={index} />
          ))}
        </Pie>
      </PieChart>
      <div style={{ marginTop: "30px" }}>
        <List>
          <ListItemText> Blue 🍞: Carbs {carbs.toFixed(2)}</ListItemText>
          <ListItemText> Green 🥩: Protein {protein.toFixed(2)}</ListItemText>
          <ListItemText> Yellow 🥑: Fat {fat.toFixed(2)}</ListItemText>
          <ListItemText> Total Calories: {calories.toFixed(2)}</ListItemText>
          <ListItemText> BMI: {props.isUser.Stat.bmi}</ListItemText>
          <ListItemText> BMR: {props.isUser.Stat.bmr}</ListItemText>
        </List>
      </div>
    </div>
  );
};

export default Chart;
