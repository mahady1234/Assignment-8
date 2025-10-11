import axios from "axios"
import { useEffect, useState } from "react"


const useApps = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios('../data.json')
            .then(data => setProducts(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])
    return { products, loading, error }
}

export default useApps;