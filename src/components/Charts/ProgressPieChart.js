import * as React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
export default (class ProgressPieChart extends React.PureComponent {
	state = {
		data: [ { name: 'Avance', value: 50 }, { name: 'Total', value: 50 } ],
        colors: [ '#00C49F', '#FEFEFE ' ]
	};
	renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const RADIAN = Math.PI / 180;
		const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
		const x = cx + radius * Math.cos(-midAngle * RADIAN);
		const y = cy + radius * Math.sin(-midAngle * RADIAN);
		return (
			<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
				{`${(percent * 100).toFixed(0)}%`}
			</text>
		);
    };
    
	render() {
        const { data, colors } = this.state;
        const {datos, colores} = this.props;
		return (
			<PieChart width={400} height={400}>
				<Pie 
					data={data} 
					dataKey={'value'} 
					fill={'#8884d8'} 
					label={this.renderCustomizedLabel}
					innerRadius={60}
					outterRadius={80}
					startAngle={180}
					endAngle={0}
					blendStroke
				>
					{
                        data.map((item, idx) => <Cell key={`cell-${idx}`} fill={colors[idx % colors.length]} />)
                    }
				</Pie>
			</PieChart>
		);
	}
});
