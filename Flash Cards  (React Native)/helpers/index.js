export function excludeKeyFromObject(object, [excludedKey]) {
    return Object.keys(object)
        .filter((key) => key !== excludedKey)
        .reduce((result, key) => result[key] = { [key]: object[key] }, {})
}