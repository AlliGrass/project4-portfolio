import { useState, useEffect } from "react"
import useCurrentPage from "./useCurrentPage";
import data from "../data/data.json"

const useNavButtons = () => {
    const pagePaths = data.pagePaths

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