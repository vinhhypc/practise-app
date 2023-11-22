import { textState } from "./atom";

const { selector } = require("recoil");

export const  countInput = selector({
    key:'countInput',
    get: ({get}) => {
        const  input = get(textState)
        return input.length
    }
})