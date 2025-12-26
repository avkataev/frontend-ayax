import { EstatesService } from '../../services/estates.service'
import {delay} from "~~/server/utils/delay";

export default defineEventHandler(async (event) => {
    const id = event.context.params?.id
    await delay()

    if (!id) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Estate id is required',
        })
    }
    const estate = await EstatesService.findById(id)

    if (!estate) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Estate not found',
        })
    }

    return estate
})