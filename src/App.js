import './App.css';
import * as React from 'react'
import Button from '@material-ui/core/Button';

import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {DataGrid} from '@material-ui/data-grid';

const useStyles = makeStyles({
    table: {
        minWidth: 600,
    },
});

const columns = [
    // {field: 'id', headerName: 'row #', width: 70, type: 'number', sortable: false},
    {field: 'showid', headerName: 'TVM ID', width: 130},
    {field: 'showname', headerName: 'Name', width: 130},
    {field: 'type', headerName: 'Type', width: 130},
    //{
    //    field: 'age',
    //    headerName: 'Age',
    //    type: 'number',
    //    width: 90,
    //},
    //{
    //    field: 'fullName',
    //    headerName: 'Full name',
    //    description: 'This column has a value getter and is not sortable.',
    //    sortable: false,
    //    width: 160,
    //    valueGetter: (params) =>
    //        `${params.getValue('firstName') || ''} ${
    //            params.getValue('lastName') || ''
    //        }`,
    //},
]

//function tvm_data() {
//    return fetch('http://srvit.me:8000/apis/v1/shows/page/1')
//}

const tvm_rows = [{
    "id": 1,
    "showid": "1000",
    "showname": "Squidbillies",
    "url": "http://www.tvmaze.com/shows/1000/squidbillies",
    "type": "Animation",
    "showstatus": "Running",
    "premiered": "2005-10-16",
    "language": "English",
    "runtime": "15",
    "network": "Adult Swim",
    "country": "United States",
    "tvrage": "2292",
    "thetvdb": "79017",
    "imdb": "tt0457146",
    "tvmaze_updated": "1573498199",
    "tvmaze_upd_date": "2019-11-11",
    "status": "Skipped",
    "download": "None",
    "record_updated": "2019-11-11",
    "alt_showname": "Squidbillies",
    "alt_sn_override": "None",
    "eps_count": "None",
    "eps_updated": "None"
}, {
    "id": 2,
    "showid": "1001",
    "showname": "Bag of Bones",
    "url": "http://www.tvmaze.com/shows/1001/bag-of-bones",
    "type": "Scripted",
}, {
    "id": 3,
    "showid": "1002",
    "showname": "Camelot",
    "url": "http://www.tvmaze.com/shows/1002/camelot",
    "type": "Scripted",
}]

const rows = [{
    "id": 1,
    "showid": "123",
    "showname": "Lost",
    "type": "Scripted",
}, {
    "id": 2,
    "showid": "17377",
    "showname": "Lost",
    "type": "Reality",
}]

function BasicTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>TVMaze ID</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="left">Type</TableCell>
                        <TableCell align="left">Status</TableCell>
                        <TableCell align="left">Premiered</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.showid}>
                            <TableCell component="th" scope="row">
                                {row.showid}
                            </TableCell>
                            <TableCell align="right">{row.showname}</TableCell>
                            <TableCell align="left">{row.type}</TableCell>
                            <TableCell align="left">{row.showstatus}</TableCell>
                            <TableCell align="left">{row.premiered}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function EnhancedTable() {
    return (
        <div style={{height: 400, width: '100%'}}>
            <DataGrid rows={tvm_rows} columns={columns} pageSize={10} checkboxSelection
                      rowsPerPageOptions={[10, 25, 50, 100]}/>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <Button variant="contained" color="primary">TVMaze Basic Table Example</Button>
            <BasicTable/>
            <Button variant="contained" color="secondary">TVMaze Data Grid Table Example</Button>
            <EnhancedTable />
        </div>
    );
}

export default App;
