import { EstatesService } from '../../services/estates.service'
import { delay } from '../../utils/delay'

export default defineEventHandler(async () => {
    await delay()
    return EstatesService.findAll()
})