import type { Meta } from '@storybook/react';

import TCs from './';
import { TCsProps } from './';

const meta: Meta<typeof TCs> = {
  title: 'PatternGlobal/TCs',
  component: TCs,
};

export default meta;
export const Default = (args: TCsProps) => {
  return (
    <TCs
      {...args}
      // eslint-disable-next-line no-console
      onCheckedAll={(value: boolean) => console.log('check all', value)}
    />
  );
};

Default.args = {
  title: 'Terms and Conditions',
  descriptionTop:
    'Take some time to read these important contracts before you submit.',
  descriptionBottom:
    'By continuing, I have read and understood the contracts of the Terms of Use, Execution Protocol, and Fees and Charges.',
  listItemTCs: [
    {
      id: 1,
      titleItemTC: 'Terms 1',
      dataModal: {
        titleButton: 'Confirm',
        header: 'Header 1',
        title: 'Title 1',
        description:
          'Đề xuất nghiên cứu thuế để điều tiết bất động sản Bộ Tài chính được đề nghị nghiên cứu giải pháp về thuế để điều tiết, chống đầu cơ bất động sản và báo cáo Chính phủ trong tháng 9. Nội dung này nêu tại dự thảo Nghị quyết tháo gỡ khó khăn cho sản xuất kinh doanh, cải cách thủ tục hành chính, được Bộ trưởng Kế hoạch & Đầu tư Nguyễn Chí Dũng trình Chính phủ tại phiên họp Chính phủ với các địa phương, ngày 4/7. Các giải pháp dự thảo Nghị quyết đưa ra tập trung vào kích cầu tiêu dùng trong nước, tăng xuất khẩu; thúc đẩy đầu tư, thu hút vốn FDI và đẩy nhanh giải ngân đầu tư công, cũng như hỗ trợ dòng tiền, cải cách thủ tục hành chính. Theo đó, về chính sách hỗ trợ dòng tiền, giảm chi phí và tăng tiếp cận vốn, Bộ Tài chính được đề nghị khơi thông thị trường trái phiếu doanh nghiệp, vận hành sàn giao dịch trái phiếu doanh nghiệp riêng lẻ trong tháng 7. Các giải pháp, chính sách thuế để điều tiết, phát triển bền vững thị trường bất động sản cũng cần được Bộ Tài chính nghiên cứu, báo cáo Chính phủ trong tháng 9. Góp ý trước đó, Bộ Tài chính đề nghị bỏ quy định về thời hạn vận hành sàn giao dịch trái phiếu doanh nghiệp riêng lẻ; bỏ nhiệm vụ nghiên cứu báo cáo Chính phủ trong tháng 9 giải pháp về thuế với bất động sản.',
      },
    },
    {
      id: 2,
      titleItemTC: 'Terms 2',
      dataModal: {
        titleButton: 'Confirm',
        header: 'Header 2',
        title: 'Title 2',
        description:
          'Đề xuất nghiên cứu thuế để điều tiết bất động sản Bộ Tài chính được đề nghị nghiên cứu giải pháp về thuế để điều tiết, chống đầu cơ bất động sản và báo cáo Chính phủ trong tháng 9. Nội dung này nêu tại dự thảo Nghị quyết tháo gỡ khó khăn cho sản xuất kinh doanh, cải cách thủ tục hành chính, được Bộ trưởng Kế hoạch & Đầu tư Nguyễn Chí Dũng trình Chính phủ tại phiên họp Chính phủ với các địa phương, ngày 4/7. Các giải pháp dự thảo Nghị quyết đưa ra tập trung vào kích cầu tiêu dùng trong nước, tăng xuất khẩu; thúc đẩy đầu tư, thu hút vốn FDI và đẩy nhanh giải ngân đầu tư công, cũng như hỗ trợ dòng tiền, cải cách thủ tục hành chính. Theo đó, về chính sách hỗ trợ dòng tiền, giảm chi phí và tăng tiếp cận vốn, Bộ Tài chính được đề nghị khơi thông thị trường trái phiếu doanh nghiệp, vận hành sàn giao dịch trái phiếu doanh nghiệp riêng lẻ trong tháng 7. Các giải pháp, chính sách thuế để điều tiết, phát triển bền vững thị trường bất động sản cũng cần được Bộ Tài chính nghiên cứu, báo cáo Chính phủ trong tháng 9. Góp ý trước đó, Bộ Tài chính đề nghị bỏ quy định về thời hạn vận hành sàn giao dịch trái phiếu doanh nghiệp riêng lẻ; bỏ nhiệm vụ nghiên cứu báo cáo Chính phủ trong tháng 9 giải pháp về thuế với bất động sản.',
      },
    },
    {
      id: 3,
      titleItemTC: 'Terms 3',
      dataModal: {
        titleButton: 'Confirm',
        header: 'Header 3',
        title: 'Title 3',
        description:
          'Đề xuất nghiên cứu thuế để điều tiết bất động sản Bộ Tài chính được đề nghị nghiên cứu giải pháp về thuế để điều tiết, chống đầu cơ bất động sản và báo cáo Chính phủ trong tháng 9. Nội dung này nêu tại dự thảo Nghị quyết tháo gỡ khó khăn cho sản xuất kinh doanh, cải cách thủ tục hành chính, được Bộ trưởng Kế hoạch & Đầu tư Nguyễn Chí Dũng trình Chính phủ tại phiên họp Chính phủ với các địa phương, ngày 4/7. Các giải pháp dự thảo Nghị quyết đưa ra tập trung vào kích cầu tiêu dùng trong nước, tăng xuất khẩu; thúc đẩy đầu tư, thu hút vốn FDI và đẩy nhanh giải ngân đầu tư công, cũng như hỗ trợ dòng tiền, cải cách thủ tục hành chính. Theo đó, về chính sách hỗ trợ dòng tiền, giảm chi phí và tăng tiếp cận vốn, Bộ Tài chính được đề nghị khơi thông thị trường trái phiếu doanh nghiệp, vận hành sàn giao dịch trái phiếu doanh nghiệp riêng lẻ trong tháng 7. Các giải pháp, chính sách thuế để điều tiết, phát triển bền vững thị trường bất động sản cũng cần được Bộ Tài chính nghiên cứu, báo cáo Chính phủ trong tháng 9. Góp ý trước đó, Bộ Tài chính đề nghị bỏ quy định về thời hạn vận hành sàn giao dịch trái phiếu doanh nghiệp riêng lẻ; bỏ nhiệm vụ nghiên cứu báo cáo Chính phủ trong tháng 9 giải pháp về thuế với bất động sản.',
      },
    },
  ],
};
