import Link from 'next/link';
import { styled } from 'styled-components';

import themes from '@/styles/themes';

export const BaseItem = styled(Link)`
  display: flex;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;

  &,
  > * {
    cursor: pointer;
  }
`;
export const StyleMenu = styled.div`
  > * {
    padding-left: 40px;
  }
`;
export const StyleItem = styled(BaseItem)<{ $active?: boolean }>`
  > * {
    color: ${(props) =>
      props.$active ? themes.primary.magenta : themes.neutral['400']};
  }
`;
