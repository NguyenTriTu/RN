import React from 'react';
import { AdMobBanner } from 'expo';
import { View } from 'react-native';
import { BANNER_ID } from './config';

export default class AdBanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
        };
    }

    render() {
        return this.state.isVisible ? (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                }}
            >
                <AdMobBanner
                    adViewDidReceiveAd={() => this.showAd()}
                    bannerSize="banner"
                    adUnitID={BANNER_ID}
                    didFailToReceiveAdWithError={error => this.onError(error)}
                />
            </View>
        ) : (
            <View />
        );
    }

    onError(error) {
        console.log('banner error: ', error);
        this.setState({
            isVisible: false,
        });
    }

    showAd() {
        this.setState({
            isVisible: true,
        });
    }

    componentDidMount() {
        this.setState({
            isVisible: true,
        });
    }
}
