import React from 'react';

import Link from 'next/link';
import {Layout, Menu} from 'antd';
import SidebarWrapper from './sidebar.style';

import Logo from './Logo';
import {siteConfig} from '../../data/index';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const {Sider} = Layout;


const Sidebar = ({
                     collapsed,
                 }) => {
    const isCollapsed = collapsed;
    const mode = collapsed === true ? 'vertical' : 'inline';
    let scrollheight = process.browser && window.innerWidth;

    const styling = {
        // backgroundColor: customizedTheme.backgroundColor,
    };
    const submenuStyle = {
        backgroundColor: 'rgba(0,0,0,0.3)',
        // color: customizedTheme.textColor,
    };
    const submenuColor = {
        // color: customizedTheme.textColor,
    };
    const url = siteConfig.dashboard;

    return (
        <SidebarWrapper>
            <Sider
                trigger={null}
                collapsible={true}
                collapsed={isCollapsed}
                width={240}
                className="isomorphicSidebar"
                // style={styling}
            >
                <Logo collapsed={collapsed}/>
                    <Menu
                        // onClick={this.handleClick}
                        theme="dark"
                        mode={mode}
                        // openKeys={collapsed ? [] : app.openKeys}
                        // selectedKeys={app.current}
                        // onOpenChange={this.onOpenChange}
                        className="isoDashboardMenu"
                    >
                        <Menu.Item key="mailbox">
                            <Link href={`${url}`}>
                                <a className="isoMenuHolder" style={submenuColor}>
                                    <i className="ion-android-mail"/>
                                    <span className="nav-text">
                      Text1
                    </span>
                                </a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="chat">
                            <Link href={`${url}/page2`}>
                                <a className="isoMenuHolder" style={submenuColor}>
                                    <i className="ion-chatbubbles"/>
                                    <span className="nav-text">
                      Text2
                    </span>
                                </a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="invoice">
                            <Link href={`${url}/invoice`}>
                                <a className="isoMenuHolder" style={submenuColor}>
                                    <i className="ion-clipboard"/>
                                    <span className="nav-text">
                      Text3
                    </span>
                                </a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="contacts">
                            <Link href={`${url}/contacts`}>
                                <a className="isoMenuHolder" style={submenuColor}>
                                    <i className="ion-android-person-add"/>
                                    <span className="nav-text">
                      Text4
                    </span>
                                </a>
                            </Link>
                        </Menu.Item>
                    </Menu>
            </Sider>
        </SidebarWrapper>
    );
}


export default Sidebar;
