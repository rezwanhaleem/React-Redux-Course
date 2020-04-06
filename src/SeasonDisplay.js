import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    spring: {
        message: 'Time to start planting ',
        iconName: 'leaf'
    },
    summer : {
        message: 'You\'ll need a jacket today',
        iconName: 'sun'
    },
    autumn: {
        message: 'Rake up all the leaves!',
        iconName: 'leaf'
    },
    winter: {
        message: 'You can wear shorts today!',
        iconName: 'snowflake'
    }
}

const getSeason = (lat,month) => {
    if (month >= 2 && month <= 4){
        return lat > 0 ? 'spring' : 'autumn';
    } else if (month >= 5 && month <= 7){
        return lat > 0 ? 'summer' : 'winter';
    } else if (month >= 8 && month <= 10){
        return lat > 0 ? 'autumn' : 'spring';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {message, iconName} = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{message}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;