"use client";

import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import Pill from "./pill";

export default function FooterTigotech() {

    // This might not be the best option, I want to look for a better option.

    return <footer
        className={"align-bottom p-4 border-t border-b border-gray-100 items-center justify-center text-center dark:bg-gray-800 dark:border-gray-500 dark:text-white"}>
        <h1 className={"text-2xl"}>project by tigo.tech</h1>
        <div className={"flex flex-col lg:flex-row items-center justify-center text-center"}>
            <div className={"py-2 px-8"}>
                <p className={"text-lg font-bold"}>My other sites</p>
                <a className={"flex flex-row my-0.5 w-auto px-2 py-1 rounded-lg justify-center hover:bg-gray-100 dark:hover:bg-gray-700 items-center"} href={"https://tigo.tech"}>tigo.tech</a>
                <a className={"flex flex-row my-0.5 w-auto px-2 py-1 rounded-lg justify-center hover:bg-gray-100 dark:hover:bg-gray-700 items-center"} href={"https://genericdevelopment.nl"}>GenericDevelopment</a>
                <a className={"flex flex-row my-0.5 w-auto px-2 py-1 rounded-lg justify-center hover:bg-gray-100 dark:hover:bg-gray-700 items-center"} href={"https://systemmanager.io"}>SystemManager Core <Pill className={"ml-1"} color={"info"}>You're
                    here</Pill></a>
            </div>

            <div className={"py-2 px-8"}>
                <div>
                    <p className={"text-lg font-bold"}>Socials</p>
                </div>
                <div className={"flex flex-col"}>
                    <a className={"flex flex-row my-0.5 w-auto px-2 py-1 rounded-lg justify-center hover:bg-gray-100 dark:hover:bg-gray-700 items-center"} rel={"noreferrer noopener _blank"}
                       href={"https://github.com/tigomiddelkoop"}><FontAwesomeIcon width={16} className={"mr-1"}
                                                                                   icon={faGithub}/> GitHub</a>

                    <a className={"flex flex-row my-0.5 w-auto px-2 py-1 rounded-lg justify-center hover:bg-gray-100 dark:hover:bg-gray-700 items-center"} rel={"noreferrer noopener _blank"}
                       href={"https://www.linkedin.com/in/tigo-middelkoop-92067a15b/"}><FontAwesomeIcon width={16}
                                                                                                        className={"mr-1"}
                                                                                                        icon={faLinkedin}/> LinkedIn</a>
                    <a className={"flex flex-row my-0.5 w-auto px-2 py-1 rounded-lg justify-center hover:bg-gray-100 dark:hover:bg-gray-700 items-center"} rel={"noreferrer noopener _blank"}
                       href={"https://twitter.com/__Tigo__"}><FontAwesomeIcon width={16}
                                                                              className={"mr-1"}
                                                                              icon={faTwitter}/> Twitter</a>
                </div>
            </div>
        </div>
    </footer>

}