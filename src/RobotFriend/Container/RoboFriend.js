import React,{Component} from 'react';
import CardList from '../Component/CardList';
import 'tachyons';
import './robofriend.css';
import SearchList from '../Component/SearchList';
import Scroll from '../Component/Scroll';
import ErrorBoundary from '../Component/ErrorBoundary';
import Loading from '../Component/Loading';
import NotFound from '../Component/NotFound';
class Robo extends Component 
{
    constructor(props)
    {
        super(props);

        this.state ={
            user:[],
            isLoad:false,
            searchField:'',
        }
        this.onSearchChange = this.onSearchChange.bind(this);
       
    }
    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                user:json,isLoad:true,
            })
        })
    }
    onSearchChange(e)
    {
        this.setState({searchField:e.target.value});
        console.log(this.state.searchField);
    }
   
    render()
    {        
            const FilterRobot = this.state.user.filter(item=>(
                item.name.toLowerCase().includes(this.state.searchField.toLowerCase())
                ||item.email.toLowerCase().includes(
                    this.state.searchField.toLowerCase())
                )
                );
            return( 
                <div>
                    <h1 className='tc f1'>RoboFriend</h1>
                    <SearchList searchChange={this.onSearchChange}/>
                    <ErrorBoundary>
                    {
                        this.state.isLoad?
                        FilterRobot.length===0? <NotFound/>
                        : <Scroll>
                            <CardList roboarray={FilterRobot}/>
                         </Scroll>
                        : <Loading/>
                    }
                    </ErrorBoundary>
                </div>
            )
        
    }
}

export default Robo;