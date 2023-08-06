import React, { useState } from 'react';
import { styled } from 'styled-components';

import Row from '@/components/molecules/row/Row';
import { ModalContentType } from '@/components/pattern_global/modal';
import Modal from '@/components/pattern_global/modal/Modal';

type ItemTCsProps = {
  isChecked: boolean;
  onCheckedItem: (value: boolean) => void;
  title: string;
  dataModal: {
    header?: string;
    title?: string;
    description?: string;
    titleButton?: string;
  };
};

export default function ItemTCs(props: ItemTCsProps) {
  const { isChecked, onCheckedItem, dataModal, title } = props;

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isScrollBottom, setIsScrollBottom] = useState<boolean>(false);

  return (
    <StyleItemTCs>
      <Row
        typeRow='checkbox'
        title={title}
        cursor='pointer'
        onClick={() => setOpenModal(true)}
        isChecked={isChecked}
      />
      <Modal
        {...dataModal}
        variant={'scroll' as ModalContentType}
        open={openModal}
        onClose={() => setOpenModal(false)}
        onScrollBottom={(value: any) => {
          if (value) {
            setIsScrollBottom(value);
          }
        }}
        onClickButton={() => {
          setOpenModal(false);
          onCheckedItem(!isChecked);
        }}
        isScrollButtonDefault={isScrollBottom}
      />
    </StyleItemTCs>
  );
}

const StyleItemTCs = styled.div``;
