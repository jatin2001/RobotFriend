import React, { Component } from 'react'

export default class Loading extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            text:'Loading'
        }
    }
    componentDidMount() {
           const stopper = this.state.text + '...';
    
            this.interval = window.setInterval(() => {
              this.state.text === stopper
                ? this.setState(() => ({ text: 'Loading' }))
                : this.setState((prevState) => ({ text: prevState.text + '.' }))
            }, 300)
    }
    componentWillUnmount()
    {
        window.clearInterval(this.interval);
    }
    
    render() {
        return (
            <div>
                <h1 className='tc'>{this.state.text}</h1>
            </div>
        )
    }
}
