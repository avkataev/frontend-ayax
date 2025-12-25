import {estatesMock} from "~~/server/mocks/estates.mock";

export const EstatesService = {
    async findAll() {
        return estatesMock
    },
}