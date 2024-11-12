import { useState, useEffect } from "react"
import pagePaths from "../constants/pagePaths";
import useCurrentPage from "./useCurrentPage";

const useNavButtons = () => {
    const currentPage = useCurrentPage()
    const [leftNavButton, setLeftNavButton] = useState()
    const [rightNavButton, setRightNavButton] = useState()

    useEffect(() => {
        if (pagePaths[currentPage]) {
            setLeftNavButton(pagePaths[currentPage].leftNavPath)
            setRightNavButton(pagePaths[currentPage].rightNavPath)
        }
    }, [currentPage])

    return { leftNavButton, rightNavButton }
}

export default useNavButtons