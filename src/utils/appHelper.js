export const updateObject = (oldObj, updatedPropsObj) => {
    return {
        ...oldObj,
        ...updatedPropsObj
    };
};