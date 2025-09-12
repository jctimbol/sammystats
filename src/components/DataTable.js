
export default function DataTable({data}) {
    
    return (
        <table>
            <thead>
                <tr>
                    <th>year</th>
                    <th>admit rate</th>
                </tr>
            </thead>
            <tbody>
        {data.map(row => {
        const admitRate = 
        row.num_admits && row.num_applicants
            ? ((row.num_admits / row.num_applicants) * 100).toFixed(1) + '%'
            : 'N/A'; // if missing data
            return(
            <tr key={row.id}>
                <td>{row.year}</td>
                <td>{admitRate}</td>
            </tr>
            );
      })}
      </tbody>
      </table>
    );
}