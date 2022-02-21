import {Layout, Menu} from "antd";
import Link from "next/link";
import styled from "styled-components";
import {useRouter} from "next/router";
import Device from "./Device/Device";

const {Header} = Layout;

const routes = [
    {label: "Home", link: "/", key: "1"},
    {label: "States", link: "/states", key: "2"},
    {label: "Users", link: "/users", key: "3"},
];

const MainHeader = () => {
    const router = useRouter();


    const { pathname, asPath, query } = router


    const CustomHeader = styled(Header)`
      height: 100%;
    `

    const Aaa = styled.span`
      display: grid;
      justify-content: center;
      align-items: center;
      width: 70px;
      height: 60px;
      background-color: #707070;
      border-radius: 5px;
    `

    const Wrapper = styled.div`
      margin-top: 10px;
      display: grid;
      grid-template-rows: 80px;
      grid-template-columns: repeat(12, 80px);
      justify-content: center;
      grid-gap: 15px;
      cursor: pointer;
    `
    const MobileWrapper = styled.div`
      margin: 10px;
      display: grid;
      grid-template-columns: repeat(4, 50px);
      grid-column-gap: 30px;
      grid-row-gap: 10px;
      
      justify-content: center;
      cursor: pointer;
    `

    const locales = ['ae', 'al', 'cn', 'el', 'en', 'fr', 'ge', 'he', 'ja', 'ru', 'sr', 'tr']

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

    return (
        <>
            <CustomHeader>
            <Device>
                {({ isMobile }) => {
                    if (isMobile) {
                        return <div>
                            <Menu
                                theme="dark"
                                mode="horizontal"
                            >
                                {routes.map((tab, index) => (
                                    <Menu.Item key={tab.key}>
                                        <Link href={tab.link}>
                                            <a>{tab.label}</a>
                                        </Link>
                                    </Menu.Item>
                                ))}
                            </Menu>
                            <MobileWrapper>
                                {
                                    locales.map((element, index) => (
                                        <Aaa
                                            key={index}
                                            style={{marginRight: "10"}}
                                            onClick={() => {
                                                router.push({ pathname, query }, asPath, { locale: element })
                                            }}
                                        >
                                            <p style={{color: "white"}}>{modificateLocal(element)}</p>
                                        </Aaa>

                                    ))
                                }
                            </MobileWrapper>
                        </div>
                    }
                    return <div>
                            <Menu
                                theme="dark"
                                mode="horizontal"
                            >
                                {routes.map((tab, index) => (
                                    <Menu.Item key={tab.key}>
                                        <Link href={tab.link}>
                                            <a>{tab.label}</a>
                                        </Link>
                                    </Menu.Item>
                                ))}
                            </Menu>
                            <Wrapper>
                                {
                                    locales.map((element, index) => (
                                        <Aaa
                                            key={index}
                                            style={{marginRight: "10"}}
                                            onClick={() => {
                                                router.push({ pathname, query }, asPath, { locale: element })
                                            }}
                                        >
                                            <p style={{color: "white"}}>{modificateLocal(element)}</p>
                                        </Aaa>

                                    ))
                                }
                            </Wrapper>
                        </div>
                }}
            </Device>
            </CustomHeader>
        </>
    );
}

export default MainHeader
