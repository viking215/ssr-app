import {addApolloState, initializeApollo} from "../../lib/apolloClient";
import GLOBALS from "../../../queries/globals.graphql";
import GET_ICONS from "../../../queries/getIcons.graphql";
import Image from "next/image";
import styled from "styled-components";


const Tasks = ({ resultObject, arrStates, codeLocale}) => {

    const Wrapper = styled.div`
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      justify-items: center;
    `

    return (
        <div>
            <div style={{display: "flex"}}>
                <p>Current language:</p>
                <span>
                <Image src={resultObject?.data}
                       alt={codeLocale}
                       width="30"
                       height="30"
                />
            </span>
            </div>
            <Wrapper>
                {arrStates.map((element, index) => {
                    return(
                        <div key={index}>
                            <h2>{element}</h2>
                        </div>
                    )})}
            </Wrapper>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const apolloClient = initializeApollo();

    const {locale} = context


    const responseStates = await apolloClient.query({
        query: GLOBALS
    })

    const responseIcons = await apolloClient.query({
        query: GET_ICONS
    })

    const icons = responseIcons.data.icons

    const states = responseStates?.data.settings[0].localization.states

    const arrStates = []

    for (let key in states) {
        arrStates.push(states[key][locale].auto)
    }
    const modificateLocal = locale => {
        switch (locale) {
            case "ru":
                return "russia";
            case "en":
                return "usa";
            case "el":
                return "greece";
            case "sr":
                return "serbian";
            case "fr":
                return "france";
            case "ge":
                return "georgia";
            case "al":
                return "albanian";
            case "ae":
                return "uae";
            case "he":
                return "israel";
            case "tr":
                return "turkey";
            case "cn":
                return "china";
            case "ja":
                return "japan";
            case "is":
                return "iceland";
            case "pl":
                return "poland";
            case "bg":
                return "bulgaria";
            case "ba":
                return "bosnia-herzeg";
            case "lb":
                return "lebanon";
            case "sy":
                return "syria";
            case "es":
                return "spain";
            case "fi":
                return "fineland";
            default:
                return locale;
        }
    };

    let codeLocale = modificateLocal(locale);
    const resultObject = icons?.find(item => item.code === codeLocale);

    return addApolloState(apolloClient, {
        props: {
            states,
            icons,
            resultObject,
            codeLocale,
            arrStates
        }
    })
}

export default Tasks