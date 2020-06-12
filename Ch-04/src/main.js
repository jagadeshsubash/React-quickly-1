class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.launchClock()
        this.state = {currentTime: (new Date()).toLocaleString()}
    }

    launchClock() {
        setInterval(() => {
            console.log('Updating time...')
            this.setState({
                currentTime: (new Date()).toLocaleString()
            })
        }, 500);
    }

    render() {
        console.log('Rendering clock...')
        return <div>{this.state.currentTime}</div>
    }
}
ReactDOM.render(
    <Clock />,
    document.getElementById('content-1')
)

//stateless components
const HelloWorld = function(props) {
    return <h1 {...props}>Hello {props.frameworkName} World!!</h1>
}
ReactDOM.render(
    <HelloWorld frameworkName='React'/>,
    document.getElementById('content-2')
)