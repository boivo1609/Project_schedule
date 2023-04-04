export const responseApi = async (res) => {
    if(res.status === 200 || res.status === 201) {
        return res.data
    }
    throw new Error("Errow")
}