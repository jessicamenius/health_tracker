import React from 'react'
import { PieChart, Pie, Cell } from 'recharts'
const Chart = (props) => {
    console.log(props.foodLog);
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
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
    const foodArr = [{ name: 'Carbs', value: carbs }, { name: 'Protein', value: protein }, { name: 'Fat', value: fat }]
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`
                }
            </text>
        );
    };
    return (
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
            <PieChart width={600} height={300}>
                <Pie
                    data={foodArr}
                    cx={300}
                    cy={200}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    isAnimationActive={true}
                >
                    {
                        foodArr.map((entry, index) =>
                            <Cell fill={COLORS[index % COLORS.length]} key={index} />
                        )
                    }
                </Pie>
            </PieChart>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <ul>
                    <li>Blue Color 🍞 :Carbs {carbs} </li>
                    <li>Green Color 🥩 :Protein {protein}</li>
                    <li>Yellow Color 🥑: Fat {fat}</li>
                    <p>Total Calories {calories}</p>
                    <p>BMI {props.isUser.Stat.bmi}</p>
                    <p>BMR {props.isUser.Stat.bmr}</p>
                </ul>

            </div>

        </div>
    );
}

export default Chart

// dataKey="value" isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" 