import axios from "axios"
import { responseApi } from "./response.api"

export const SCHEDULE_URL = `${process.env.REACT_APP_API}/api`

export const getSchedule = async (queryParams) => {
    const response = await axios.get(`${SCHEDULE_URL}`, queryParams)
    return responseApi(response)
}