import React from 'react'
import { PieChart, Pie, Tooltip } from 'recharts'

const Chart = (props) => {
    console.log(props.foodLog);
    const data01 = [{ name: 'Carbs', value: 400 }, { name: 'Protein', value: 300 },
    { name: 'Fat', value: 300 }, { name: 'Calories', value: 200 }]
    return (
        <div>
            <PieChart width={800} height={400}>
                <Pie isAnimationActive={false} dataKey="value" data={data01} cx={150} cy={150} outerRadius={90} innerRadius={45} startAngle={90} endAngle={450} fill="#3F51B5" label />
                <Tooltip />
            </PieChart>
        </div>

    );
}

export default Chart


