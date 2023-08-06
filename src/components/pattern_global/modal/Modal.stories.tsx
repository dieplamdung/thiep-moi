import type { Meta } from '@storybook/react';
import { useState } from 'react';

import { ModalProps } from '@/components/pattern_global/modal/types';

import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'PatternGlobal/Modal',
  component: Modal,
};

export default meta;

export const Default = (args: ModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <div>
      <button onClick={() => setOpen(true)} className='bg-[red] p-[24px]'>
        open
      </button>
      <Modal {...args} open={open} onClose={() => setOpen(false)} />
    </div>
  );
};
Default.args = {
  titleButton: 'Button',
  variant: 'scroll',
  header: 'Header',
  title: 'Title',
  description:
    'Đề xuất nghiên cứu thuế để điều tiết bất động sản Bộ Tài chính được đề nghị nghiên cứu giải pháp về thuế để điều tiết, chống đầu cơ bất động sản và báo cáo Chính phủ trong tháng 9. Nội dung này nêu tại dự thảo Nghị quyết tháo gỡ khó khăn cho sản xuất kinh doanh, cải cách thủ tục hành chính, được Bộ trưởng Kế hoạch & Đầu tư Nguyễn Chí Dũng trình Chính phủ tại phiên họp Chính phủ với các địa phương, ngày 4/7. Các giải pháp dự thảo Nghị quyết đưa ra tập trung vào kích cầu tiêu dùng trong nước, tăng xuất khẩu; thúc đẩy đầu tư, thu hút vốn FDI và đẩy nhanh giải ngân đầu tư công, cũng như hỗ trợ dòng tiền, cải cách thủ tục hành chính. Theo đó, về chính sách hỗ trợ dòng tiền, giảm chi phí và tăng tiếp cận vốn, Bộ Tài chính được đề nghị khơi thông thị trường trái phiếu doanh nghiệp, vận hành sàn giao dịch trái phiếu doanh nghiệp riêng lẻ trong tháng 7. Các giải pháp, chính sách thuế để điều tiết, phát triển bền vững thị trường bất động sản cũng cần được Bộ Tài chính nghiên cứu, báo cáo Chính phủ trong tháng 9. Góp ý trước đó, Bộ Tài chính đề nghị bỏ quy định về thời hạn vận hành sàn giao dịch trái phiếu doanh nghiệp riêng lẻ; bỏ nhiệm vụ nghiên cứu báo cáo Chính phủ trong tháng 9 giải pháp về thuế với bất động sản.',
};
