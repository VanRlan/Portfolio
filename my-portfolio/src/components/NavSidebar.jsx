import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const NavSidebar = [
    {
        title: "Home",
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: "Resume",
        path: '/resume',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: "Contact",
        path: '/contact',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
]
