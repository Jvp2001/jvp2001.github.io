export const config: PortfolioConfig = {titleHeading: {content: "Joshua Petersen"}}


export const defaultPageVariables: EnginePageConfigVars =
    {
        gitHubPageURL: "https://github.com/jvp2001",
        gitHubWebPagesUrl: "https://jvp2001.github.io/dist",
        rawContentUrl: "https://github.com/Jvp2001/jvp2001.github.io/raw/main/src",
        imageUrl: "images",
        videoUrl: "videos",
        defaultVideoExtension: ".mp4"
    }
export const enginePagesConfig: EnginePagesConfig =
    {
        Unreal: {
            intro: "",
            portfolio: {
                projects: [
                    {
                        name: " Multiplayer Menu UI",
                        link: {type: "GitHub", value: "Unreal/MultiplayerMenuUI.mp4"},
                        element: {
                            name: "MultiplayerMenuUI",
                            showControls: false,
                            maximiseOnClick: true,
                            style: {size: {width: 200, height: 200}, fit: "contain"}
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
                        link: {type: "GitHub", value: "MazeGame"},
                        element: {
                            name: "Unity/Maze.gif",
                            style: {size: {width: 200, height: 200}, fit: "contain"}
                        }


                    },
                    {
                        //TODO: Find the correct Git repo for this
                        name: "3D level",
                        link: {type: "GitHub", value: "3DLevel"},
                        element: {
                            name: "Unity/3DGameLevel.gif",
                            style: {size: {width: 200, height: 200}, fit: "contain"}
                        }
                    },
                    {
                        name: "UI",
                        link: {type: "SubPage", value: "UnityUI.html"},
                        element: {
                            name: "Unity/Button.png",
                            style: {size: {width: 200, height: 200}, fit: "contain"}
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
                        link: {type: "GitHub", value: "Unity/Button.png"},
                        element: {
                            name: "ButtonAnimation.mov",
                            showControls: false,
                            maximiseOnClick: true,
                            autoplay: true,
                            style: {
                                size: {width: 200, height: 200},
                                fit: "contain"
                            }
                        },
                    }  ,
                    {
                        name: "Slider Animation",
                        link: {type: "GitHub", value: "Slider"},
                        element: {
                            name: "SliderAnimation.mov",
                            showControls: false,
                            maximiseOnClick: true,
                            autoplay: true,
                            style: {
                                size: {width: 200, height: 200},
                                fit: "contain"
                            }
                        }
                    }
                ],
            }     ,
            variables: defaultPageVariables,
        },
    }
