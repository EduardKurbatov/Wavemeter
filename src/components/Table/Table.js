import DataTable from 'react-data-table-component';
import './Table.scss';


function Table({pairs}) {

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
}

export default Table;
