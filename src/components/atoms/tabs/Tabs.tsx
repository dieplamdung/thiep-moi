import { Tabs as TabsAnt } from 'antd';
import React, { useMemo } from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import Typography from '@/components/atoms/typography/Typography';

import themes from '@/styles/themes';

import { TabsProps } from './index';

const Tabs: React.FC<TabsProps> = ({
  onChangeTab,
  tabDefault,
  marginBottom = '0px',
  tabList,
}) => {
  const newItem = useMemo(() => {
    return tabList.map((item) => {
      return {
        ...item,
        label: (
          <Typography
            variant='button'
            className={clsxm(
              '!cursor-pointer text-neutral-300 hover:text-neutral-400',

              item?.disabled && ['pointer-events-none text-neutral-200'],
              'text_TabPane'
            )}
          >
            {item?.label}
          </Typography>
        ),
      };
    });
  }, [tabList]);
  return (
    <StyleTabs
      defaultActiveKey={tabDefault}
      onChange={(e: string) => onChangeTab?.(e)}
      bottom={marginBottom}
      items={newItem}
    />
  );
};

export default Tabs;

const StyleTabs = styled(TabsAnt)<{ bottom?: string }>`
  .ant-tabs-nav {
    margin-bottom: ${({ bottom }) => bottom || '0px'};
    &::before {
      display: none;
    }
    .ant-tabs-nav-wrap {
      .ant-tabs-nav-list {
        .ant-tabs-tab {
          padding: 0px 0px 22px;
          margin-left: 38px;
          &:first-child {
            margin-left: 0px;
          }
        }
        .ant-tabs-tab-active {
          .text_TabPane {
            color: ${themes.primary.magenta};
          }
        }
        .ant-tabs-ink-bar {
          background: ${themes.primary.magenta};
          height: 3px;
          border-radius: 3px;
        }
        &::after {
          display: none;
        }
      }
    }
  }
`;
