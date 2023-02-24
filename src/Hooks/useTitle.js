import { useEffect } from "react";


const useTitle = (title) => {
    useEffect(()=>{
     document.title = `${title} - Kuks-Food`;
    }, [title])

    }

export default useTitle;