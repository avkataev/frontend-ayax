import {estatesMock} from "~~/server/mocks/estates.mock";

export const EstatesService = {
    async findAll() {
        return estatesMock
    },
    async findById(id: string) {
        return estatesMock.find(estate => estate.id === id);
    },
}