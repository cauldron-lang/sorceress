import getRandomId from "./get_random_id.js";

let newBufferCount = 0;

const createBuffer = (name = null) => {
    const fallbackName = newBufferCount === 0 ? 'new_buffer' : `new_buffer_${newBufferCount}`;
    newBufferCount += 1;

    return {
        id: getRandomId(),
        name: name ?? fallbackName,
        contents: '',
    };
};

export default createBuffer;