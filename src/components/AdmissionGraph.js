import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function AdmissionGraph({data}) {
    const chartData = data.map(row => ({
        year: row.year,
        admitRate:
            row.num_admits && row.num_applicants
            ? (row.num_admits / row.num_applicants) * 100
            : null,
    }));

    return (
        <LineChart width={600} height={300} data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="year" />
            <YAxis domain={[0, 100]} unit="%" />
            <Tooltip formatter={(value) => (value ? value.toFixed(1) + '%' : 'N/A')} />
        <Legend />
        <Line
            type="monotone"
            dataKey="admitRate"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            connectNulls
        />
        </LineChart>
    );
} 