import React, { Component } from 'react'
import { Form, Text, Checkbox } from 'react-form'

class AddNewProduct extends Component {
  handleAdd = e => {
    console.log('handleAdd', e)
    this.props.addNewProduct(e)
  }

  render() {
    // const { initialMessage, handleAdd } = props
    const initialMessage = 'test'
    return (
      <div>
        <h1>Add new product</h1>

        <AddNewProductForm onSubmit={this.handleAdd} />
      </div>
    )
  }
}

function errorValidator(values) {
  return {
    message: !values.id ? 'Input cannot be empty' : null
  }
}

//15/ The component displaying the form
export const AddNewProductForm = ({ onSubmit, initialMessage }) => (
  <Form
    validateError={errorValidator}
    onSubmit={onSubmit}
    // getApi={formApi => formApi.setValue('message', initialMessage)}
  >
    {formApi => (
      <form onSubmit={formApi.submitForm}>
        {/* <Text field="id" placeholder="id" /> */}
        <Text field="name" placeholder="name" />
        {/* <Text field="img" placeholder="img" /> */}
        <Text field="description" placeholder="description" />
        <Text field="price" placeholder="price" />
        <label>
          isSpecial <Checkbox field="isSpecial" />
        </label>
        <button disabled={!!formApi.errors}>Add</button>
        {formApi.errors && <p>{formApi.errors.message}</p>}
      </form>
    )}
  </Form>
)

export default AddNewProduct
