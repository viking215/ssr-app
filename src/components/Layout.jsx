import MainHeader from "components/Header";
import styled from "styled-components";
import dynamic from "next/dynamic"

const Footer = dynamic(() => import('components/Footer'))

const Layout = ({children}) => {

    const AppWrapper = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `



    return <AppWrapper>
        <MainHeader />
        {children}
        <Footer />
    </AppWrapper>

}

export default Layout