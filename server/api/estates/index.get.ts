import { EstatesService } from '../../services/estates.service'
import { delay } from '../../utils/delay'

export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const search = (query.search as string | undefined)?.toLowerCase()
    let estates = await EstatesService.findAll()
    if (search) {
        estates = estates.filter((estate) =>
            estate.title.toLowerCase().includes(search) ||
            estate.description.toLowerCase().includes(search)
        )
    }
    await delay()
    return estates
})