import * as React from 'react'
import axios from 'axios'

import Button from '@material-ui/core/Button'
import {DataGrid} from '@material-ui/data-grid'

const valueGetterEps = function (params) {
    if (params.getValue('status') === 'Followed' && params.getValue('showstatus') !== 'In Development') {
        return params.getValue('eps_count')
    } else {
        return '--'
    }
}

const valueGetterRowID = function (params) {
    return params.getValue('id') + 1
}

/*
const valueGetterURL = function (params) {
    return params.getValue('url')
}
*/

const columns = [
    {field: 'id', headerName: 'Row', width: 80, type: 'number', valueGetter: valueGetterRowID},
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
    //{field: 'url', headername: 'TMV', link:100, valueGetter: valueGetterURL},
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
        records: [],
        url:        'http://kluis.us:8000/apis/v1/show/name/lost',
        url_def:    `http://kluis.us:8000/apis/v1/shows/page/12`,
        url_sf:     'http://kluis.us:8000/apis/v1/shows/followed',
        url_al:     'http://kluis.us:8000/apis/v1/show/name/lost/wild',
        url_sl:     'http://kluis.us:8000/apis/v1/show/name/lost',
        url_s15:    'http://kluis.us:8000/apis/v1/show/15',
    }

    componentDidMount() {
        const url = this.state.url
        axios.get(url)
            .then(res => {
                const records = res.data
                this.setState({records: records})
            })
            .catch(error => alert(error))
    }

    set_to_shows_followed() {
        const url = this.state.url_sf
        this.setState({url: url},
            () => {
                this.componentDidMount()
            })
    }

    set_to_shows_default() {
        const url = this.state.url_def
        this.setState({url: url},
            () => {
                this.componentDidMount()
            })
    }

    set_to_shows_all_lost() {
        const url = this.state.url_al
        this.setState({url: url},
            () => {
                this.componentDidMount()
            })
    }

    set_to_shows_lost() {
        const url = this.state.url_sl
        this.setState({url: url},
            () => {
                this.componentDidMount()
            })
    }

    render() {
        return (
            <div>
                <Intro/>
                <h3> Using API: {this.state.url}</h3>
                <div>
                    <Button variant="contained" color="primary"
                            onClick={() => {
                                this.set_to_shows_followed()
                            }}>
                        All 'Followed' Shows</Button>
                    <Button variant="contained" color="secondary"
                            onClick={() => {
                                this.set_to_shows_all_lost()
                            }}>
                        All Shows with 'lost' in the name</Button>
                    <Button variant="contained" color="primary"
                            onClick={() => {
                                this.set_to_shows_default()
                            }}>
                        12th Set with ~1000 shows</Button>
                    <p></p>
                </div>
                <div style={{height: 630, width: '100%'}}>
                    <DataGrid rows={this.state.records} columns={columns} pageSize={10} checkboxSelection
                              rowsPerPageOptions={[10, 25, 50, 100]}/>
                </div>
            </div>
        )
    }
}

function Intro() {
    return (
        <div>
            <h1>Retrieving information from APIs into a Table</h1>
        </div>
    )
}

export default EnhancedTable

/*
import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
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
                            this.setState.url = 'http://kluis.us:8000/apis/v1/shows/followed'
                            hello(`Switching to another URL: `, 'http://kluis.us:8000/apis/v1/shows/followed')
                        }}>
                    Retrieve </Button>
                <p></p>
            </div>
        </form>
    )
}
const useTextFieldStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '4ch',
        },
    },
}))
*/
