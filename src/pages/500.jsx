import Link from 'next/link'
import styled from "styled-components";

const CustomTitle = styled.h1`  
    color: red;  
`

const ErrorPage = () => {
    return (
        <>
            <CustomTitle >500 Internal Server Error. </CustomTitle>
            <p>Please<Link href={'/'}> go to safety</Link></p>
        </>
    )
}

export default ErrorPage