import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ColumnGroupingTable } from './components/ColumnGroupingTable';
import { SimpleLineChart } from './components/SimpleLineChart';
import { BasicPieChart } from './components/BasicPieChart';

export default function App() {
  return (
    <Router>
      <div className="p-4">
        <nav
          className="mb-4"
          style={{ display: 'flex', gap: 50, margin: '10%' }}
        >
          <Link to="/column-grouping-table" className="mr-4">
            Table
          </Link>
          <Link to="/line-chart" className="mr-4">
            Line Chart
          </Link>
          <Link to="/pie-chart">Pie Chart</Link>
        </nav>
        <Routes>
          <Route
            path="/column-grouping-table"
            element={<ColumnGroupingTable />}
          />
          <Route path="/line-chart" element={<SimpleLineChart />} />
          <Route path="/pie-chart" element={<BasicPieChart />} />
        </Routes>
      </div>
    </Router>
  );
}
