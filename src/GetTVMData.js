import axios from 'axios';
import {Component} from 'react'

const base_url = 'http://srvit.me:8000/apis/v1/'

export async function get_Followed_Shows_Async() {
    const result = await axios.get(base_url + `show/1`)
        .then(response => response.data)
        .then(data => console.log('Async Shows Data', data))
        .catch(error => console.log("Error in call", error))
    return result
}

export function get_Followed_Shows() {
    const result = axios.get(base_url + `shows/followed`)
        .then(response => response.data)
        .then(data => console.log('Shows Data', data))
        .catch(error => console.log("Error in call", error))
    console.log('get_Followed_Shows result', result)
    return result
}

export function testing_Axios() {
    axios.get(base_url + 'show/name/lost')
        .then((response) => {
            console.log('Testing Data', response.data);
            console.log('Testing Status', response.status);
            console.log('Testing Status Text', response.statusText);
            console.log('Testing Headers', response.headers);
            console.log('Testing Config', response.config);
        });
}

export class Test extends Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        }
    }

    componentDidMount() {
        console.log('Before DidMount', this.state.array)
        axios.get('http://srvit.me:8000/apis/v1/shows/followed')
            .then(info => console.log('Class Test DidMount result', info.data))
            .then(info => this.setState({ array: info.data } ));
        console.log('After DidMount', this.state.array)
    }
}

export class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
  }

  componentDidMount() {
    fetch('https://hn.algolia.com/api/v1/search?query=redux')
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }
}