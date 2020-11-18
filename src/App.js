import './App.css'
import * as React from 'react'
import axios from 'axios'

import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'
import {DataGrid} from '@material-ui/data-grid'
import TextField from '@material-ui/core/TextField'


const useTextFieldStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '4ch',
        },
    },
}))

const valueGetterEps = function (params) {
    if (params.getValue('status') === 'Followed' && params.getValue('showstatus') !== 'In Development') {
        return params.getValue('eps_count')
    } else {
        return ''
    }
}

const columns = [
    {field: 'id', headerName: 'Row', width: 80, type: 'number'},
    {field: 'showid', headerName: 'TVM ID', width: 100},
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


class EnhancedTable extends React.Component {
    state = {
        records: []
    }

    componentDidMount() {
        axios.get(`http://srvit.me:8000/apis/v1/shows/followed/id`)
            .then(res => {
                const records = res.data
                this.setState({records})
            })
    }

    render() {
        return (
            <div style={{height: 630, width: '100%'}}>
                <DataGrid rows={this.state.records} columns={columns} pageSize={10} checkboxSelection
                          rowsPerPageOptions={[10, 25, 50, 100]}/>
            </div>
        )
    }
}

function hello(message, table) {
    console.log(message, table)
    alert('Look in the developer console to see the raw data-array for the ' + message)
}

function Intro() {
    return (
        <div>
            <h1> Work Example handling some table formats</h1>
            <h3> The current implemented API is http://srvit.me:8000/apis/v1/shows/followed/id</h3>
        </div>
    )
}

function PageInput(props) {
    const classes = useTextFieldStyles()
    return (
        <form className={classes.root}>
            <div>
                <p></p>
                <em>Not Yet Implemented, just a placeholder for now </em>
                Use the API to retrieve a set of ~1000 show per call:
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
            <Button variant="contained" color="secondary"
                    onClick={() => {
                        hello('Testing retrieving API data', {test})
                    }}>
                TVMaze Data Grid Table Example</Button>
            <PageInput/>
            <EnhancedTable/>
        </div>
    )
}

export default App;
