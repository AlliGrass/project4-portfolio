
import { useEffect, useState } from "react";
// import projectList from "../constants/projectList";

const PreviewProject = ({previewLink}) => {
    [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(previewLink === '');
    }, [previewLink]);

    return (
        isVisible ? (<iframe src={previewLink} frameborder="0" />) : null
    )
}

export default PreviewProject