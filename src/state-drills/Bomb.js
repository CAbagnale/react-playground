import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            count: 0, 
            display: 'tick'
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const newCount = this.state.count + 1;
                this.setState({
                    count: newCount
                })
            const oddEven = parseInt(this.state.count);
            function isEven(n) {
                return n % 2 == 0;
            }
            if (oddEven == 8) {
                this.setState({
                    display: 'BOOM!!!'
                })
                clearInterval(this.interval)
            }
            else if (isEven(oddEven) === false ) {
                this.setState({
                    display: 'tock'
                })
            }
            else if (isEven(oddEven) === true ) {
                this.setState({
                    display: 'tick'
                })
            }
        }, 1000)
    
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                <p>{this.state.display}</p>
            </div>
        )
    }
}

export default Bomb