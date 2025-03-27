import { Paper } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
// MUIドキュメント
// https://mui.com/x/react-charts/pie/
// https://mui.com/x/api/charts/pie-chart/
// https://mui.com/x/api/charts/pie-plot/
// https://mui.com/x/api/charts/pie-series-type/
// https://mui.com/x/api/charts/pie-arc/
// https://mui.com/x/api/charts/pie-arc-label/

export function BasicPieChart() {
  const data = [
    {
      cause: 'A',
      total: 25,
    },
    {
      cause: 'B',
      total: 30,
    },
    {
      cause: 'C',
      total: 15,
    },
    {
      cause: 'D',
      total: 10,
    },
    {
      cause: 'E',
      total: 5,
    },
  ];

  const dataToSet = () => {
    let totalSum = 0;
    for (let i = 0; i < data.length; i++) {
      totalSum += data[i].total;
    }

    return data.map((item) => {
      const value = parseFloat(((item.total / totalSum) * 100).toFixed(2));
      return {
        id: item.cause,
        value,
        label: 'cause ' + item.cause,
      };
    });
  };

  return (
    <Paper sx={{ width: '100%', margin: '10%', padding: '5%' }}>
      <PieChart
        width={800}
        height={300}
        series={[
          {
            data: dataToSet(),
            arcLabel: (item) => `${item.value} %`,
            arcLabelMinAngle: 35,
            arcLabelRadius: '65%',
          },
        ]}
      />
    </Paper>
  );
}
