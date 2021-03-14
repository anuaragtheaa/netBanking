import React from 'react';

class UpdateModel extends React.Component {
    render() {
        console.log('it colled')
        if(this.props.type === 'pic'){
            return (
                <div>update pic</div>
            )
        }
        else {
            return (
                <div>
                    update email or phone
                </div>
            )
        }
    }
}

export default(UpdateModel)