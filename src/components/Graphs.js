import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useParams } from 'react-router-dom';

export default function Graphs(props) {
    const {data} = props;
    const {major} = useParams();
    const chartData = data.filter(row=>row.major.trim().toLowerCase()===major.trim().toLowerCase()).map(row => ({
        year: row.year,
        impactionScore:
            row.impaction_threshold
            ? row.impaction_threshold
            : null,
        admitRate:
            row.num_admits && row.num_applicants
            ? (row.num_admits / row.num_applicants) * 100
            : null,
    }));

    return (
        <div>
            <h1>Admission + Impaction Data for {major}</h1>
            <LineChart width={800} height={600} data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="year" domain={[2015,2025]} unit=""/>
                <YAxis yAxisId="left" domain={[0, 100]} unit="%" label={{value: 'Admit Rate (%)', angle: -90, position: 'insideLeft'}}/>
                <YAxis yAxisId="right" orientation="right" label={{value: 'Impaction Score', angle: 90, position: 'insideRight'}}/>
                <Tooltip formatter={(value, name) => (value!==null ? name==='Admit Rate (%)' ? value.toFixed(1) + '%' : value : 'N/A')} />
                <Legend />
                <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="admitRate"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                    connectNulls
                    name="Admit Rate (%)"
                />
                <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="impactionScore"
                    stroke="#000000"
                    activeDot={{ r: 9 }}
                    connectNulls
                    name="Impaction Score"
                />
            </LineChart>

        </div>
    );
}