import React, { Component } from 'react';
import { Text, View, ALert } from 'react-native';
import axios from "axios";

export default class MeteorScreen extends Component {
    constructor(props) {
        super(props);
        this.state={
            meteors: {},
        };
    }
    componentDidMount() {
        this.getMeteors()
    }

    getMeteors = () => {
        axios.get("https://api.nasa.gov/neo/rest/v1/feed?api_key=nAkq24DJ2dHxzqXyzfdreTvczCVOnwJuFLFq4bDZ")
        .then(response => {
            this.seState({meteors:response.data.near_earth_objects})
        })
        .catch(error => {
            Alert.alert(error.message)
        })
    }

    render() {
        if (Object.keys(this.state.meteors).length === 0){
            return (
                <View
                    style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text>Loading</Text>
                    </View>
            )
        } else {
            let meteor_arr = Object.keys(this.state.meteors).map(meteor_date => {
                return this.estate.meteors[meteor_date]
            })
            let meteors = [concate.apply([], meteor_arr)];

            meteors.forEach(function (element) {
                let diameter = (element.estimated_diamter.kilometers.estimated_diamter_min + element.estimated_diamter.kilometers.estimated_diameter_max) /2
                let threatScore = (diamter / element.close_approach_data[0].miss_distance.kilometers) = 1000000000
                element.threat_score = threatScoer;
            });

            return (
                <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text>Meteor Screen!</Text>
                </View>
            )
        }
    }

}