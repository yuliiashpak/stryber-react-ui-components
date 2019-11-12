import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { InputField } from './InputField';
import { Profile as ProfileIcon } from '../Icons';

import { Wrapper } from '../../storybook/components/Wrapper';
import { FileInputField } from './Inputs/FileInput';

storiesOf('Input field', module)
  .add('Text input', () => {
    return (
      <Wrapper>
        <FileInputField
          name="cv"
          disabled={false}
          placeholder="Attachment"
          value=""
          // errorMessage="Error message"
        />
        <InputField
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
        />
        <InputField
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
          placeholder="Some text field"
        />
        <InputField
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
          placeholder="Text field with initial value"
          value="Some initial value 123"
        />
        <InputField
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
          placeholder="Disabled text field"
          disabled
        />
        <InputField
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
          placeholder="Disabled text field"
          value="Some uneditable value"
          disabled
        />
        <InputField
          prependContent={<ProfileIcon />}
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
          placeholder="Disabled text field"
          value="Some uneditable value"
          disabled
        />
        <InputField
          prependContent={<ProfileIcon />}
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
          placeholder="Error text field"
          value="Error value"
          errorMessage="Error message"
        />
        <InputField
          prependContent={<ProfileIcon />}
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
          placeholder="Text field with prepend"
          value="Hello"
        />
        <InputField
          appendContent={<div>yyy</div>}
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
          placeholder="Text field with append"
          value="Value"
        />
          <InputField
            prependContent={<ProfileIcon />}
            appendContent={<div>yyy</div>}
            onChange={ (d: any) => console.log('InputField value:', d.target.value) }
            placeholder="Text field with append and prepend"
            value="Value"
          />
      </Wrapper>
    );
  });
