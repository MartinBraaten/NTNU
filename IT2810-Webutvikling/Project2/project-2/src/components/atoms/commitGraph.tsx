import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

interface IGraph {
    graphData: Map<string, number>;
}

//Component that displays a graph that shows number of commits per member in the project
export default function CommitGraph({ graphData }: IGraph) {
    var data = [];
    const iterator = graphData.keys();
    var key: string = "";

    //place data from map parameter into the data displayed in the graph
    for (let i = 0; i < graphData.size; i++) {
        key = iterator.next().value;
        if (graphData.get(key) !== 0) {
            data.push({ name: key, commits: graphData.get(key) });
        }
    }

    //imported rechart components that makes up a graph
    const renderBarChart = (
        <BarChart width={300} height={300} data={data}>
            <XAxis dataKey="name" height={0} />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="commits" fill="#00b188" barSize={30} />
        </BarChart>
    );

    //Returns the graph with a title
    return (
        <div>
            <h1 style={{ width: "300", fontSize: "20px", fontWeight: "400" }}>
                Hover over to see number of commits by each member
            </h1>
            {renderBarChart}
        </div>
    );
}
