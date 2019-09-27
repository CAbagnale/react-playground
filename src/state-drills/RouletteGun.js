import React from 'react';

export default class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    };
    state = {
        chamber: null,
        spinningTheChamber: false,
    };
    componentWillUnmount() {
        clearTimeout(this.timeout)
    }
    handleButtonClick = () => {
        this.setState({
            spinningTheChamber: true
        })
        this.timeout = setTimeout(() => {
            const randomChamber = Math.floor(Math.random() * 8) + 1
            this.setState({
                chamber: randomChamber,
                spinningTheChamber: false,
            })
        }, 2000)
    }
    displayResult() {
        if (this.state.spinningTheChamber == true) {
            return 'chamber and pulling the trigger! ...'
        }
        else if (this.state.chamber == this.props.bulletInChamber) {
            console.log('chamber: ' + this.state.chamber);
            console.log('the bullet is in chamber: ' + this.props.bulletInChamber);
            return 'BANG!'
        }
        else {
            console.log('chamber: ' + this.state.chamber);
            console.log('the bullet is in chamber: ' + this.props.bulletInChamber);
            return `you're safe.`
        }
    }
    render() {
        return (
            <div>
                <p>{this.displayResult()}</p>
                <button onClick={this.handleButtonClick}>Pull the trigger!</button>
            </div>
        )
    }
}