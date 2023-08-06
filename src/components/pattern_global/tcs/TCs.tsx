import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import Typography from '@/components/atoms/typography/Typography';

import { TCsProps } from './';
import ItemTCs from './components/ItemTCs';

const TCs: React.FC<TCsProps> = ({
  className,
  listItemTCs,
  title,
  onCheckedAll,
  descriptionTop,
  descriptionBottom,
}) => {
  const [listIdItemCheck, setListItemCheck] = useState<
    { id: any; isChecked: boolean }[]
  >([]);

  useEffect(() => {
    if (listItemTCs.length) {
      const newListId = listItemTCs.map((item) => {
        return {
          id: item.id,
          isChecked: item.defaultChecked || false,
        };
      });
      setListItemCheck(newListId);
    }
  }, [listItemTCs]);

  useEffect(() => {
    const lengthListId = listIdItemCheck.length || 0;
    let countChecked = 0;
    if (lengthListId) {
      listIdItemCheck.map((item) => {
        if (item.isChecked) {
          countChecked += 1;
        }
      });

      onCheckedAll?.(countChecked === lengthListId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listIdItemCheck]);

  const handleCheckedItem = (value: boolean, id: any) => {
    const newListId = listIdItemCheck.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isChecked: value,
        };
      }
      return item;
    });
    setListItemCheck(newListId);
  };

  return (
    <StyleTCs className={clsxm('flex w-[100%] flex-col', className)}>
      <Typography variant='h3' className='text-neutral-500'>
        {title}
      </Typography>
      <Typography variant='b1r' className='mt-[4px] text-neutral-500'>
        {descriptionTop}
      </Typography>
      <StyleWrapperRows
        className={clsxm(
          'flex w-[100%] flex-col gap-[16px] py-[24px] md:py-[16px]'
        )}
      >
        {listItemTCs.map((item, index) => {
          return (
            <ItemTCs
              key={item.id || index}
              isChecked={listIdItemCheck?.[index]?.isChecked || false}
              onCheckedItem={(value) => {
                handleCheckedItem(value, item.id);
              }}
              title={item.titleItemTC || ''}
              dataModal={item.dataModal}
            />
          );
        })}
      </StyleWrapperRows>
      <Typography variant='b1r' className='mt-[4px] text-neutral-500'>
        {descriptionBottom}
      </Typography>
    </StyleTCs>
  );
};

export default TCs;

const StyleTCs = styled.div``;

const StyleWrapperRows = styled.div``;
