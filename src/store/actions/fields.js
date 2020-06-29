export const changeField = (formName, fieldName, value) => ({
  type: 'CHANGE_FIELD',
  formName,
  fieldName,
  value,
})

export const clearFields = () => ({
  type: 'CLEAR_FIELDS',
})
