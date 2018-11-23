// https://medium.com/@gaperton/react-forms-with-value-links-part-2-validation-9d1ba78f8e49
import { Input } from 'valuelink/lib/tags'
import * as React from 'react';

export const FormInput = ({ label, ...props }) => (

  <label htmlFor="">{ label }
    <Input {...props} />
    { ( props.valueLink.value !== "")
        ? <div className="erorr-placeholder">
            { props.valueLink.error || ''}
          </div>
        : ''
    }
  </label>
)
