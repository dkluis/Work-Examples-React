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
import rows_of_data from './rows.js'

import TextField from '@material-ui/core/TextField'

const basic_rows = rows_of_data

const useTableStyles = makeStyles({
    table: {
        minWidth: 600,
    },
})

const useTextFieldStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '4ch',
        },
    },
}));

const valueGetterEps = function (params) {
    if (params.getValue('status') === 'Followed') {
        return params.getValue('eps_count')
    } else {
        return 'N/A'
    }
}

const columns = [
    {field: 'id', headerName: 'row #', width: 70, type: 'number', sortable: false, hide: true},
    {field: 'showid', headerName: 'TVM ID', width: 130},
    {
        field: 'showname',
        headerName: 'Name',
        width: 300,
        resizeable: true,
        type: 'string',
        align: 'left',
        headerAlign: 'left'
    },
    {field: 'type', headerName: 'Type', width: 130},
    {field: 'showstatus', headerName: 'Status', width: 150},
    {field: 'premiered', headerName: 'Premier Date', width: 130},
    {field: 'language', headerName: 'Language', width: 130},
    {field: 'network', headerName: 'Network', width: 130},
    {field: 'country', headerName: 'Country', width: 130},
    {field: 'status', headerName: 'Interest', width: 130},
    {
        field: 'eps_count',
        headerName: 'Episodes',
        descriptions: 'Only followed shows have keep track of episodes',
        width: 130,
        sortable: false,
        valueGetter: valueGetterEps
    },
]

function tvm_data() {
    const api_result = fetch('http://srvit.me:8000/apis/v1/shows/followed/id', {
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost'
        }
    })
        .then(response => response.json())
        .then(result => {
            console.log('Fetch statement, result', result)
        })
        .then(result => {
            return result
        })
    console.log("Fetch before the return, api_result", api_result)
    return api_result
}

async function other_fetch_data() {
    let response = await fetch('http://srvit.me:8000/apis/v1/shows/followed/id', {
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost'
        }
    })
    if (response.ok) {
        let data = await response.json()
        console.log('Other Fetch Data ', data)
        return data
    } else {
        return []
    }
}

const raw_api = [{
    "id": 0,
    "showid": "1",
    "showname": "Under the Dome",
    "url": "http://www.tvmaze.com/shows/1/under-the-dome",
    "type": "Scripted",
    "showstatus": "Ended",
    "premiered": "2013-06-24",
    "language": "English",
    "runtime": "60",
    "network": "CBS",
    "country": "United States",
    "tvrage": "25988",
    "thetvdb": "264492",
    "imdb": "tt1553656",
    "tvmaze_updated": "1573667713",
    "tvmaze_upd_date": "2019-11-13",
    "status": "Not Followed",
    "download": "Multi",
    "record_updated": "2019-11-13",
    "alt_showname": "Under the Dome",
    "alt_sn_override": "None",
    "eps_count": "40",
    "eps_updated": "2020-06-13"
}, {
    "id": 1,
    "showid": "4",
    "showname": "Arrow",
    "url": "http://www.tvmaze.com/shows/4/arrow",
    "type": "Scripted",
    "showstatus": "Ended",
    "premiered": "2012-10-10",
    "language": "English",
    "runtime": "60",
    "network": "The CW",
    "country": "United States",
    "tvrage": "30715",
    "thetvdb": "257655",
    "imdb": "tt2193021",
    "tvmaze_updated": "1601991685",
    "tvmaze_upd_date": "2020-10-06",
    "status": "Followed",
    "download": "Skip",
    "record_updated": "2020-10-06",
    "alt_showname": "Arrow",
    "alt_sn_override": "None",
    "eps_count": "172",
    "eps_updated": "2020-10-06"
}, {
    "id": 2,
    "showid": "5",
    "showname": "True Detective",
    "url": "http://www.tvmaze.com/shows/5/true-detective",
    "type": "Scripted",
    "showstatus": "To Be Determined",
    "premiered": "2014-01-12",
    "language": "English",
    "runtime": "60",
    "network": "HBO",
    "country": "United States",
    "tvrage": "31369",
    "thetvdb": "270633",
    "imdb": "tt2356777",
    "tvmaze_updated": "1580056089",
    "tvmaze_upd_date": "2020-01-26",
    "status": "Followed",
    "download": "ShowRSS",
    "record_updated": "2020-01-26",
    "alt_showname": "True Detective",
    "alt_sn_override": "None",
    "eps_count": "25",
    "eps_updated": "2020-06-13"
}, {
    "id": 3,
    "showid": "6",
    "showname": "The 100",
    "url": "http://www.tvmaze.com/shows/6/the-100",
    "type": "Scripted",
    "showstatus": "Ended",
    "premiered": "2014-03-19",
    "language": "English",
    "runtime": "60",
    "network": "The CW",
    "country": "United States",
    "tvrage": "34770",
    "thetvdb": "268592",
    "imdb": "tt2661044",
    "tvmaze_updated": "1601577688",
    "tvmaze_upd_date": "2020-10-01",
    "status": "Followed",
    "download": "ShowRSS",
    "record_updated": "2020-10-01",
    "alt_showname": "The 100",
    "alt_sn_override": "None",
    "eps_count": "100",
    "eps_updated": "2020-10-01"
}]

const rows = []

function BasicTable() {
    const classes = useTableStyles();

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
                        <TableCell align="left">Language</TableCell>
                        <TableCell align="left">Network</TableCell>
                        <TableCell align="left">Country</TableCell>
                        <TableCell align="left">myStatus</TableCell>
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
                            <TableCell align="left">{row.language}</TableCell>
                            <TableCell align="left">{row.network}</TableCell>
                            <TableCell align="left">{row.country}</TableCell>
                            <TableCell align="left">{row.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function EnhancedTable() {
    //console.log('From Enhanced Table Function', tvm_data())
    console.log('From Enhanced Table Function', other_fetch_data())
    return (
        <div style={{height: 480, width: '100%'}}>
            <DataGrid rows={raw_api} columns={columns} pageSize={7} checkboxSelection
                      rowsPerPageOptions={[10, 25, 50, 100]}/>
        </div>
    )
}

function hello(message, table) {
    console.log(message, table)
    alert('Look in the developer console to see the raw data-array for the ' + message)
}

function Intro() {
    return (
        <div>
            <h1> Work Example handling some table formats</h1>
            <h3> Currently only with static data. Data Retrieval via APIs are coming.</h3>
        </div>
    )
}

function PageInput(props) {
    const classes = useTextFieldStyles()
    return (
        <form className={classes.root}>
            <div>
                <p></p>
                <span>Use the API to retrieve a set of ~1000 show per call: </span>
                <TextField required type='number' id='page-input' size='small'/>
                <span> </span>
                <Button variant='outlined' color='secondary'
                        onClick={() => {
                            hello(`Using API http://srvit.me:8000/apis/v1/shows/page/${TextField.valueOf('page_input')}`, "")
                        }}>
                    Retrieve </Button>
                <p></p>
            </div>
        </form>
    )
}

function App() {
    return (
        <div className="App">
            <Intro/>
            <Button variant="contained" color="primary"
                    onClick={() => {
                        hello('Basic Table Data', basic_rows)
                    }}>
                TVMaze Basic Table Example </Button>
            <BasicTable/>
            <p></p>
            <Button variant="contained" color="secondary"
                    onClick={() => {
                        hello('Enhanced Table Data', other_fetch_data())
                    }}>
                TVMaze Data Grid Table Example</Button>
            <PageInput/>
            <EnhancedTable/>
        </div>
    );
}

export default App;
