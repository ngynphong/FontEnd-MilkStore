import { Line } from 'react-chartjs-2'
import {
    Chart as
    ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { lineChartData } from './fake_data';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
)


function Graphline() {
    const options = {};



    return (
        <Line options={options} data={lineChartData} />
    )
}

export default Graphline;