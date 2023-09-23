import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class MyComponent extends Component {
    constructor() {
        console.log(`constructor -------------->  `);
        super();
        this.state = {
            counter: 0,
        }

    }

    componentDidMount() {
        console.log(`componentDidMount --------------> `);
    }

    componentDidUpdate() {
        console.log(`componentDidUpdate --update------------>`);
    }

    componentWillUnmount() {
        console.log(`componentWillUnmount --------------> `);
    }

    static getDerivedStateFromError() {
        console.log(`getDerivedStateFromError --------------> `);
    }

    shouldComponentUpdate(nextProps, nextState) {
        //         This method is called before rendering, when new props or state are received.
        // It's used to determine if the component should re-render.
        // By default, it returns true, but you can implement custom logic to optimize rendering.
        console.log(`shouldComponentUpdate -------------->`);
        console.log(`nextProps --------------> ${JSON.stringify(nextProps)}`);
        console.log(`nextState --------------> ${JSON.stringify(nextState)}`);
        return true;
    }


    getSnapshotBeforeUpdate(prevProps, prevState) {

        // This method is called just before the component's updates are applied to the DOM.
        // It's used for capturing information from the DOM before changes are made (e.g., scroll position).
        // The value returned from this method is passed as the third parameter to componentDidUpdate.
        console.log(`getSnapshotBeforeUpdate -------------->`);
        console.log(`prevProps --------------> ${JSON.stringify(prevProps)}`);
        console.log(`prevState --------------> ${JSON.stringify(prevState)}`);
        return null;
    }



    render() {
        const { navigate } = this.props.navigation;
        console.log(`render  --------------> `);
        return (

            <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', flex: 1 }}>
                <Text>count value : {this.state.counter}</Text>
                <Button title='Inc' onPress={() => { this.setState({ counter: this.state.counter + 1 }) }} />

                <View style={{ marginTop: 10 }}>
                    <Button title='Dec' onPress={() => { this.setState({ counter: this.state.counter - 1 }) }} />
                </View>

                <View style={{ marginTop: 20 }}>
                    <Button title='HomePage' onPress={() => { navigate('HomePage') }} />
                </View>
            </View>
        )
    }
}

export default (MyComponent);