import { ReactElement } from 'react';

export type TabsProps = {
  onChangeTab?: (tab?: string) => void;
  tabDefault: string;
  marginBottom?: string;
  tabList: TabList[];
};

type TabList = {
  label: string;
  key: string;
  children?: ReactElement | any;
  disabled?: boolean;
};
