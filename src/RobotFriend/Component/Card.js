import React ,{Component} from 'react';

class Card extends Component
{
    
    render()
    {
        return(
            <div className='bg-light-green dib br3 pa3 ma2 grow shadow-5 tc'>
                <img src={`https://robohash.org/${this.props.id}?set=set2&size=150x150`} style={{width:'210px'}} alt="photo1"/>
                <h3>{this.props.name}</h3>
                <p>{this.props.email}</p>
            </div>
        )
    }
}

export default Card