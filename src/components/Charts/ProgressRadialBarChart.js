import * as React from 'react';
import {RadialBarChart, RadialBar, PolarAngleAxis, Legend} from 'recharts';
import style from './Charts.module.scss';

export default (class ProgressRadialBarChart extends React.PureComponent {
    render (){
        const {data, dataKey} = this.props;
        return (
            <RadialBarChart 
                width={300}
                height = {300}
                barSize={24}
                data={data}
                innerRadius={60}
                outerRadius={100}
                startAngle={180}
				endAngle={0}
            >
                <PolarAngleAxis 
                    type="number"
                    domain={[0,100]}
                    angleAxisId={0}
                    tick={false}
                />
                <RadialBar 
                    label={{position:'insideStart', fill:"#FFF"}}
                    minAngle={15} 
                    dataKey = {dataKey}
                    background
                    clockWise
                    />
                <Legend iconSize={16} layout={"vertical"} verticalAlign={"bottom"} wrapperStyle={style}/>
            </RadialBarChart>
        );
    }
})