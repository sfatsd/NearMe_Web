import React from 'react';
import { Tabs, Button } from 'antd';
import { GEO_OPTIONS, POS_KEY} from "../constants";

const TabPane = Tabs.TabPane;

const operations = <Button>Extra Action</Button>;



export class Home extends React.Component {

    getGeoLocation = () => {
        if (navigator && navigator.geolocation) {
            this.setState({ loadingGeoLocation: true, error: '' });
            navigator.geolocation.getCurrentPosition(
                this.onSuccessLoadGeoLocation,
                this.onFailedLoadGeoLocation,
                GEO_OPTIONS
            );
        } else {
            this.setState({ error: 'Your browser does not support geolocation!'});
        }
    }

    onSuccessLoadGeoLocation = (position) => {
        console.log(position)
        const { latitude: lat, longitude: lon} = position.coords;
        localStorage.setItem(POS_KEY, JSON.stringify({ lat: lat, lon: lon}))

}

    onFailedLoadGeoLocation = () => {
        this.setState({ loadingGeoLocation: false, error: 'Failed to load geo location!' });
    }

    componentDidMount() {
        this.getGeoLocation();
    }

    render() {
        return (
            <Tabs tabBarExtraContent={operations} className="main-tabs">
                <TabPane tab="Posts" key="1">Content of Tab Pane 1</TabPane>
                <TabPane tab="Map" key="2">Content of Tab Pane 2</TabPane>
            </Tabs>
        );
    }
}