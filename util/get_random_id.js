const getRandomId = () => {
    return `${Date.now()}_${Math.random().toString(36).substring(2)}`;
};

export default getRandomId;
