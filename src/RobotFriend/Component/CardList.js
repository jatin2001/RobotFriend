import React from 'react';
import Card from './Card';


function CardList(props){
        
            return(
                <div className='tc'>
                    {
                        props.roboarray.map(user=>(
                        <Card key={user.id} name={user.name} email={user.email} id={user.id} />
                        ))
                    }
                </div>
            )
    }

export default CardList;