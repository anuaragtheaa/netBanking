import React from 'react';

class GoogleMap extends React.Component {
    state = { lat: 22.553941, log: 72.955586 }
    
    componentDidMount() {
        if('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(position => {
                this.setState({lat: position.coords.latitude})
                this.setState({log: position.coords.longitude})
            })
        }
    }

    render() {
        return (
            <div>
                <iframe
                    title="map"
                    width="100%"
                    height="500"
                    style={{border:0}}
                    loading="lazy"
                    src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyCWJmRma_PwugbhYwDlQcFeFdBaALddyuY&q=${this.props.match.params.find}&center=${this.state.lat},${this.state.log}&zoom=15`}>
                </iframe>
            </div>
        )
    }
}

//export default GoogleApiWrapper({
//    apiKey: 'AIzaSyAIiwiWWk0wm50dmL9WD6iPhSZ8gXrfR5Q'
//})(GoogleMap)

export default GoogleMap;