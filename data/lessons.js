/* Lá Chắn Số · Dữ liệu Học 1 phút (F04)
   File dữ liệu nạp bằng thẻ <script src="data/..."> nên mở trực tiếp (file://) hay qua máy chủ đều chạy.
   Sửa nội dung ở đây, không cần sửa HTML. Tình huống là giả lập cho mục đích giáo dục.
   "correct" là vị trí đáp án đúng trong "options" (đếm từ 0); trang tự xáo thứ tự đáp án khi hiển thị. */
window.LCS_DATA=window.LCS_DATA||{};
window.LCS_DATA.lessons=[
 {
  "id": "authority",
  "title": "Giả danh công an",
  "topic": "Cuộc gọi lạ",
  "icon": "phone",
  "category": "fake_authority",
  "estimated_seconds": 60,
  "situation": "Người lạ tự xưng là công an, nói bạn liên quan một vụ án và yêu cầu chuyển tiền để xác minh. Họ dặn không kể cho ai.",
  "signals": [
   "Dùng danh nghĩa cơ quan chức năng để gây sợ hãi.",
   "Thúc giục chuyển tiền để xác minh.",
   "Yêu cầu giữ bí mật với gia đình."
  ],
  "action": "Ngắt cuộc gọi. Tự tìm số liên hệ chính thức để xác minh và hỏi người thân. Không chuyển tiền theo yêu cầu qua cuộc gọi.",
  "question": {
   "id": "q-authority",
   "lessonId": "authority",
   "text": "Người gọi yêu cầu giữ bí mật và chuyển tiền để xác minh. Bạn nên làm gì?",
   "options": [
    "Chuyển một khoản nhỏ để thử.",
    "Ngắt cuộc gọi và tự xác minh qua kênh chính thức.",
    "Đọc mã OTP để chứng minh mình vô tội."
   ],
   "correct": 1,
   "explanation": "Không làm theo yêu cầu chuyển tiền hoặc OTP của người gọi chưa xác minh. Hãy chủ động liên hệ kênh chính thức."
  }
 },
 {
  "id": "bank",
  "title": "Giả danh ngân hàng",
  "topic": "Tài khoản & OTP",
  "icon": "bank",
  "category": "fake_authority",
  "estimated_seconds": 60,
  "situation": "Tin nhắn nói tài khoản sắp bị khóa, yêu cầu đăng nhập qua liên kết được gửi kèm và nhập mã OTP.",
  "signals": [
   "Tạo cảm giác khẩn cấp.",
   "Đưa đường dẫn đăng nhập ngoài kênh quen thuộc.",
   "Yêu cầu nhập mã xác thực."
  ],
  "action": "Không bấm liên kết. Mở ứng dụng ngân hàng chính thức hoặc gọi số hỗ trợ đã biết.",
  "question": {
   "id": "q-bank",
   "lessonId": "bank",
   "text": "Tin nhắn báo tài khoản bị khóa và yêu cầu bấm link để nhập OTP. Cách an toàn nhất là gì?",
   "options": [
    "Mở link rồi xem có đúng logo không.",
    "Gửi OTP cho người nhắn.",
    "Tự mở ứng dụng ngân hàng chính thức để kiểm tra."
   ],
   "correct": 2,
   "explanation": "Logo và tên người gửi có thể bị giả mạo; dùng kênh chính thức do bạn tự mở."
  }
 },
 {
  "id": "job",
  "title": "Việc nhẹ, lương cao",
  "topic": "Tuyển dụng",
  "icon": "briefcase",
  "category": "fake_job",
  "estimated_seconds": 60,
  "situation": "Một tài khoản mời làm việc online, hứa thu nhập rất cao dù không cần kinh nghiệm. Để bắt đầu, bạn phải nộp phí kích hoạt.",
  "signals": [
   "Thu nhập cao bất thường.",
   "Thông tin tuyển dụng thiếu kiểm chứng.",
   "Đòi đóng phí trước khi nhận việc."
  ],
  "action": "Không nộp tiền. Xác minh doanh nghiệp và điều kiện tuyển dụng từ nguồn độc lập.",
  "question": {
   "id": "q-job",
   "lessonId": "job",
   "text": "Bạn được mời làm online với điều kiện nộp phí kích hoạt. Bạn sẽ làm gì?",
   "options": [
    "Không nộp phí và kiểm tra nguồn tuyển dụng.",
    "Nộp trước để giữ suất.",
    "Mượn tiền bạn bè để tham gia."
   ],
   "correct": 0,
   "explanation": "Lời hứa thu nhập cao kèm khoản phí trước là dấu hiệu cần xác minh, không phải lý do để vội nộp tiền."
  }
 },
 {
  "id": "gift",
  "title": "Thông báo trúng thưởng",
  "topic": "Quà tặng",
  "icon": "gift",
  "category": "fake_gift",
  "estimated_seconds": 60,
  "situation": "Một tin nhắn báo bạn trúng quà dù chưa từng tham gia chương trình. Người gửi yêu cầu trả phí nhận quà.",
  "signals": [
   "Không có thông tin tham gia chương trình.",
   "Đề nghị đóng tiền trước khi nhận thưởng.",
   "Thúc giục nhận quà ngay."
  ],
  "action": "Kiểm tra chương trình qua đơn vị tổ chức chính thức. Không gửi tiền hoặc dữ liệu riêng tư để nhận quà.",
  "question": {
   "id": "q-gift",
   "lessonId": "gift",
   "text": "Bạn được báo trúng quà bất ngờ, phải trả phí trước. Bạn nên làm gì?",
   "options": [
    "Trả phí vì quà có giá trị hơn.",
    "Xác minh chương trình qua kênh chính thức trước.",
    "Gửi ảnh giấy tờ tùy thân ngay."
   ],
   "correct": 1,
   "explanation": "Một thông báo trúng thưởng không tự chứng minh có chương trình thật; không đóng phí khi chưa xác minh."
  }
 },
 {
  "id": "delivery",
  "title": "Link giao hàng giả",
  "topic": "Đường dẫn",
  "icon": "package",
  "category": "phishing",
  "estimated_seconds": 60,
  "situation": "Tin nhắn báo kiện hàng chưa giao được, yêu cầu mở liên kết lạ để cập nhật địa chỉ và thanh toán phí.",
  "signals": [
   "Thông báo không khớp đơn hàng đang theo dõi.",
   "Link ngoài ứng dụng giao hàng quen thuộc.",
   "Yêu cầu nhập thông tin thanh toán."
  ],
  "action": "Tự mở ứng dụng mua hàng để kiểm tra đơn. Không nhập dữ liệu thẻ vào link lạ.",
  "question": {
   "id": "q-delivery",
   "lessonId": "delivery",
   "text": "Bạn nhận link đóng phí giao hàng nhưng không chắc có đơn. Bạn nên làm gì?",
   "options": [
    "Mở ứng dụng mua hàng và kiểm tra đơn đã đặt.",
    "Thanh toán phí ngay vì số tiền nhỏ.",
    "Nhập dữ liệu thẻ để xem phí."
   ],
   "correct": 0,
   "explanation": "Phí nhỏ cũng có thể là cách dụ người dùng cung cấp thông tin. Hãy đối chiếu đơn từ ứng dụng chính thức."
  }
 },
 {
  "id": "investment",
  "title": "Đầu tư lợi nhuận cao",
  "topic": "Tài chính",
  "icon": "chart",
  "category": "investment",
  "estimated_seconds": 60,
  "situation": "Người lạ mời vào nhóm đầu tư và cam kết lãi cao, không có rủi ro. Họ yêu cầu chuyển tiền gấp để giữ cơ hội.",
  "signals": [
   "Cam kết lợi nhuận và không rủi ro.",
   "Thúc giục quyết định ngay.",
   "Nguồn tư vấn và cơ chế đầu tư chưa được xác minh."
  ],
  "action": "Không chuyển tiền theo lời mời. Kiểm tra tư cách đơn vị và tìm tư vấn độc lập.",
  "question": {
   "id": "q-investment",
   "lessonId": "investment",
   "text": "Nhóm đầu tư cam kết chắc chắn có lãi cao. Bạn nên làm gì?",
   "options": [
    "Chuyển tiền ngay để không mất cơ hội.",
    "Chỉ tin vì nhiều người trong nhóm khoe lãi.",
    "Dừng lại, kiểm tra độc lập và không chuyển tiền vội."
   ],
   "correct": 2,
   "explanation": "Lợi nhuận được cam kết và lời thúc giục không thay thế bằng chứng đáng tin cậy."
  }
 },
 {
  "id": "relative",
  "title": "Người thân mượn tiền",
  "topic": "Mạng xã hội",
  "icon": "users",
  "category": "other",
  "estimated_seconds": 60,
  "situation": "Tài khoản mạng xã hội có ảnh của người thân nhắn rằng đang gặp tai nạn, cần tiền ngay và không thể gọi điện.",
  "signals": [
   "Tạo tình huống khẩn cấp về gia đình.",
   "Né tránh xác minh qua cuộc gọi.",
   "Yêu cầu chuyển tiền ngay."
  ],
  "action": "Gọi người thân bằng số điện thoại đã biết hoặc liên hệ người khác trong gia đình. Không chuyển tiền trước khi xác minh.",
  "question": {
   "id": "q-relative",
   "lessonId": "relative",
   "text": "Người thân nhắn cần tiền gấp nhưng không nghe máy. Bạn làm gì?",
   "options": [
    "Gọi lại số đã lưu hoặc hỏi người thân khác.",
    "Chuyển ngay vì thấy đúng ảnh đại diện.",
    "Gửi thông tin ngân hàng cho tài khoản đó."
   ],
   "correct": 0,
   "explanation": "Ảnh đại diện và tài khoản có thể bị chiếm dụng; xác minh bằng kênh độc lập."
  }
 },
 {
  "id": "otp",
  "title": "Yêu cầu mã OTP",
  "topic": "Bảo mật tài khoản",
  "icon": "lock",
  "category": "other",
  "estimated_seconds": 60,
  "situation": "Người tự xưng là nhân viên hỗ trợ nói cần đọc mã OTP vừa gửi để hoàn tất một thủ tục.",
  "signals": [
   "Đòi mã xác thực dùng một lần.",
   "Mượn danh nghĩa hỗ trợ kỹ thuật.",
   "Muốn bạn thực hiện hành động không do bạn chủ động."
  ],
  "action": "Không đọc hoặc gửi mã OTP. Tự mở ứng dụng chính thức để kiểm tra và bảo vệ tài khoản.",
  "question": {
   "id": "q-otp",
   "lessonId": "otp",
   "text": "Nhân viên tự xưng yêu cầu đọc OTP. Cách xử lý nào đúng?",
   "options": [
    "Đọc một nửa mã để thử.",
    "Không chia sẻ OTP và kiểm tra qua ứng dụng chính thức.",
    "Chụp màn hình mã gửi cho họ."
   ],
   "correct": 1,
   "explanation": "OTP là thông tin bảo mật. Không cung cấp cho người khác, kể cả người tự xưng hỗ trợ."
  }
 },
 {
  "id": "voice",
  "title": "Giả giọng người quen",
  "topic": "Cuộc gọi & AI",
  "icon": "phone",
  "category": "other",
  "estimated_seconds": 60,
  "situation": "Bạn nhận cuộc gọi có giọng giống người quen, báo gặp chuyện khẩn cấp và yêu cầu chuyển tiền vào tài khoản mới.",
  "signals": [
   "Giọng nói quen không đủ để xác minh danh tính.",
   "Yêu cầu giao dịch đến tài khoản chưa từng dùng.",
   "Dùng tình huống cấp bách để giảm thời gian suy nghĩ."
  ],
  "action": "Dừng giao dịch, gọi lại số đã biết và kiểm tra qua người thân khác.",
  "question": {
   "id": "q-voice",
   "lessonId": "voice",
   "text": "Bạn nghe giọng giống người thân yêu cầu chuyển tiền vào tài khoản mới. Bạn làm gì?",
   "options": [
    "Tin ngay vì đúng giọng.",
    "Chuyển một phần để giúp.",
    "Gọi lại số quen thuộc để xác minh trước."
   ],
   "correct": 2,
   "explanation": "Giọng nói có thể bị giả lập hoặc ghi âm; dùng kênh liên hệ độc lập."
  }
 },
 {
  "id": "task",
  "title": "Cộng tác viên đặt đơn",
  "topic": "Nhiệm vụ online",
  "icon": "cart",
  "category": "fake_job",
  "estimated_seconds": 60,
  "situation": "Người tuyển cộng tác viên yêu cầu nạp tiền để làm nhiệm vụ đặt đơn. Sau vài lượt, họ yêu cầu nạp thêm để rút tiền.",
  "signals": [
   "Phải nạp tiền để làm nhiệm vụ.",
   "Yêu cầu tăng số tiền để rút khoản đã nạp.",
   "Tiền thưởng phụ thuộc lời hứa chưa xác minh."
  ],
  "action": "Dừng nạp tiền. Giữ bằng chứng an toàn và liên hệ ngân hàng nếu đã chuyển tiền.",
  "question": {
   "id": "q-task",
   "lessonId": "task",
   "text": "Bạn phải nạp thêm để rút tiền thưởng. Nên làm gì?",
   "options": [
    "Dừng nạp, giữ bằng chứng và tìm hỗ trợ.",
    "Nạp thêm để lấy lại tiền.",
    "Rủ bạn bè tham gia để đủ hạn mức."
   ],
   "correct": 0,
   "explanation": "Nạp thêm có thể khiến thiệt hại tăng. Dừng giao dịch và tìm hỗ trợ qua kênh chính thức."
  }
 },
 {
  "id": "sim",
  "title": "Khóa SIM vì chưa chuẩn hóa",
  "topic": "Cuộc gọi lạ",
  "icon": "phone",
  "category": "fake_authority",
  "estimated_seconds": 60,
  "situation": "Một người gọi tự xưng nhà mạng, báo SIM của bạn sắp bị khóa vì chưa chuẩn hóa thông tin và đề nghị “hỗ trợ nhanh” qua đường link hoặc cú pháp tin nhắn.",
  "signals": [
   "Đe dọa khóa SIM trong vài giờ để bạn vội.",
   "Yêu cầu bấm link lạ hoặc soạn tin theo cú pháp họ đọc.",
   "Hỏi số căn cước, mã OTP hoặc ảnh chụp giấy tờ."
  ],
  "action": "Không làm theo cuộc gọi. Tự ra cửa hàng nhà mạng hoặc gọi tổng đài in trên SIM/ứng dụng chính thức để kiểm tra.",
  "question": {
   "id": "q-sim",
   "lessonId": "sim",
   "text": "Người gọi báo SIM sắp bị khóa và đọc cho bạn cú pháp tin nhắn để “chuẩn hóa”. Bạn nên làm gì?",
   "options": [
    "Soạn tin ngay theo hướng dẫn cho kịp.",
    "Gửi ảnh căn cước để họ làm giúp.",
    "Gác máy, tự liên hệ tổng đài nhà mạng chính thức."
   ],
   "correct": 2,
   "explanation": "Cú pháp lạ có thể chuyển quyền dùng SIM hoặc đăng ký dịch vụ cho kẻ gian. Chỉ làm thủ tục qua kênh chính thức của nhà mạng."
  }
 },
 {
  "id": "loan",
  "title": "Vay tiền online siêu tốc",
  "topic": "Ứng dụng vay",
  "icon": "bank",
  "category": "other",
  "estimated_seconds": 60,
  "situation": "Bạn thấy quảng cáo vay 20 triệu không cần thế chấp, duyệt trong 5 phút. Sau khi gửi thông tin, họ báo cần đóng “phí bảo hiểm khoản vay” trước khi giải ngân.",
  "signals": [
   "Bắt đóng phí trước khi nhận tiền vay.",
   "Ứng dụng đòi quyền đọc danh bạ, ảnh, tin nhắn.",
   "Không có tên công ty, giấy phép rõ ràng."
  ],
  "action": "Không nộp bất kỳ khoản phí nào để được giải ngân. Chỉ vay ở ngân hàng, công ty tài chính được cấp phép; hỏi người thân trước khi ký.",
  "question": {
   "id": "q-loan",
   "lessonId": "loan",
   "text": "Ứng dụng vay báo hồ sơ đã duyệt nhưng phải chuyển 2 triệu phí bảo hiểm mới giải ngân. Bạn làm gì?",
   "options": [
    "Chuyển phí vì sắp nhận được tiền.",
    "Dừng lại, không chuyển phí và kiểm tra giấy phép đơn vị cho vay.",
    "Vay chỗ khác để đóng phí cho nhanh."
   ],
   "correct": 1,
   "explanation": "Tổ chức cho vay hợp pháp không yêu cầu chuyển tiền trước để giải ngân. Đây là dấu hiệu lừa đảo phổ biến."
  }
 },
 {
  "id": "electric",
  "title": "Giả danh điện lực",
  "topic": "Cuộc gọi lạ",
  "icon": "phone",
  "category": "fake_authority",
  "estimated_seconds": 60,
  "situation": "Có người gọi tự xưng nhân viên điện lực, nói nhà bạn nợ tiền điện và sẽ bị cắt điện trong hôm nay nếu không chuyển khoản ngay vào số tài khoản cá nhân.",
  "signals": [
   "Dọa cắt điện ngay trong ngày.",
   "Yêu cầu chuyển vào tài khoản cá nhân, không phải kênh thanh toán chính thức.",
   "Có thể gửi kèm link “tra cứu hóa đơn” lạ."
  ],
  "action": "Tự kiểm tra hóa đơn trên ứng dụng hoặc tổng đài chính thức của điện lực. Không chuyển tiền vào tài khoản cá nhân theo cuộc gọi.",
  "question": {
   "id": "q-electric",
   "lessonId": "electric",
   "text": "Người gọi xưng điện lực bảo chuyển tiền nợ vào tài khoản tên một cá nhân để khỏi bị cắt điện. Bạn nên?",
   "options": [
    "Chuyển ngay để tránh bị cắt điện.",
    "Tự tra cứu hóa đơn qua kênh chính thức của điện lực.",
    "Đọc số thẻ ngân hàng để họ trừ tiền giúp."
   ],
   "correct": 1,
   "explanation": "Tiền điện chỉ thanh toán qua kênh chính thức. Yêu cầu chuyển vào tài khoản cá nhân là dấu hiệu giả mạo."
  }
 },
 {
  "id": "qr",
  "title": "Mã QR lạ nơi công cộng",
  "topic": "Đường dẫn lạ",
  "icon": "scan",
  "category": "phishing",
  "estimated_seconds": 60,
  "situation": "Bạn thấy mã QR dán ở bãi gửi xe, ghi “quét để thanh toán” hoặc “nhận ưu đãi”. Quét xong, trang web yêu cầu đăng nhập ngân hàng.",
  "signals": [
   "Mã QR được dán chồng lên mã cũ hoặc nằm ở chỗ lạ.",
   "Trang mở ra đòi đăng nhập ngân hàng hoặc nhập OTP.",
   "Địa chỉ trang web không phải tên miền chính thức."
  ],
  "action": "Chỉ quét mã QR do người bán đưa trực tiếp, kiểm tra tên người nhận trước khi chuyển. Không nhập mật khẩu, OTP vào trang mở từ QR lạ.",
  "question": {
   "id": "q-qr",
   "lessonId": "qr",
   "text": "Quét mã QR dán ở cột điện, trang web yêu cầu đăng nhập ngân hàng để nhận ưu đãi. Bạn nên?",
   "options": [
    "Đóng trang, không đăng nhập.",
    "Đăng nhập thử, nếu lạ thì đổi mật khẩu sau.",
    "Nhập OTP để xác minh mình là chủ tài khoản."
   ],
   "correct": 0,
   "explanation": "Mã QR có thể dẫn tới trang giả mạo. Không nhập thông tin ngân hàng vào trang mở từ mã QR không rõ nguồn."
  }
 },
 {
  "id": "romance",
  "title": "Làm quen qua mạng",
  "topic": "Mạng xã hội",
  "icon": "users",
  "category": "other",
  "estimated_seconds": 60,
  "situation": "Một người lạ kết bạn, trò chuyện thân mật nhiều tuần, hứa gửi quà từ nước ngoài. Sau đó họ nói gói quà bị giữ ở hải quan và nhờ bạn đóng phí.",
  "signals": [
   "Quen qua mạng, chưa từng gặp hoặc gọi video rõ mặt.",
   "Tạo tình cảm rồi mới nhắc tới tiền.",
   "Lý do cần tiền gấp: hải quan, phí nhận quà, bệnh viện."
  ],
  "action": "Không chuyển tiền cho người chỉ quen qua mạng. Kể với người thân để có thêm góc nhìn trước khi quyết định.",
  "question": {
   "id": "q-romance",
   "lessonId": "romance",
   "text": "Người bạn quen qua mạng nhờ đóng 5 triệu phí hải quan để nhận quà họ gửi. Bạn làm gì?",
   "options": [
    "Đóng phí vì món quà giá trị hơn.",
    "Không chuyển tiền, hỏi người thân và cảnh giác với mối quan hệ này.",
    "Gửi ảnh căn cước để hải quan xác minh."
   ],
   "correct": 1,
   "explanation": "“Phí nhận quà” là kịch bản lừa đảo tình cảm quen thuộc. Hải quan không liên hệ đòi tiền qua người quen trên mạng."
  }
 },
 {
  "id": "refund",
  "title": "Hoàn tiền đơn hàng lỗi",
  "topic": "Mua sắm online",
  "icon": "cart",
  "category": "phishing",
  "estimated_seconds": 60,
  "situation": "Có người tự xưng chăm sóc khách hàng sàn thương mại điện tử, báo đơn hàng của bạn bị lỗi và sẽ hoàn tiền, nhưng cần bạn bấm link và nhập thông tin thẻ.",
  "signals": [
   "Liên hệ qua số lạ hoặc tài khoản mạng xã hội cá nhân.",
   "Hoàn tiền nhưng lại bắt nhập thông tin thẻ, OTP.",
   "Biết vài thông tin đơn hàng để tạo lòng tin."
  ],
  "action": "Chỉ xử lý hoàn tiền trong ứng dụng của sàn. Không bấm link hay đọc OTP cho người tự xưng chăm sóc khách hàng.",
  "question": {
   "id": "q-refund",
   "lessonId": "refund",
   "text": "Người tự xưng nhân viên sàn nói sẽ hoàn tiền và gửi link yêu cầu nhập số thẻ, OTP. Bạn nên?",
   "options": [
    "Nhập thông tin vì họ biết đúng mã đơn.",
    "Kiểm tra trong ứng dụng của sàn, bỏ qua link.",
    "Gửi OTP qua tin nhắn cho họ."
   ],
   "correct": 1,
   "explanation": "Hoàn tiền thật được xử lý trong ứng dụng, không cần OTP. Kẻ gian có thể biết thông tin đơn hàng bị lộ."
  }
 },
 {
  "id": "scholar",
  "title": "Học bổng cần đóng phí",
  "topic": "Học tập",
  "icon": "gift",
  "category": "fake_gift",
  "estimated_seconds": 60,
  "situation": "Bạn nhận email báo được học bổng du học toàn phần, chỉ cần chuyển “phí hồ sơ” trong 24 giờ để giữ suất.",
  "signals": [
   "Không đăng ký mà vẫn trúng học bổng.",
   "Bắt đóng phí giữ suất trong thời gian rất ngắn.",
   "Email từ địa chỉ lạ, sai chính tả tên trường."
  ],
  "action": "Kiểm tra trên website chính thức của trường, hỏi thầy cô hoặc Đoàn trường. Không chuyển phí theo email lạ.",
  "question": {
   "id": "q-scholar",
   "lessonId": "scholar",
   "text": "Email báo bạn trúng học bổng mà bạn chưa từng nộp hồ sơ, yêu cầu đóng phí trong 24 giờ. Bạn làm gì?",
   "options": [
    "Đóng phí kẻo mất suất.",
    "Kiểm tra với trường qua kênh chính thức, không chuyển tiền.",
    "Trả lời email gửi kèm ảnh căn cước."
   ],
   "correct": 1,
   "explanation": "Học bổng thật không bắt đóng phí giữ suất gấp. Luôn xác minh qua nguồn chính thức."
  }
 },
 {
  "id": "account",
  "title": "Tài khoản mạng xã hội bị khóa",
  "topic": "Đường dẫn lạ",
  "icon": "lock",
  "category": "phishing",
  "estimated_seconds": 60,
  "situation": "Bạn nhận tin nhắn “Trang của bạn vi phạm bản quyền, sẽ bị khóa trong 24 giờ” kèm link kháng nghị yêu cầu nhập mật khẩu và mã xác thực.",
  "signals": [
   "Dọa khóa tài khoản để bạn vội.",
   "Link kháng nghị không thuộc tên miền chính thức.",
   "Đòi mật khẩu và mã xác thực hai lớp."
  ],
  "action": "Không bấm link. Vào ứng dụng chính thức để xem thông báo thật. Bật xác thực hai lớp và không chia sẻ mã cho ai.",
  "question": {
   "id": "q-account",
   "lessonId": "account",
   "text": "Tin nhắn dọa khóa tài khoản và gửi link yêu cầu nhập mật khẩu, mã xác thực. Bạn nên?",
   "options": [
    "Nhập ngay để giữ tài khoản.",
    "Mở ứng dụng chính thức để kiểm tra, không dùng link.",
    "Chuyển link cho bạn bè cùng làm."
   ],
   "correct": 1,
   "explanation": "Nền tảng thật thông báo ngay trong ứng dụng. Nhập mã xác thực vào trang lạ là trao tài khoản cho kẻ gian."
  }
 },
 {
  "id": "remoteapp",
  "title": "Cài ứng dụng theo hướng dẫn",
  "topic": "Ứng dụng lạ",
  "icon": "lock",
  "category": "fake_authority",
  "estimated_seconds": 60,
  "situation": "Người gọi xưng cán bộ, hướng dẫn bạn tải ứng dụng “dịch vụ công” từ một đường link để cập nhật dữ liệu. Ứng dụng xin quyền điều khiển điện thoại.",
  "signals": [
   "Gửi file cài đặt qua link, không có trên kho ứng dụng chính thức.",
   "Ứng dụng xin quyền trợ năng, điều khiển màn hình.",
   "Hướng dẫn tắt bảo mật hoặc cài đặt gấp."
  ],
  "action": "Không cài ứng dụng từ link người lạ gửi. Chỉ tải từ CH Play hoặc App Store. Nếu đã cài, tắt mạng và nhờ người tin cậy hoặc ngân hàng hỗ trợ.",
  "question": {
   "id": "q-remoteapp",
   "lessonId": "remoteapp",
   "text": "Người gọi gửi link tải ứng dụng “dịch vụ công” và bảo bật quyền trợ năng. Bạn nên?",
   "options": [
    "Cài theo hướng dẫn vì là cán bộ.",
    "Không cài, tự tải ứng dụng từ kho chính thức nếu cần.",
    "Cài nhưng tắt sau khi xong."
   ],
   "correct": 1,
   "explanation": "Ứng dụng giả có thể đọc OTP và điều khiển điện thoại để rút tiền. Chỉ cài từ kho ứng dụng chính thức."
  }
 },
 {
  "id": "crypto",
  "title": "Sàn tiền ảo cam kết lãi",
  "topic": "Đầu tư",
  "icon": "chart",
  "category": "investment",
  "estimated_seconds": 60,
  "situation": "Một nhóm chat giới thiệu sàn tiền ảo “lãi 5% mỗi ngày”, cho rút thử khoản nhỏ thành công, rồi khuyên nạp lớn để lên cấp VIP.",
  "signals": [
   "Cam kết lãi cao, đều đặn, không rủi ro.",
   "Cho thắng nhỏ lúc đầu để tạo lòng tin.",
   "Muốn rút tiền phải nạp thêm “phí” hoặc “thuế”."
  ],
  "action": "Không nạp tiền vào sàn không rõ pháp lý. Lãi cao bất thường là dấu hiệu lừa đảo. Hỏi người có chuyên môn trước khi đầu tư.",
  "question": {
   "id": "q-crypto",
   "lessonId": "crypto",
   "text": "Sàn tiền ảo cho bạn rút thử 200 nghìn thành công và khuyên nạp 50 triệu để lên VIP. Bạn nên?",
   "options": [
    "Nạp vì đã rút được tiền thật.",
    "Dừng lại, không nạp thêm và tìm hiểu pháp lý của sàn.",
    "Rủ thêm người thân cùng nạp."
   ],
   "correct": 1,
   "explanation": "Cho rút khoản nhỏ là chiêu tạo lòng tin trước khi chiếm khoản lớn."
  }
 },
 {
  "id": "hospital",
  "title": "Người thân cấp cứu",
  "topic": "Cuộc gọi lạ",
  "icon": "users",
  "category": "other",
  "estimated_seconds": 60,
  "situation": "Một người gọi tự xưng bác sĩ, báo con bạn bị tai nạn đang cấp cứu, cần chuyển ngay tiền phẫu thuật vào tài khoản cá nhân.",
  "signals": [
   "Tin dữ bất ngờ khiến bạn hoảng loạn.",
   "Yêu cầu chuyển tiền ngay vào tài khoản cá nhân.",
   "Không cho bạn thời gian gọi kiểm tra."
  ],
  "action": "Bình tĩnh, gác máy và gọi trực tiếp cho người thân hoặc trường học, bệnh viện qua số chính thức. Bệnh viện không đòi chuyển khoản cá nhân qua điện thoại.",
  "question": {
   "id": "q-hospital",
   "lessonId": "hospital",
   "text": "Người lạ báo con bạn cấp cứu, cần chuyển gấp 30 triệu vào tài khoản cá nhân. Việc đầu tiên nên làm là gì?",
   "options": [
    "Chuyển tiền ngay vì lo cho con.",
    "Gọi trực tiếp cho con hoặc bệnh viện qua số chính thức để kiểm tra.",
    "Gửi OTP để họ tạm ứng giúp."
   ],
   "correct": 1,
   "explanation": "Kẻ gian lợi dụng sự hoảng hốt. Một cuộc gọi kiểm tra trực tiếp có thể giúp bạn tránh mất tiền."
  }
 },
 {
  "id": "upgrade",
  "title": "Nâng cấp thẻ, tăng hạn mức",
  "topic": "Ngân hàng",
  "icon": "bank",
  "category": "phishing",
  "estimated_seconds": 60,
  "situation": "Có người gọi xưng nhân viên ngân hàng, mời nâng hạn mức thẻ tín dụng miễn phí, yêu cầu đọc số thẻ, ngày hết hạn và mã gửi về điện thoại.",
  "signals": [
   "Gọi từ số lạ, chào mời ưu đãi hấp dẫn.",
   "Hỏi số thẻ, mã CVV, OTP.",
   "Nói ưu đãi chỉ áp dụng trong hôm nay."
  ],
  "action": "Ngân hàng không hỏi OTP, CVV qua điện thoại. Từ chối và gọi lại tổng đài in trên thẻ nếu muốn tìm hiểu.",
  "question": {
   "id": "q-upgrade",
   "lessonId": "upgrade",
   "text": "Nhân viên tự xưng ngân hàng hỏi mã CVV và OTP để nâng hạn mức thẻ. Bạn nên?",
   "options": [
    "Đọc mã vì muốn nâng hạn mức.",
    "Từ chối, gọi lại tổng đài in trên thẻ.",
    "Chỉ đọc CVV, giữ lại OTP."
   ],
   "correct": 1,
   "explanation": "CVV và OTP đủ để kẻ gian thanh toán bằng thẻ của bạn. Không đọc cho bất kỳ ai."
  }
 },
 {
  "id": "wrongpay",
  "title": "Chuyển nhầm tiền rồi đòi lại",
  "topic": "Ngân hàng",
  "icon": "bank",
  "category": "other",
  "estimated_seconds": 60,
  "situation": "Tài khoản bạn bỗng nhận 5 triệu từ người lạ. Ngay sau đó có người gọi nói chuyển nhầm, đòi bạn chuyển trả vào một tài khoản khác, kèm lời đe dọa.",
  "signals": [
   "Tiền lạ vào tài khoản, ngay sau đó có người hối thúc.",
   "Yêu cầu trả vào tài khoản khác với tài khoản đã chuyển.",
   "Đe dọa báo công an nếu không trả ngay."
  ],
  "action": "Không tự chuyển trả theo yêu cầu. Liên hệ ngân hàng của bạn để làm thủ tục hoàn trả đúng quy trình.",
  "question": {
   "id": "q-wrongpay",
   "lessonId": "wrongpay",
   "text": "Có người chuyển nhầm 5 triệu vào tài khoản bạn và đòi trả vào một số tài khoản khác. Bạn nên?",
   "options": [
    "Trả ngay vào tài khoản họ đưa.",
    "Báo ngân hàng để hoàn trả theo quy trình chính thức.",
    "Rút tiền mặt mang đi trả."
   ],
   "correct": 1,
   "explanation": "Kẻ gian có thể dùng tiền bẩn hoặc khoản vay đứng tên bạn. Hoàn trả qua ngân hàng giúp bạn an toàn."
  }
 },
 {
  "id": "charity",
  "title": "Kêu gọi từ thiện giả",
  "topic": "Mạng xã hội",
  "icon": "gift",
  "category": "other",
  "estimated_seconds": 60,
  "situation": "Một trang mạng đăng hình em bé bệnh nặng, kêu gọi chuyển khoản gấp vào tài khoản cá nhân, nói gia đình không còn thời gian.",
  "signals": [
   "Hình ảnh gây xúc động mạnh, thúc giục chuyển ngay.",
   "Tài khoản cá nhân, không có tổ chức xác nhận.",
   "Trang mới lập hoặc đổi tên nhiều lần."
  ],
  "action": "Ủng hộ qua tổ chức từ thiện, Đoàn – Hội hoặc chính quyền địa phương có xác nhận. Kiểm tra thông tin trước khi chuyển tiền.",
  "question": {
   "id": "q-charity",
   "lessonId": "charity",
   "text": "Trang mạng mới lập kêu gọi chuyển gấp tiền chữa bệnh vào tài khoản cá nhân. Cách ủng hộ an toàn là gì?",
   "options": [
    "Chuyển ngay vì thương em bé.",
    "Ủng hộ qua tổ chức hoặc địa phương có xác nhận.",
    "Chia sẻ số tài khoản cho nhiều người cùng chuyển."
   ],
   "correct": 1,
   "explanation": "Lòng tốt dễ bị lợi dụng. Ủng hộ qua kênh có xác nhận giúp tiền tới đúng người cần."
  }
 }
];
