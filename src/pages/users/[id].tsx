import UserInfo from "components/UserInfo"
import {addApolloState, initializeApollo} from "lib/apolloClient";
import GET_USER_INFO from "../../../queries/getUserInfo.graphql"


const UserPage = ({user}) => {
    return (
        <>
            <UserInfo user={user}/>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const apolloClient = initializeApollo();
    const { id } = context.query;

    const response = await apolloClient.query({
        query: GET_USER_INFO,
        variables: {
            id,
        },
    })

    const data = response?.data

    return addApolloState(apolloClient, {
        props: {user: data}
    })
}

export default UserPage