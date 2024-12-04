import { LineChart, Line, XAxis, YAxis } from 'recharts';

const ResultChart = () => {
    const mathMarkData = [
        { "id": 1, "name": "Alice", "marks": 85 },
        { "id": 2, "name": "Bob", "marks": 78 },
        { "id": 3, "name": "Charlie", "marks": 92 },
        { "id": 4, "name": "David", "marks": 88 },
        { "id": 5, "name": "Emma", "marks": 74 },
        { "id": 6, "name": "Fiona", "marks": 90 },
        { "id": 7, "name": "George", "marks": 67 },
        { "id": 8, "name": "Hannah", "marks": 80 },
        { "id": 9, "name": "Ian", "marks": 95 },
        { "id": 10, "name": "Julia", "marks": 83 }
    ]
    return (
        <div>
            <h2 className="text-6xl">ResultChart</h2>
            <LineChart width={900} height={400} data={mathMarkData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={'marks'}></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;