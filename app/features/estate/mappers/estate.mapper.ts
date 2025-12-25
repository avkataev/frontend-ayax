import type {EstateResponse} from "~/features/estate/models/estate.api";
import type {Estate} from "~/features/estate/models/estate.model";

export function mapEstateResponseToEstate(dto: EstateResponse): Estate {
    return {...dto}
}