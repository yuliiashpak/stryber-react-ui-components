import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Wrapper } from '../../storybook/components/Wrapper';
import { FileField } from './FileField';

storiesOf('File field', module)
  .add('Normal', () => {
    return (
      <Wrapper>
        <FileField
          name="cv"
          accept=".pdf"
          placeholder="Single file field"
          onChange={ (d: any) => console.log('InputField value:', d) }
        />
        <FileField
          name="additionalFiles"
          accept=".pdf"
          placeholder="Multiple files field with error"
          onChange={ (d: any) => console.log('InputField value:', d) }
          errorMessage="Error message"
          multiple
        />
        <FileField
          name="additionalFiles"
          accept=".pdf"
          placeholder="Multiple files field with error"
          onChange={ (d: any) => console.log('InputField value:', d) }
          disabled
        />
        <FileField
          name="additionalFiles"
          accept=".pdf"
          placeholder="Multiple files field with error"
          onChange={ (d: any) => console.log('InputField value:', d) }
          disabled
          multiple
        />
      </Wrapper>
    );
  });
