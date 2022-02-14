import {addApolloState, initializeApollo} from "lib/apolloClient";
import GET_TASK_INFO from "../../../queries/getTaskInfo.graphql"
import TaskInfo from "components/TaskInfo";
import Head from "next/head";


const TaskPage = ({task}) => {
    return (
        <>
            <Head>
                <title>{task.tasks_by_pk.title}</title>
            </Head>
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