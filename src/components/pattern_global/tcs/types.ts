export type TCsProps = {
  className?: string;
  title: string;
  descriptionTop?: string;
  descriptionBottom?: string;
  listItemTCs: {
    id: any;
    titleItemTC?: string;
    dataModal: {
      titleButton?: string;
      header?: string;
      title?: string;
      description?: string;
    };
    defaultChecked?: boolean;
  }[];
  onCheckedAll: (value: boolean) => void;
};
