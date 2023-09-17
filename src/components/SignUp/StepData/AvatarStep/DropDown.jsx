import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export function DropDown(props) {
    // hooks
    const [dropDownIsVisible, setDropdownVisability] = useState(false);

    // create a dispatch function
    const dispatch = useDispatch();

    // state getters

    // state setters

    // handlers 
    const toggleDropdown = () => setDropdownVisability(!dropDownIsVisible);

    // utils

    return (
        <li className="block text-left w-full">
            <button className="w-full flex gap-x-4" onClick={ toggleDropdown }>
                <span className="flex w-full justify-start items-center gap-x-0 text-sm font-sans font-thin tracking-wide leading-5">{ props.options.optionView }</span>
                    <svg className={ dropDownIsVisible ? "-mr-1 h-5 mt-1 w-5 font-thin leading-5 rotate-180" : '-mr-1 h-5 mt-1 w-5 font-thin leading-5' } viewBox="0 0 20 20">
                        <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
                    </svg>
            </button>
            <div className={ dropDownIsVisible ? "w-full flex flex-col gap-y-2 pl-2 pt-2" : 'hidden'}>
                { 
                    props.options.choices.map((choice, index) => 
                        <button key={index} className="w-full flex gap-x-2 justify-between items-center" onClick={() => props.handler(props.Objkey, choice)}>
                            <p 
                                className={
                                    props.config[props.Objkey] === choice 
                                    ? "px-1 text-sm font-sans font-extralight tracking-wide leading-5 text-white bg-stone-900 text-start rounded" 
                                    : "px-1 text-sm font-sans font-extralight tracking-wide leading-5 hover:bg-slate-200 text-start rounded"
                                }
                            >
                                { props.options.choicesView[index] }
                            </p>
                            <span 
                                className={props.options.isColor ? 'w-2 h-2 rounded-sm bg-black' : ''}
                                style={props.options.isColor ? { 'backgroundColor': choice } : {}}
                            >
                            </span>
                        </button>
                    )  
                }
            </div>
        </li>
    )
}