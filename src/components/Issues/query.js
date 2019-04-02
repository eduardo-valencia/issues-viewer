export const makeCustomParam = (name, value) => `${name}:${value}`

export const makeCustomParams = params => `, ${params.join(', ')}`
