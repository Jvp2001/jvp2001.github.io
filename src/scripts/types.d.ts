type MutablePortfolioConfig = {
    titleHeading: {
        content: string,
    },
}

// Help from here https://github.com/type-challenges/type-challenges/issues/187 -- by user "gkkachi"
declare type DeepReadonly<T> =
    keyof T extends never
        ? T
        : { readonly [K in keyof T]: DeepReadonly<T[K]> }


declare type PortfolioConfig = DeepReadonly<MutablePortfolioConfig>


type ProjectLinkType = "GitHub" | "SubPage" | "Download" | "Other"
type ProjectLinkConfig =
    { type: "GitHub", repoName: string }
    | { type: "SubPage", pageName: string }
    | { type: "Download", url: string }
    | { type: "Other", url: string }
type ObjectFitValue = "contain" | "cover" | "scale" | "none" | "fill"

declare type MediaElementStyle = { size: { width: number, height: number }, fit: ObjectFitValue };
declare type VideoConfig = {
    name: string,
    style: MediaElementStyle,
    showControls: boolean
    maximiseOnClick: boolean
    autoplay: boolean
};

declare type ImageConfig = {
    name: string,
    style: MediaElementStyle
};

declare type ProjectElement = ImageConfig | VideoConfig;
type EnginePagePortfolioConfig =  { intro: string,  portfolio: {projects: EnginePagePortfolioConfig[]} }
    





    type EnginePageProjectConfig = { name: string, link: { type: ProjectLinkType, value: string }, element: ProjectElement }


type ValidUrlType = `${string}://${string}` | `${string}/${string}` | ""    | `${string}`
type EnginePageConfigVars = { gitHubPageURL: ValidUrlType, rawContentUrl: ValidUrlType, imageUrl: ValidUrlType, videoUrl: ValidUrlType, defaultVideoExtension: string,  gitHubWebPagesUrl: string, [key: string]: string }

type InternalEnginePageConfig = {variables?: EnginePageConfigVars, intro: string, portfolio: { projects: EnginePageProjectConfig[] } }


declare type EnginePageConfig = DeepReadonly<Partial<InternalEnginePageConfig>>

type Engine = "Unreal" | "Unity" | "Godot" | "Other"


declare type EnginePagesConfig = DeepReadonly<{ [key in Engine]   ?: EnginePageConfig } & {[key: string]: EnginePageConfig}>





