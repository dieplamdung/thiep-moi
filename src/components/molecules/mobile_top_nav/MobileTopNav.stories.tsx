import type { Meta } from '@storybook/react';
import { styled } from 'styled-components';

import MobileTopNav from './MobileTopNav';
import { MobileTopNavProps } from './types';

const meta: Meta<typeof MobileTopNav> = {
  title: 'Molecules/MobileTopNav',
  component: MobileTopNav,
};

export default meta;
const StyleContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const Default = (args: MobileTopNavProps) => {
  return (
    <StyleContainer>
      <MobileTopNav {...args} />
    </StyleContainer>
  );
};

Default.args = {
  numberNotify: 3,
};
