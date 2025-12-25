import {EstateCategoryType, type EstateDealType, EstatePropertyType} from "~/shared/types/estate";

export interface EstateResponse {
    id: string;
    cover: string;
    property_type: EstatePropertyType;
    category_type: EstateCategoryType;
    deal_type: EstateDealType;
    price: number;
    title: string;
    rooms: number;
    living_area: number;
    land_area: number;
    description: string;
    address: string;
    city: string;
    floor: number;
    floor_total: number;
    year_built: number;
    created_at: Date;
}