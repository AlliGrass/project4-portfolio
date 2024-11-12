import { useLocation } from 'react-router-dom';

const useCurrentPage = () => {
    const urlPath = useLocation()

    return urlPath.pathname
}

export default useCurrentPage