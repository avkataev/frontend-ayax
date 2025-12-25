import type {EstateResponse} from "~/features/estate/models/estate.api";

export const useEstates = () => {
    const { data: estates, pending: loading, error, execute } = useFetch<EstateResponse[]>('/api/estates', {
        server: false,
    })

    return { estates, loading, error, execute }
}