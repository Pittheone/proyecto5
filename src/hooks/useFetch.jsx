import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const result = await response.json()
                setData(result)
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    },[])
    return { data, isLoading, error }
}

export default useFetch;