import type {EstateResponse} from "~/features/estate/models/estate.api";
import {mapEstateResponseToEstate} from "~/features/estate/mappers/estate.mapper";
import type {Estate} from "~/features/estate/models/estate.model";

export const useEstates = () => {
    const { data, pending: loading, error, execute } = useFetch<EstateResponse[]>('/api/estates', {
        server: false,
    })
    const estates = computed<Estate[]>(() =>
        (data.value ?? []).map(mapEstateResponseToEstate)
    )
    return { estates, loading, error, execute }
}