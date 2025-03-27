import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import tableData from '../data/tableData.json';

// MUIドキュメント
// https://mui.com/material-ui/react-table/?srsltid=AfmBOopTTelBjXQo0VGqnmlDQzt03rV75ibwSk0YxhK0iaHWqtj0vlde#column-grouping

type rawData = {
  column1: string;
  column2: number;
  groupA: {
    column3: number;
    column4: number;
  };
  groupB: {
    column6: number;
    column7: number;
  };
  groupC: {
    column8: number;
    column9: number[];
  };
};

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number[]) => string;
}

/*
columnsのidとDataのkeyを合わせておくことで、データ挿入時に、
rowのmapの中でcolumnsをmapして、row[column.id]とすることで、
columnに対応したデータを挿入できる
*/
const columns: Column[] = [
  { id: 'column1', label: 'Column1' },
  { id: 'column2', label: 'Column2', align: 'right' },
  { id: 'column3', label: 'Column3', align: 'right' },
  { id: 'column4', label: 'Column4', align: 'right' },
  { id: 'column5', label: 'Column5', align: 'right' },
  { id: 'column6', label: 'Column6', align: 'right' },
  { id: 'column7', label: 'Column7', align: 'right' },
  { id: 'column8', label: 'Column8', align: 'right' },
  { id: 'column9', label: 'Column9', align: 'right' },
];

// 最終的に渡すデータの型
interface Data {
  column1: string;
  column2: number;
  column3: number;
  column4: number;
  column5: number;
  column6: number;
  column7: number;
  column8: number;
  column9: string;
}

// 取得したデータから、表示する（テーブルに渡す）データを成形
function createData(rawData: rawData): Data {
  const { column1, column2, groupA, groupB, groupC } = rawData;
  const column5 = groupA.column3 + groupA.column4;

  return {
    column1,
    column2,
    column3: groupA.column3,
    column4: groupA.column4,
    column5,
    column6: groupB.column6,
    column7: groupB.column7,
    column8: groupC.column8,
    column9: groupC.column9.join(', '),
  };
}

const rows: Data[] = tableData.map((item) => {
  return createData(item);
});
console.log(rows);

export function ColumnGroupingTable() {
  return (
    <Paper sx={{ width: '100%', margin: '10%' }}>
      <TableContainer>
        <Table>
          <TableHead>
            {/* グループの設定 */}
            <TableRow>
              <TableCell align="left" colSpan={1} />
              <TableCell align="left" colSpan={1} />
              <TableCell align="left" colSpan={3}>
                Group A
              </TableCell>
              <TableCell align="left" colSpan={2}>
                Group B
              </TableCell>
              <TableCell align="left" colSpan={2}>
                Group c
              </TableCell>
            </TableRow>
            {/* カラムの設定 */}
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {/* データの挿入 */}
          <TableBody>
            {rows.map((row, index) => {
              return (
                <TableRow key={index}>
                  {columns.map((column) => {
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {row[column.id as keyof Data]}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
