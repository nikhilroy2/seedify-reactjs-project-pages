import React from "react";
import "./ProfileJumbotron.css";
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';
function ProfileJumbotron(props) {
    const [isOverview, setIsOverview] = useState(true);
    useEffect(()=> {
        setIsOverview(window.location.pathname.includes('overview'))
        
    }, [])

    return (
        <div id="ProfileJumbotron">
            <div className="section_container h-full">
                <div className="flex justify-between h-full items-center">
                    <ul className="tab_list flex self-end">
                        <li  className="me-[40px]">
                            <Link to="/profile/overview" className={isOverview ? 'active_btn': ''}>
                                Overview
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile/claims" className={isOverview ? '': 'active_btn'}>
                                Claims
                            </Link>

                        </li>
                    </ul>
                    <div className="control_wrapper">
                        <button className="btn_modal">
                            Add Wallet
                        </button>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default ProfileJumbotron;
