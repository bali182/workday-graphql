export const logStep = tag => data => {
  console.log(tag || 'no-tag', JSON.stringify(data, null, 2))
  return data
}

export const fieldDirective = (ast, name) => ast.fieldNodes[0].directives.filter(d => d.name.value === name)

export const firstFieldDirectiveValue = (ast, name) => {
  const directives = fieldDirective(ast, name)
  if (directives.length > 0) {
    return directives[0].arguments[0].value.value
  }
  return null
}

export const buildParams = (ast, names = ['limit', 'offset']) => names.reduce((params, name) => {
  const value = firstFieldDirectiveValue(ast, name)
  if (value !== null) {
    params[name] = value
  }
  return params
}, {})

