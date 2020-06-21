import React from 'react';


class Scroll extends React.Component
{
    render()
    {
        return(
            <div style={{overflowY:'scroll',height:'500px',marginTop:'25px'}}>
                {this.props.children}
            </div>
        )
    }
}

export default Scroll;