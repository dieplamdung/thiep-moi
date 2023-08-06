import { Modal as ModalAnt } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { createGlobalStyle, styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import Button from '@/components/atoms/buttons_main/Button';
import Icons from '@/components/atoms/icons/Icons';
import Typography from '@/components/atoms/typography/Typography';

import themes from '@/styles/themes';

import { ModalProps } from './index';

const Modal: React.FC<ModalProps> = ({
  className,
  onClickButton,
  variant,
  header,
  title,
  description,
  open,
  onClose,
  titleButton,
  onScrollBottom,
  isScrollButtonDefault = true,
}) => {
  const refIContent = useRef<any>();
  const refTimeOut = useRef<any>();
  const [isScrollButton, setIsScrollButton] = useState<boolean>(
    isScrollButtonDefault
  );

  useEffect(() => {
    setIsScrollButton(isScrollButtonDefault);
  }, [isScrollButtonDefault]);

  useEffect(() => {
    const content = refIContent.current;
    const handelCheckInView = () => {
      const isBottom =
        content.scrollHeight - content.scrollTop === content.clientHeight;
      onScrollBottom?.(isBottom);
    };
    if (content && open) {
      refTimeOut.current = setTimeout(() => {
        handelCheckInView();
        content.addEventListener('scroll', handelCheckInView);
      }, 500);
    }
    return () => {
      content?.removeEventListener('scroll', handelCheckInView);
      window.clearInterval(refTimeOut.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <div className={clsxm('', className)}>
      <StyleModal
        title={header}
        centered
        open={open}
        onOk={() => onClose?.()}
        onCancel={() => onClose?.()}
        closeIcon={<Icons typeicon='icon_close' />}
      >
        {variant === 'scroll' && (
          <div
            className={clsxm(
              'box-border rounded-[1em]  bg-neutral-50 pt-[24px] sm:pt-[16px]'
            )}
          >
            <ContentScroll className='custom-scrollbar' ref={refIContent}>
              {title && (
                <Typography variant='b1' className='mb-[24px]'>
                  {title}
                </Typography>
              )}
              {description &&
                (typeof description === 'string' ? (
                  <div
                    dangerouslySetInnerHTML={{ __html: description as string }}
                    className={clsxm(
                      'pb-[24px] text-[16px] leading-[24px] text-neutral-500 sm:pb-[16px]'
                    )}
                  />
                ) : (
                  description
                ))}
            </ContentScroll>
          </div>
        )}
        {variant === 'fixed' && (
          <ContentFixed className='custom-scrollbar' ref={refIContent}>
            {description && (
              <div
                dangerouslySetInnerHTML={{ __html: description as string }}
                className={clsxm('text-[16px] leading-[24px] text-neutral-500')}
              />
            )}
          </ContentFixed>
        )}

        {titleButton && (
          <Button
            variant='primary'
            isShowIconLeft={false}
            isShowIconRight={false}
            className='mt-[24px]'
            onClick={() => onClickButton?.()}
            disabled={!isScrollButton}
          >
            {titleButton}
          </Button>
        )}
      </StyleModal>
      <GlobalStyle />
    </div>
  );
};

export default Modal;

const GlobalStyle = createGlobalStyle<{ color?: string }>`
.ant-modal-mask{
  background-color: ${themes.overlay} !important;
}
`;

const StyleModal = styled(ModalAnt)`
  width: 100% !important;
  max-width: 920px;
  padding: 0px 32px;

  @media (max-width: 640px) {
    padding: 0px 24px;
  }

  .ant-modal-content {
    padding: 32px;
    border-radius: 16px;

    .ant-modal-close {
      top: 32px;
      right: 28px;

      &:hover {
        background-color: transparent;
      }
    }

    .ant-modal-header {
      margin-bottom: 24px;
      .ant-modal-title {
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        color: ${themes.neutral[500]};
      }
    }

    .ant-modal-footer {
      display: none;
    }

    @media (max-width: 640px) {
      padding: 32px 24px;

      .ant-modal-close {
        top: 32px;
        right: 24px;
      }
    }
  }
`;

const ContentScroll = styled.div`
  padding: 0px 24px;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  max-height: 408px;
  @media (max-width: 1023px) {
    max-height: calc(100vh - 280px);
  }
  @media (max-width: 770px) {
    padding: 0px 16px;
  }
`;

const ContentFixed = styled(ContentScroll)`
  padding: 0px;
`;
