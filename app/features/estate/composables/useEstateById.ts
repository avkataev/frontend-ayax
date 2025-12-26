import type {EstateResponse} from "~/features/estate/models/estate.api";
import {mapEstateResponseToEstate} from "~/features/estate/mappers/estate.mapper";
import type {Estate} from "~/features/estate/models/estate.model";

export const useEstateById = (id: string | null) => {
    const { data, pending: loading, error, execute } = useFetch<EstateResponse>('/api/estates/' + id, {
        server: false,
    })
    const estate = computed<Estate | null>(() => {
        if (!data.value) return null
        console.log('data.value', data.value)
        return mapEstateResponseToEstate(data.value)
    })
    return { estate, loading, error, execute }
}