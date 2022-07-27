import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import SidebarItems from "./SidebarItems";
import {Link} from "react-router-dom";

function Sidebar(props, {defaultActive,}) {
    const location = props.history.location;
    const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
    const lastActiveIndex = Number(lastActiveIndexString);
    const [activeIndex, setActiveIndex] = useState(lastActiveIndex || defaultActive);

    function changeActiveIndex(newIndex) {
        localStorage.setItem("lastActiveIndex", newIndex)
        setActiveIndex(newIndex)
    }

    function getPath(path) {
        if (path.charAt(0) !== "/") {
            return  "/" + path;
        }
        return path;
    }

    useEffect(()=> {
        const activeItem = SidebarItems.findIndex(item=> getPath(item.route) === getPath(location.pathname))
        changeActiveIndex(activeItem);
    }, [location])

    return (
        <>
            <SidebarParent>
                <div style={{position: 'fixed'}}>
                    {
                        SidebarItems.map((item, index)=> {
                            return (
                                <Link to={item.route}>
                                    <SidebarItem key={item.name}
                                                 active={index === activeIndex}
                                    >
                                        <p>{item.name}</p>
                                    </SidebarItem>
                                </Link>
                            );
                        })
                    }

                </div>
                <div className="behind-the-scenes"/>
            </SidebarParent>
        </>
    );
}

export default Sidebar;

const SidebarParent = styled.div`
  background: #1C1B20;

  a {
    text-decoration: none;
  }

  & > div {
    width: 250px;
    height: 100vh;
  }

  .behind-the-scenes {
    width: 250px;

  }
`;

const SidebarItem = styled.div`
  padding: 20px 34px;
  transition: all 0.35s ease-in-out;
  background: ${props => props.active ? "#3469FF" : ""};
  margin: 25px 12px;
  border-radius: 25px;

  p {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }

  &:hover {
    cursor:pointer;
  }

  &:hover:not(:first-child) {
    background: #111015;
  }
`;
