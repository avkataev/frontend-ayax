import { EstatePropertyType, EstateCategoryType, EstateDealType } from './estate'

export const EstatePropertyTypeOptions = [
    { label: 'Квартира', value: EstatePropertyType.Apartment },
    { label: 'Дом', value: EstatePropertyType.House },
    { label: 'Земля', value: EstatePropertyType.Land },
]

export const EstateCategoryTypeOptions = [
    { label: 'Коммерческая', value: EstateCategoryType.Commercial },
    { label: 'Жилая', value: EstateCategoryType.Residential },
]

export const EstateDealTypeOptions = [
    { label: 'Продажа', value: EstateDealType.Sale },
    { label: 'Аренда', value: EstateDealType.Rent },
]

export const getPropertyTypeLabel = (value: EstatePropertyType) =>
    EstatePropertyTypeOptions.find(o => o.value === value)?.label ?? value

export const getCategoryTypeLabel = (value: EstateCategoryType) =>
    EstateCategoryTypeOptions.find(o => o.value === value)?.label ?? value

export const getDealTypeLabel = (value: EstateDealType) =>
    EstateDealTypeOptions.find(o => o.value === value)?.label ?? value