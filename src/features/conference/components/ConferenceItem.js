import React from 'react';
import PropTypes from 'prop-types';
import RegularCard from 'components/common/cards/RegularCard';
import ConferenceSubtitle from './ConferenceSubtitle';
import ConferenceContent from './ConferenceContent';

const ConferenceItem = (props) => {
    const { conference } = props
    const { name, speakers, location } = conference
    const speaker = speakers.find(speaker => speaker.isMainSpeaker)

    return (
        <RegularCard
            cardTitle={name}
            cardSubtitle={
                <ConferenceSubtitle
                    speaker={speaker}
                    location={location}
                />}
            content={
                <ConferenceContent
                    conference={conference}
                />}
        />
    )
}

ConferenceItem.propTypes = {
    conference: PropTypes.object.isRequired
}

export default ConferenceItem;