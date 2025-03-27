import { Paper } from '@mui/material';
import { LineChart } from '@mui/x-charts';
// MUIドキュメント
// https://mui.com/x/api/charts/line-chart/
// https://mui.com/x/api/charts/line-element/
// https://mui.com/x/api/charts/line-plot/
// https://mui.com/x/api/charts/line-series-type/

const target = [
  0.2, 0.25, 0.3, 0.25, 0.4, 0.5, 0.6, 0.5, 0.6, 0.7, 0.8, 0.9, 1.2, 1.3, 1.5,
];

const dataA = [0.25, null, 1.5, null, 1.0, null, 0.5, null, 1.25, null, 0.75];

const dataB = [
  1.34, 0.88, 1.72, 1.41, 1.67, 1.96, 1.27, 0.91, 1.56, 0.79, 1.23, 1.15, 1.02,
  1.61,
];

const dataC = [
  0.94, 1.63, 1.12, 0.89, 1.36, 1.45, 1.27, 1.11, 1.02, 0.84, 1.76, 1.21, 1.65,
  1.39, 1.08,
];

const xLabels = [
  'M1',
  'M2',
  'M3',
  'M4',
  'M5',
  'M6',
  'M7',
  'M8',
  'M9',
  'M10',
  'M11',
  'M12',
  'M13',
  'M14',
  'M15',
];

export function SimpleLineChart() {
  return (
    <Paper sx={{ width: '100%', margin: '10%' }}>
      <LineChart
        width={800}
        height={300}
        // https://mui.com/x/api/charts/line-series-type/
        series={[
          {
            data: dataA,
            label: 'Data A',
            curve: 'linear',
            connectNulls: true, // データに穴があるときに線を埋める
          },
          { data: dataB, label: 'Data B', curve: 'linear' },
          { data: dataC, label: 'Data C', curve: 'linear' },
          {
            data: target,
            label: 'Target',
            curve: 'monotoneX',
            showMark: false, // データポイントの表示オフ
          },
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        slotProps={{
          legend: {
            hidden: true, // レジェンドの表示オフ
          },
        }}
      />
    </Paper>
  );
}
