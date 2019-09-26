function query(selector) {
    return document.querySelector(selector)
}

function querys(selector) {
    return document.querySelectorAll(selector)
}


class Validation {
    constructor (test, errorMsg) {
        this.test = test
        this.errorMsg = errorMsg || "is invalid"
    }
    validate (value) {
        return this.test(value)
    }

}

class form {
    constructor (domNode, fields) {
        this.domNode = domNode
        this.fields = fields
    }
    validate () {
        let valid = true
        for (let field of this.fields) {
            const fieldIsValid = field.validate()
      if (!fieldIsValid) {
          valid = false

      }
    }
    return valid
   }
}

class field {
    constructor (inputDiv, validations) {
        this.inputDiv = inputDiv
        this.validations = validations || []
    }

    clearErrorMsgs () {
        for (let msg of this.inputDiv.querySelectorAll('.error-msg'))
        msg.remove() 
    }

 

    addErrorMsgs (errorMsgs) {
       let fieldName = this.inputDiv.querySelector('label').innerText
         for (let msg of errorMsgs) {
         const msgNode = document.createElement('p')
         msgNode.classList.add('input-hint', 'text-danger', 'error-msg')
         msgNode.innerText = `${fieldName} ${msg}.`
        this.inputDiv.appendChild(msgNode)
    }
}

    markValid () {
        this.clearErrorMsgs()
        this.inputDiv.classList.add('input-valid')
        this.inputDiv.classList.remove('input-invalid')
  }

    markInvalid () {
       this.clearErrorMsgs()
       this.inputDiv.classList.add('input-invalid')
       this.inputDiv.classList.remove('input-valid')
  }
  getValue () {
      const input = this.inputDiv.querySelector("input, select, textarea")
      const value = input.value
      return value
  }
  validate() {
      const value = this.getValue
      const errorMsgs = []
      for(let validation of this.validations) {
          if(!validation.validate(value)) {
              errorMsgs.push(validtion.errorMsg)
          } 
      }
      if(errorMsgs.length === 0) {
          this.markValid()
      } else {
          this.markInvalid()
          addErrorMsgs(errorMsgs)
      }
        return errorMsgs.length === 0 
    }

  }
  const presenceValidation = new Validation(value => !!value, 'must not be blank')
  const nowOrFutureValidation = new Validation(function (dateStrToTest) {
    if (!dateStrToTest) {
      return true










      document.querySelector('#parking-form').addEventListener('submit', (event) => {
        event.preventDefault()
        if (form.validate()) {
          let todo = new Todo(nameField.getValue(), carField.getValue(), startdateField.getValue(), daysField.getValue(), creditcardField.getValue(), cvvField.getValue(), expirationField.getValue())
          document.querySelector('#todo-list').appendChild(todo.toDOMNode())
        }
      })    