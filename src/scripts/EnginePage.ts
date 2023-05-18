import {enginePagesConfig} from "./Config"
// Generate me a regex that finds all console.log statements. The contents of the the log functions could be anything, so we need to use a non-greedy wildcard.
// const consoleLogRegex = /console\.log\((.*?)\)/g

import "../assets/css/main.css"
import {setupEnginePage} from "./PageGenerator"


type EnginePageKeyType = keyof typeof enginePagesConfig;

function onDOMContentLoaded()
{


    let title = document.title
    let engineName: EnginePageKeyType  
    if(title.includes("Portfolio"))
        engineName = title.split(" ")[0] as EnginePageKeyType
    else
        engineName = title.replace(" ", "") as EnginePageKeyType
    
    console.log(engineName)


    const enginePagesConfigElement = enginePagesConfig[engineName] as EnginePageConfig
    
    setupEnginePage(enginePagesConfigElement)
}

window.onload = onDOMContentLoaded


