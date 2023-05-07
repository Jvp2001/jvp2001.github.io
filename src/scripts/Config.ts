export const config: PortfolioConfig = {titleHeading: {content: "Joshua Petersen"}}


export const defaultPageVariables: EnginePageConfigVars =
    {
        gitHubPageURL: "https://github.com/jvp2001",
        gitHubWebPagesUrl: "https://jvp2001.github.io/dist",
        rawContentUrl: "https://jvp2001.github.io/raw/main/src",
        imageUrl: "images",
        videoUrl: "videos",
        defaultVideoExtension: ".mp4"
    }
const imageStyleSettings: MediaElementStyle = {size: {width: 200, height: 200}, fit: "contain"}
export const enginePagesConfig: EnginePagesConfig =
    {
        Unreal: {
            intro: "",
            portfolio: {
                projects: [
                    {
                        name: " Multiplayer Menu UI",
                        link: {type: "GitHub", value: "https://github.com/uniglos/assignment-1-Jvp2001"},
                        element: {
                            name: "https://github.com/Jvp2001/jvp2001.github.io/raw/main/src/videos/Unreal/MultiplayerMenuUI.mp4",
                            showControls: false,
                            maximiseOnClick: true,
                            style: imageStyleSettings
                        }
                    },
                ],
            },
            variables: defaultPageVariables,
        },
        Unity: {
            intro: "",

            portfolio: {
                projects: [
                    {
                        name: "Maze Game",
                        link: {
                            type: "GitHub",
                            value: "https://github.com/uniglos/ct4026-20202021-assignment-2-Jvp2001"
                        },
                        element: {
                            name: "https://raw.githubusercontent.com/Jvp2001/jvp2001.github.io/main/src/images/Unity/Maze.gif",
                            style: imageStyleSettings
                        }


                    },
                    {
                        //TODO: Find the correct Git repo for this
                        name: "3D level",
                        link: {
                            type: "GitHub",
                            value: "https://github.com/uniglos/ct4026-20202021-assignment-1-Jvp2001"
                        },
                        element: {
                            name: "https://raw.githubusercontent.com/Jvp2001/jvp2001.github.io/main/src/images/Unity/3DGameLevel.gif",
                            style: imageStyleSettings
                        }
                    },
                    {
                        name: "UI",
                        link: {type: "SubPage", value: "https://jvp2001.github.io/src/UnityUI.html"},
                        element: {
                            name: "https://raw.githubusercontent.com/Jvp2001/jvp2001.github.io/main/src/images/Unity/Button.png",
                            style: imageStyleSettings
                        }
                    }
                ],
            },
            variables: defaultPageVariables,

        },
        "UnityUI": {
            intro: "",
            portfolio: {
                projects: [
                    {
                        name: "Button Animation",
                        link: {
                            type: "GitHub",
                            value: "https://github.com/Jvp2001/jvp2001.github.io/raw/main/src/videos/Unity/ButtonAnimation.mov"
                        },
                        element: {
                            name: "ButtonAnimation.mov",
                            showControls: false,
                            maximiseOnClick: true,
                            autoplay: true,
                            style: imageStyleSettings
                        },
                    },
                    {
                        name: "Slider Animation",
                        link: {type: "GitHub", value: "Slider"},
                        element: {
                            name: "SliderAnimation.mov",
                            showControls: false,
                            maximiseOnClick: true,
                            autoplay: true,
                            style: imageStyleSettings
                        }
                    }
                ],
            },
            variables: defaultPageVariables,
        },
    }
