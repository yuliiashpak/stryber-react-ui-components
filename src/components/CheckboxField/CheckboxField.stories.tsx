import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { CheckboxField } from './CheckboxField';

import { Wrapper } from '../../storybook/components/Wrapper';

storiesOf('Checkbox field', module)
  .add('Checkbox', () => {
    return (
      <Wrapper>
        <CheckboxField
          placeholder="Option A"
          value="a"
          name="answer"
          onChange={ (d: any) => console.log('CheckboxField value:', d.target.checked) }
        />
        <CheckboxField
          placeholder="Option B"
          checked
          value="b"
          name="answer"
          onChange={ (d: any) => console.log('CheckboxField value:', d.target.checked) }
        />
        <CheckboxField
          placeholder="Option C"
          value="c"
          name="answer"
          errorMessage="Soemthing is not right"
          onChange={ (d: any) => console.log('CheckboxField value:', d.target.checked) }
        />
      </Wrapper>
    );
  })
  .add('Switch', () => {
    return (
      <Wrapper>
        <CheckboxField
          placeholder="Option A"
          value="a"
          name="answer"
          variant="switch"
          onChange={ (d: any) => console.log('CheckboxField value:', d.target.checked) }
        />
        <CheckboxField
          placeholder="Option B"
          checked
          value="b"
          name="answer"
          variant="switch"
          onChange={ (d: any) => console.log('CheckboxField value:', d.target.checked) }
        />
      </Wrapper>
    );
  });
