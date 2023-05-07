import {enginePagesConfig} from "./Config";
// Generate me a regex that finds all console.log statements. The contents of the the log functions could be anything, so we need to use a non-greedy wildcard.
// const consoleLogRegex = /console\.log\((.*?)\)/g

import "../assets/css/main.css"
import {setupEnginePage} from "./PageMaker";


function onDOMContentLoaded()
{


    let title = document.title
    let engineName: keyof typeof enginePagesConfig
    
    if(title.includes("Portfolio"))
        engineName = title.split(" ")[0] as keyof typeof enginePagesConfig
    else
        engineName = title
    
    console.log(engineName)
   
    setupEnginePage(enginePagesConfig[engineName] as EnginePageConfig)
}

window.onload = onDOMContentLoaded


