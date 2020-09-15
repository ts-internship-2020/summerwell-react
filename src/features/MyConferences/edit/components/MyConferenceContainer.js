import React, { useEffect, useReducer } from 'react'
import { useTranslation } from 'react-i18next';
import { useHeader } from 'providers/AreasProvider';
import MyConferenceHeader from 'features/MyConferences/list/components/MyConferenceHeader';
import SaveButton from 'components/common/buttons/SaveButton';
import LoadingFakeText from 'components/common/fakeText/LoadingFakeText';
import MyConference from './MyConference';
//import { types, categories, countries, counties, cities } from 'utils/mocks/MyConference';
import { reducer, initialConference } from '../MyReducer';
//import { conference as serverConference } from 'utils/mocks/MyConference';
import { useRouteMatch } from 'react-router-dom';
import { CONFERENCE_QUERY } from '../ConferenceQuery';
import { useQuery } from '@apollo/client';
import { useToast } from 'hooks/toasts';

const MyConferenceContainer = () => {
    const addToast = useToast()
    const { t } = useTranslation()
    const match = useRouteMatch();
    const [, setHeader] = useHeader()
    const [conference, dispatch] = useReducer(reducer, initialConference)

    const conferenceId = match.params.id;
    const isNew = conferenceId === 'new';

    useEffect(() => () => setHeader(null), [setHeader])

    useEffect(() => {
        setHeader(<MyConferenceHeader title={conference.name} actions={<SaveButton title={t("General.Buttons.Save")} />} />)
    }, [conference.name, setHeader, t])

    const { loading, data } = useQuery(CONFERENCE_QUERY, {
        variables: { id: conferenceId, isNew },
        onCompleted: data => data?.conference && dispatch({ type: 'resetData', payload: data?.conference }),
        onError: error => addToast(error, 'error', false)
    });

    if (loading) {
        return <LoadingFakeText lines={10} />
    }

    return <MyConference
        conference={conference}
        dispatch={dispatch}
        types={data?.typeList}
        categories={data?.categoryList}
        countries={data?.countryList}
        counties={data?.countyList}
        cities={data?.cityList}
    />
}

export default MyConferenceContainer
