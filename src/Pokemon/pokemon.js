import React, { Component } from 'react'

export default class pokemon extends Component {

    constructor(props)
    {   super(props);
        this.state={
            pokearray:[],
            isLoad:false,
            page:0,
            next:'',
            prev:'',
        }
    }
    componentDidMount()
    {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res=>res.json())
        .then(json=> this.setState({
            pokearray:json.results,
            isLoad:true,
            next:json.next,
            prev:json.previous,
        }))
    }
    componentDidUpdate(prevProps,prevState)
    {   
        if(prevState.page > this.state.page)
        {
            fetch(this.state.prev)
            .then(res=>res.json())
            .then(json=> this.setState({
                pokearray:json.results,
                isLoad:true,
                next:json.next,
                prev:json.previous,
            }))
        }
        if(prevState.page < this.state.page){
            fetch(this.state.next)
            .then(res=>res.json())
            .then(json=> this.setState({
                pokearray:json.results,
                isLoad:true,
                next:json.next,
                prev:json.previous,
            }))
        }
    }
    handleNext()
    {
        this.setState((prevState)=>({
            page:prevState.page+1,
        }))     
    }
    handlePrev()
    {
        this.setState((prevState)=>({
            page:prevState.page-1,
        }))   
    }
    render() {
       if(this.state.isLoad)
       {
        return (
           <div>
                <ul>
                    {
                        this.state.pokearray.map(item=>(
                        <li key={item.name}>
                            <h2>{item.name}</h2>
                        
                        </li>
                        ))
                    }
                </ul>
                <button onClick={this.handlePrev.bind(this)}>Prev</button>
                <button onClick={this.handleNext.bind(this)}>Next</button>
           </div>
        )
       }
       else{
           return <h1>Loading</h1>
       }
    }
}
