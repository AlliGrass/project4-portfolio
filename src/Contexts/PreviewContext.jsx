import { createContext, useState } from "react";

const PreviewContext = createContext({})

export const PreviewProvider = ({ children }) => {
    const [currentPreviewProject, setCurrentPreviewProject] = useState("")

    const getCurrentPreviewProject = (currentProject) => {
        setCurrentPreviewProject(currentProject)
    }

    const value = {
        currentPreviewProject,
        getCurrentPreviewProject
    }

    return (
        <PreviewContext.Provider value={value}>
            {children}
        </PreviewContext.Provider>
    )
}

export default PreviewContext