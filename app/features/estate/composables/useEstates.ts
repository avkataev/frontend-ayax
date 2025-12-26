import type {EstateResponse} from "~/features/estate/models/estate.api";
import {mapEstateResponseToEstate} from "~/features/estate/mappers/estate.mapper";
import type {Estate} from "~/features/estate/models/estate.model";

interface EstateOptions {
    immediate?: boolean;
    query?: string;
}
export const useEstates = (options: EstateOptions = {}) => {
    const { immediate = false } = options
    const query = ref('')

    const { data, pending: loading, error, execute } = useFetch<EstateResponse[]>(() => `/api/estates${query.value}`, {
        method: 'GET',
        server: false,
        immediate,
    })

    const estates = computed<Estate[]>(() =>
        (data.value ?? []).map(mapEstateResponseToEstate)
    )

    return { estates, loading, error, query, execute }
}