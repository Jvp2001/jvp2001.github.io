import fscreen from "fscreen";

function isOfType<T>(obj: any, key: keyof T): obj is T
{
    return key in obj
}

function createProjectItemElement(vars: EnginePageConfigVars, element: ProjectElement)
{
    if (isOfType<VideoConfig>(element, "showControls"))
    {

        const videoTag = document.createElement("video") as HTMLVideoElement
        videoTag.title = "Click to maximise and play."
        // videoTag.src = `${vars.rawContentUrl}/${vars.videoUrl}/${element.name}`.replace("//", "/")
        videoTag.src = `${element.name}`
        videoTag.src.endsWith(vars.defaultVideoExtension) || (videoTag.src += vars.defaultVideoExtension)
        const size = element.style.size

        videoTag.style.width = `${size.width}px`
        videoTag.style.height = `${size.height}px`
        videoTag.style.objectFit = element.style.fit
        videoTag.controls = element.showControls
        if (element.maximiseOnClick)
            videoTag.addEventListener("click", async _ =>
            {
                fscreen.requestFullscreen(videoTag)
                await videoTag.play()


            })
        fscreen.addEventListener("fullscreenElement", async _ =>
        {
            if (element.autoplay)
            {
                await videoTag.play()
            }

        })
        fscreen.onfullscreenchange = _ => videoTag.pause()
        videoTag.onkeyup = e =>
        {
            if(e.key === "Escape")
                videoTag.pause()
        }
        videoTag.onended = _ => fscreen.exitFullscreen()


        return videoTag
    }

    if (isOfType<ImageConfig>(element, "style"))
    {
        const imgTag = document.createElement("img") as HTMLImageElement
        // imgTag.src = `${vars.rawContentUrl}/${vars.imageUrl}/${element.name}`.replace("//", "/")
        imgTag.src = `${element.name}`
        const size = element.style.size

        imgTag.style.width = `${size.width}px`
        imgTag.style.height = `${size.height}px`
        imgTag.style.objectFit = element.style.fit
        return imgTag
    } else
        throw new Error("Unrecognised ProjectElement type")
}

function createProjectItem(vars: EnginePageConfigVars, itemInfo: EnginePageProjectConfig)
{
    const root = document.createElement("div") as HTMLDivElement
    root.classList.add("col-4", "col-12-mobile")

    const article = document.createElement("article") as HTMLElement
    article.classList.add("item")
    article.title = "Hover to enlarge"

    const aTag = document.createElement("a") as HTMLAnchorElement
    switch (itemInfo.link.type)
    {
        case "GitHub":
            aTag.href = `${itemInfo.link.value}`.replace("//", "/")
            break
        case "SubPage":
            aTag.href = `${itemInfo.link.value}`.replace("//", "/")
            break
        default:
            break
        
        
    }
    console.log(aTag.href)


    const projectTag = createProjectItemElement(vars, itemInfo.element)
    //imgTag.style.objectFit = itemInfo.image.style.fit ?? "cover"
    const header = document.createElement("header") as HTMLElement

    const h3Tag = document.createElement("h3") as HTMLHeadingElement
    h3Tag.textContent = itemInfo.name
    console.log(itemInfo.name)
    header.append(aTag)

    aTag.append(h3Tag)
    article.append(projectTag, header)
    root.append(article)

    return root


}


export function setupEnginePage(config: EnginePageConfig)
{               let container: HTMLDivElement | null = document.querySelector("#portfolio div.container")
    console.log(config)
    const variables = config.variables
    const pages = config.portfolio?.projects
    const vars = variables ?? {
        gitHubPageURL: "",
        imageUrl: "",
        rawContentUrl: "",
        gitHubWebPagesUrl: "",
        videoUrl: "",
        defaultVideoExtension: ""
    }   satisfies EnginePageConfigVars
    const row = document.createElement("div") as HTMLDivElement
    row.classList.add("row")
    console.log(pages!)
    for (const page of pages!)
    {
        row.append(createProjectItem(vars, page))
    }
    console.log("Is container valid? ", container != null)
    container!.append(row)
}
