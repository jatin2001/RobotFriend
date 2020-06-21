import React,{Component} from 'react';
import Something from './error.png';
class ErrorBoundary extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            hasError:false
        }
    }

    componentDidCatch(error,info)
    {
        this.setState({hasError:true})
    }

    render()
    {
        if(this.state.hasError)
        {
            return(
                <div className='tc mt4'>
                <h1>Ooops Something  Went  Wrong</h1>
                <img src={Something} alt="NotFound"/>
                </div>
            )
        }
        else return this.props.children
    }
}

export default ErrorBoundary;