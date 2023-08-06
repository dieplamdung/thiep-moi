import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import Icons from '@/components/atoms/icons/Icons';
import { PaginationProps } from '@/components/atoms/pagination/types';
import Typography from '@/components/atoms/typography/Typography';

import themes from '@/styles/themes';

const Pagination: React.FC<PaginationProps> = ({
  className,
  onClick,
  totalPage,
  currentPage,
  onSelectPage,
}) => {
  const [isShowDot, setIsShowDot] = useState<boolean>(false);
  const [showDotLeft, setShowDotLeft] = useState<boolean>(false);
  const [showDotRight, setShowDotRight] = useState<boolean>(false);

  useEffect(() => {
    setShowDotLeft(currentPage > 4);
    setShowDotRight(currentPage < totalPage - 3);
    setIsShowDot(totalPage > 7);
  }, [currentPage, totalPage]);

  const renderDot = React.useMemo(() => {
    return (
      <>
        {isShowDot ? (
          <div className='group flex h-[24px] w-[24px] cursor-pointer items-center justify-center'>
            <Typography variant='b2' className='text-neutral-300'>
              ...
            </Typography>
          </div>
        ) : (
          ''
        )}
      </>
    );
  }, [isShowDot]);

  const handelRenderItem = (pageNumber: number, currentPage: number) => {
    return (
      <div
        className='group flex h-[24px] w-[24px] cursor-pointer items-center justify-center'
        onClick={() => onSelectPage(pageNumber)}
      >
        <Typography
          variant='b2'
          cursor='pointer'
          className={clsxm(
            'text-neutral-300 group-hover:!text-neutral-400',
            pageNumber === currentPage &&
              'text-primary-magenta group-hover:!text-primary-magenta'
          )}
        >
          {pageNumber}
        </Typography>
      </div>
    );
  };

  const renderListPage = () => {
    const listNumber = [];
    const listItemRender: any = [];
    const result: any = [];
    for (let i = 2; i < totalPage; i++) {
      listNumber.push(i);
      listItemRender.push(handelRenderItem(i, currentPage));
    }
    if (totalPage <= 7) {
      return listItemRender;
    }
    if (showDotLeft && showDotRight) {
      const indexCurrent = listNumber.findIndex((item) => currentPage === item);
      listNumber.map((_, index) => {
        if (
          index + 1 === indexCurrent ||
          index - 1 === indexCurrent ||
          index === indexCurrent
        ) {
          result.push(listItemRender[index]);
        }
      });
    }
    if (!showDotLeft && showDotRight) {
      listItemRender.map((item: any, index: number) => {
        if (index + 1 <= 4) {
          result.push(item);
        }
      });
    }
    if (showDotLeft && !showDotRight) {
      listItemRender.map((item: any, index: number) => {
        if (index < totalPage && index > totalPage - 7) {
          result.push(item);
        }
      });
    }
    return result;
  };

  return (
    <StylePagination
      className={clsxm(
        'flex h-[40px] w-fit items-center rounded-[8px] bg-neutral-50 px-[16px] py-[8px]',
        className
      )}
      onClick={() => onClick?.()}
    >
      <div
        className='mr-[4px] flex h-[24px] w-[24px] cursor-pointer items-center justify-center'
        onClick={() => {
          if (currentPage === 1) {
            return;
          }
          onSelectPage(currentPage - 1);
        }}
      >
        <Icons
          typeicon='arrow-left'
          fill={
            currentPage === 1 ? themes.neutral[200] : themes.primary.magenta
          }
        />
      </div>
      <div className='flex items-center gap-[8px]'>
        {handelRenderItem(1, currentPage)}
        {showDotLeft && renderDot}
        {renderListPage().map((item: any, index: number) => {
          return <React.Fragment key={index}>{item}</React.Fragment>;
        })}
        {showDotRight && renderDot}
        {handelRenderItem(totalPage, currentPage)}
      </div>
      <div
        className='ml-[4px] flex h-[24px] w-[24px] cursor-pointer items-center justify-center'
        onClick={() => {
          if (currentPage === totalPage) {
            return;
          }
          onSelectPage(currentPage + 1);
        }}
      >
        <Icons
          typeicon='arrow-right'
          fill={
            currentPage === totalPage
              ? themes.neutral[200]
              : themes.primary.magenta
          }
        />
      </div>
    </StylePagination>
  );
};
export default Pagination;
const StylePagination = styled.div``;
// import React from 'react';

// import './index.css';

// import { PaginationProps } from './index';

// const Pagination = ({
//   totalPages,
//   curPage,
//   truncate,
//   numLinksTwoSide: delta,
//   onPageChange,
// }: PaginationProps) => {
//   const range = delta + 4;
//   const numberTruncateLeft = curPage - delta;
//   const numberTruncateRight = curPage + delta;

//   const render = [];
//   const renderTwoSide = [];
//   const dot = (
//     <li className='pg-item'>
//       <a className='pg-link'>...</a>
//     </li>
//   );
//   let countTruncate = 0;

//   const handlePageChange = (pageNumber: any) => {
//     onPageChange(pageNumber);
//   };

//   const renderPage = (pos: any, active?: any): any => {
//     return (
//       <li key={pos} className={`pg-item ${active}`}>
//         <a className='pg-link' onClick={() => handlePageChange(pos)}>
//           {pos}
//         </a>
//       </li>
//     );
//   };

//   for (let pos = 1; pos <= totalPages; pos++) {
//     const active = pos === curPage ? 'active' : '';

//     if (totalPages >= 2 * range - 1 && truncate) {
//       if (numberTruncateLeft > 3 && numberTruncateRight < totalPages - 3 + 1) {
//         if (pos >= numberTruncateLeft && pos <= numberTruncateRight) {
//           renderTwoSide.push(renderPage(pos, active));
//         }
//       } else {
//         if (
//           (curPage < range && pos <= range) ||
//           (curPage > totalPages - range && pos >= totalPages - range + 1) ||
//           pos === totalPages ||
//           pos === 1
//         ) {
//           render.push(renderPage(pos, active));
//         } else {
//           countTruncate++;
//           if (countTruncate === 1) {
//             render.push(dot);
//           }
//         }
//       }
//     } else {
//       render.push(renderPage(pos, active));
//     }
//   }

//   let paginationList = null;
//   if (renderTwoSide.length) {
//     paginationList = [
//       renderPage(1),
//       dot,
//       ...renderTwoSide,
//       dot,
//       renderPage(totalPages),
//     ];
//   } else {
//     paginationList = render;
//   }

//   return <ul className='pagination'>{paginationList}</ul>;
// };

// export default Pagination;
