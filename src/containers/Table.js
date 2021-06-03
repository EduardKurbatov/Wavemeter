import './Table.scss';
import { useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';

export default function Table() {
  const pairs = useSelector(state => state.dataFromBinance.klines).sort((a , b) => b.average - a.average);

  const columns = [
    {
      name: 'Pair',
      selector: 'pair',
      sortable: true,
      cell: pairs => <div>{pairs.symbol}</div>,
    },
    {
      name: 'Average',
      selector: 'average',
      sortable: true,
      cell: pairs => <div>{pairs.average}</div>,
    },
    {
      name: 'Change %',
      selector: 'change',
      sortable: true,
      cell: pairs =>
        <div style={{color: pairs.change > 0 ? 'green' : pairs.change < 0 ? 'red' : 'grey'}}>
          {pairs.change}
        </div>,
    }
  ];

  return (
    <DataTable className="table"
      data={pairs} 
      columns={columns}
      theme="dark"
    />
  )
};
