import React from "react";


export default function Pill(props) {

    let type;

    switch (props.color) {
        default: // default to primary colors when no color has been given
        case "primary": {
            type = "rounded px-1 font-light text-xs text-white bg-gray-700 dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:border";
            break;
        }
        case "secondary": {
            type = "rounded px-1 font-light text-xs text-black border-gray-700 text-white bg-gray-600";
            break;
        }
        case "danger": {
            type = "rounded px-1 font-light text-xs bg-red-600 text-white"
            break;
        }
        case "warning": {
            type = "rounded px-1 font-light text-xs bg-yellow-400 text-black";
            break;
        }
        case "success": {
            type = "rounded px-1 font-light text-xs text-white bg-green-600"
            break;
        }
        case "info": {
            type = "rounded px-1 font-light text-xs text-white bg-blue-600";
            break;
        }

    }

    return (
        <div className={type + " " + props.className}>
            {props.children}
        </div>
    )
}