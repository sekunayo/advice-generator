export const handleFetchData = async (url) => {
    try {
        const response = await fetch(url, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Accept": "application/json",
            },
        })
        const data = await response.json()
        return data
    } catch (err) {
        return { err }
    }
}
