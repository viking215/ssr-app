import UserInfo from "components/UserInfo"
import {addApolloState, initializeApollo} from "lib/apolloClient";
import GET_TASK_INFO from "../../../queries/getUserInfo.graphql"
import TaskInfo from "components/TaskInfo";


const TaskPage = ({task}) => {
    return (
        <>
            <TaskInfo task={task}/>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const apolloClient = initializeApollo();
    const { id } = context.query;

    const response = await apolloClient.query({
        query: GET_TASK_INFO,
        variables: {
            id,
        },
    })

    const data = response?.data
    return addApolloState(apolloClient, {
        props: {task: data}
    })
}

export default TaskPage