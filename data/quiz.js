/* Lá Chắn Số · Ngân hàng câu hỏi Quiz (F05)
   File dữ liệu nạp bằng thẻ <script src="data/..."> nên mở trực tiếp (file://) hay qua máy chủ đều chạy.
   Sửa nội dung ở đây, không cần sửa HTML. Tình huống là giả lập cho mục đích giáo dục.
   "correct" là vị trí đáp án đúng trong "options" (đếm từ 0); trang tự xáo thứ tự đáp án khi hiển thị. */
window.LCS_DATA=window.LCS_DATA||{};
window.LCS_DATA.quiz=[
 {
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
 },
 {
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
 },
 {
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
 },
 {
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
 },
 {
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
 },
 {
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
 },
 {
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
 },
 {
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
 },
 {
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
 },
 {
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
 },
 {
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
 },
 {
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
 },
 {
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
 },
 {
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
 },
 {
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
 },
 {
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
 },
 {
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
 },
 {
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
 },
 {
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
 },
 {
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
 },
 {
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
 },
 {
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
 },
 {
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
 },
 {
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
 },
 {
  "id": "q-x01",
  "lessonId": "authority",
  "text": "Cuộc gọi video có người mặc sắc phục công an, yêu cầu bạn ở một mình trong phòng khách sạn để “làm việc”. Bạn nên?",
  "options": [
   "Làm theo vì thấy sắc phục.",
   "Ngắt cuộc gọi và báo người thân, cơ quan công an nơi gần nhất.",
   "Chuyển tiền để được “bảo lãnh”."
  ],
  "correct": 1,
  "explanation": "Công an không làm việc qua video, không yêu cầu cô lập hay chuyển tiền."
 },
 {
  "id": "q-x02",
  "lessonId": "authority",
  "text": "Người gọi nói bạn có lệnh bắt và gửi ảnh “lệnh bắt” qua Zalo. Điều nào đúng?",
  "options": [
   "Văn bản qua Zalo đủ để tin là thật.",
   "Cơ quan chức năng làm việc trực tiếp, có giấy mời chính thức.",
   "Phải chuyển tiền để hủy lệnh."
  ],
  "correct": 1,
  "explanation": "Giấy tờ gửi qua mạng rất dễ làm giả. Làm việc thật luôn có giấy mời và địa chỉ rõ ràng."
 },
 {
  "id": "q-x03",
  "lessonId": "authority",
  "text": "Người gọi đòi bạn giữ bí mật với gia đình vì “điều tra mật”. Bạn nên hiểu thế nào?",
  "options": [
   "Đó là quy trình bình thường.",
   "Đó là dấu hiệu lừa đảo, cần kể ngay với người thân.",
   "Nên tắt điện thoại người nhà."
  ],
  "correct": 1,
  "explanation": "Cô lập nạn nhân khỏi người thân là chiêu quen thuộc để không ai cản bạn chuyển tiền."
 },
 {
  "id": "q-x04",
  "lessonId": "bank",
  "text": "Tin nhắn có tên hiển thị giống ngân hàng nhưng chứa link lạ. Điều nào đúng?",
  "options": [
   "Tên hiển thị đúng thì link an toàn.",
   "Tên hiển thị có thể bị giả mạo, không bấm link.",
   "Bấm link nhưng không nhập gì thì an toàn."
  ],
  "correct": 1,
  "explanation": "Kẻ gian dùng trạm phát sóng giả để gửi tin nhắn mang tên ngân hàng."
 },
 {
  "id": "q-x05",
  "lessonId": "bank",
  "text": "Bạn lỡ nhập mật khẩu ngân hàng vào trang lạ. Việc cần làm ngay là gì?",
  "options": [
   "Chờ xem có mất tiền không.",
   "Gọi tổng đài ngân hàng để khóa tài khoản và đổi mật khẩu.",
   "Đăng bài hỏi trên mạng xã hội."
  ],
  "correct": 1,
  "explanation": "Phản ứng càng nhanh càng có cơ hội chặn giao dịch."
 },
 {
  "id": "q-x06",
  "lessonId": "bank",
  "text": "Tên miền nào đáng nghi nhất khi nhận được trong tin nhắn ngân hàng?",
  "options": [
   "Tên miền in trên thẻ, website chính thức.",
   "Tên miền có thêm chữ lạ như -hotro, -xacminh, .xyz.",
   "Ứng dụng ngân hàng tải từ kho chính thức."
  ],
  "correct": 1,
  "explanation": "Tên miền giả thường thêm chữ, đổi đuôi để giống tên ngân hàng."
 },
 {
  "id": "q-x07",
  "lessonId": "job",
  "text": "Công việc “like video nhận tiền” yêu cầu nạp tiền để nhận nhiệm vụ cao hơn. Đây là?",
  "options": [
   "Cơ hội kiếm thêm hợp pháp.",
   "Dấu hiệu lừa đảo việc nhẹ lương cao.",
   "Quy định chung của mọi công việc online."
  ],
  "correct": 1,
  "explanation": "Việc thật không bắt người lao động nạp tiền để làm việc."
 },
 {
  "id": "q-x08",
  "lessonId": "job",
  "text": "Nhà tuyển dụng nhắn qua mạng, hứa lương 15 triệu cho việc 2 giờ mỗi ngày, cần nộp tiền đồng phục. Bạn nên?",
  "options": [
   "Nộp tiền để giữ chỗ.",
   "Kiểm tra công ty qua kênh chính thức, không nộp tiền trước.",
   "Gửi ảnh căn cước để ký hợp đồng."
  ],
  "correct": 1,
  "explanation": "Phí đồng phục, phí hồ sơ trước khi làm việc là dấu hiệu quen thuộc."
 },
 {
  "id": "q-x09",
  "lessonId": "task",
  "text": "Sau 3 nhiệm vụ nhận thưởng, bạn được báo “tài khoản lỗi” và phải nạp 10 triệu để rút. Bạn nên?",
  "options": [
   "Nạp để lấy lại tiền.",
   "Dừng, không nạp thêm, lưu bằng chứng và báo cáo.",
   "Vay thêm để nạp."
  ],
  "correct": 1,
  "explanation": "Càng nạp càng mất. Dừng lại và báo cáo là cách giảm thiệt hại."
 },
 {
  "id": "q-x10",
  "lessonId": "task",
  "text": "Vì sao kẻ gian cho bạn nhận hoa hồng nhỏ ở những nhiệm vụ đầu?",
  "options": [
   "Vì họ là công ty uy tín.",
   "Để tạo lòng tin trước khi yêu cầu nạp số tiền lớn.",
   "Vì nhiệm vụ đầu dễ hơn."
  ],
  "correct": 1,
  "explanation": "Thắng nhỏ trước là mồi nhử để bạn nạp nhiều hơn."
 },
 {
  "id": "q-x11",
  "lessonId": "gift",
  "text": "Bạn được báo trúng xe máy từ chương trình bạn không tham gia. Bạn nên?",
  "options": [
   "Đóng phí vận chuyển để nhận xe.",
   "Bỏ qua, không cung cấp thông tin hay chuyển tiền.",
   "Gửi số tài khoản để nhận tiền thay xe."
  ],
  "correct": 1,
  "explanation": "Không tham gia mà trúng thưởng là dấu hiệu lừa đảo."
 },
 {
  "id": "q-x12",
  "lessonId": "gift",
  "text": "Chương trình tri ân yêu cầu nhập số thẻ để nhận quà. Bạn nên?",
  "options": [
   "Nhập vì quà miễn phí.",
   "Không nhập, kiểm tra chương trình trên kênh chính thức.",
   "Nhập số thẻ của người thân."
  ],
  "correct": 1,
  "explanation": "Nhận quà không cần số thẻ hay OTP."
 },
 {
  "id": "q-x13",
  "lessonId": "delivery",
  "text": "Bạn nhận tin “bưu kiện bị giữ, bấm link cập nhật địa chỉ và trả 15.000đ”. Bạn nên?",
  "options": [
   "Trả vì số tiền nhỏ.",
   "Kiểm tra mã vận đơn trong ứng dụng hoặc tổng đài hãng vận chuyển.",
   "Bấm link nhưng dùng thẻ phụ."
  ],
  "correct": 1,
  "explanation": "Khoản phí nhỏ là mồi để lấy thông tin thẻ của bạn."
 },
 {
  "id": "q-x14",
  "lessonId": "delivery",
  "text": "Shipper gọi báo có đơn hàng cần trả tiền nhưng bạn không đặt gì. Bạn nên?",
  "options": [
   "Nhận và trả tiền rồi tính sau.",
   "Từ chối nhận, kiểm tra lại với người nhà xem ai đặt.",
   "Chuyển khoản trước cho shipper."
  ],
  "correct": 1,
  "explanation": "Đơn hàng “ma” đòi tiền khi bạn không đặt là chiêu thường gặp."
 },
 {
  "id": "q-x15",
  "lessonId": "investment",
  "text": "Dấu hiệu nào cho thấy lời mời đầu tư có thể là lừa đảo?",
  "options": [
   "Có giấy phép, công bố rủi ro rõ ràng.",
   "Cam kết lãi cao chắc chắn, không rủi ro.",
   "Khuyên bạn hỏi chuyên gia trước khi đầu tư."
  ],
  "correct": 1,
  "explanation": "Không có khoản đầu tư nào chắc chắn lãi cao mà không rủi ro."
 },
 {
  "id": "q-x16",
  "lessonId": "investment",
  "text": "Người hướng dẫn trong nhóm chat khuyên vay thêm để “tất tay” vì sắp có lệnh lớn. Bạn nên?",
  "options": [
   "Vay thêm cho kịp.",
   "Không vay, không nạp thêm, rời nhóm.",
   "Rủ bạn bè cùng vay."
  ],
  "correct": 1,
  "explanation": "Bị thúc giục vay để đầu tư là dấu hiệu lừa đảo nguy hiểm."
 },
 {
  "id": "q-x17",
  "lessonId": "relative",
  "text": "Tài khoản Facebook của bạn thân nhắn mượn tiền và cho số tài khoản người khác. Bạn nên?",
  "options": [
   "Chuyển vì là bạn thân.",
   "Gọi điện trực tiếp hoặc gọi video để xác minh.",
   "Hỏi thêm vài câu qua tin nhắn là đủ."
  ],
  "correct": 1,
  "explanation": "Tài khoản có thể đã bị chiếm. Gọi trực tiếp qua số bạn đã lưu."
 },
 {
  "id": "q-x18",
  "lessonId": "relative",
  "text": "Cách nào giúp gia đình xác minh khi có người nhắn mượn tiền gấp?",
  "options": [
   "Thống nhất một câu hỏi bí mật chỉ người nhà biết.",
   "Tin vào ảnh đại diện.",
   "Tin nếu họ biết tên bạn."
  ],
  "correct": 0,
  "explanation": "Câu hỏi bí mật hoặc gọi lại số quen giúp phát hiện kẻ mạo danh."
 },
 {
  "id": "q-x19",
  "lessonId": "otp",
  "text": "Mã OTP nên được chia sẻ với ai?",
  "options": [
   "Nhân viên ngân hàng gọi tới.",
   "Không ai cả.",
   "Người thân nếu họ cần."
  ],
  "correct": 1,
  "explanation": "OTP chỉ dùng cho chính bạn để xác nhận giao dịch."
 },
 {
  "id": "q-x20",
  "lessonId": "otp",
  "text": "Tin nhắn OTP về điện thoại dù bạn không giao dịch gì. Bạn nên?",
  "options": [
   "Gửi lại cho người hỏi.",
   "Không chia sẻ, kiểm tra tài khoản và đổi mật khẩu nếu cần.",
   "Bỏ qua mãi mãi."
  ],
  "correct": 1,
  "explanation": "OTP lạ có thể là dấu hiệu ai đó đang cố đăng nhập tài khoản của bạn."
 },
 {
  "id": "q-x21",
  "lessonId": "voice",
  "text": "Kẻ gian có thể làm gì với vài giây ghi âm giọng nói của bạn?",
  "options": [
   "Không làm được gì.",
   "Tạo giọng nói giả để lừa người thân.",
   "Chỉ dùng để quảng cáo."
  ],
  "correct": 1,
  "explanation": "Công nghệ giả giọng chỉ cần một đoạn ghi âm ngắn."
 },
 {
  "id": "q-x22",
  "lessonId": "voice",
  "text": "Cuộc gọi video hình ảnh mờ, giật, người thân nói ngắn rồi tắt và nhắn xin tiền. Bạn nên?",
  "options": [
   "Chuyển vì đã thấy mặt.",
   "Gọi lại qua số quen, hỏi chuyện riêng để kiểm tra.",
   "Chuyển một nửa trước."
  ],
  "correct": 1,
  "explanation": "Video giả thường mờ, ngắn và tránh trò chuyện lâu."
 },
 {
  "id": "q-x23",
  "lessonId": "sim",
  "text": "Nhà mạng chính thức hỗ trợ chuẩn hóa thông tin thuê bao bằng cách nào?",
  "options": [
   "Qua cuộc gọi từ số lạ đọc cú pháp.",
   "Tại cửa hàng hoặc ứng dụng, tổng đài chính thức.",
   "Qua link gửi trong tin nhắn lạ."
  ],
  "correct": 1,
  "explanation": "Hãy chủ động liên hệ kênh chính thức thay vì làm theo cuộc gọi đến."
 },
 {
  "id": "q-x24",
  "lessonId": "loan",
  "text": "Ứng dụng vay đòi quyền truy cập toàn bộ danh bạ. Rủi ro là gì?",
  "options": [
   "Không có rủi ro.",
   "Có thể bị đòi nợ, bôi nhọ qua danh bạ người thân.",
   "Giúp vay được nhiều hơn."
  ],
  "correct": 1,
  "explanation": "Các ứng dụng vay bất hợp pháp dùng danh bạ để khủng bố tinh thần người vay."
 },
 {
  "id": "q-x25",
  "lessonId": "loan",
  "text": "Bạn chưa nhận khoản vay nào nhưng bị gọi đòi nợ kèm lãi rất cao. Bạn nên?",
  "options": [
   "Trả cho xong.",
   "Lưu bằng chứng, không trả, báo công an và ngân hàng.",
   "Vay chỗ khác để trả."
  ],
  "correct": 1,
  "explanation": "Đây có thể là khoản vay bị làm giả hoặc tiền chuyển ép. Báo cơ quan chức năng."
 },
 {
  "id": "q-x26",
  "lessonId": "electric",
  "text": "Tin nhắn báo “tiền điện chưa thanh toán” kèm link thanh toán. Cách kiểm tra an toàn là?",
  "options": [
   "Bấm link thanh toán luôn.",
   "Mở ứng dụng hoặc tổng đài chính thức của điện lực để tra cứu.",
   "Trả lời tin nhắn hỏi lại."
  ],
  "correct": 1,
  "explanation": "Tra cứu qua kênh chính thức giúp tránh trang thanh toán giả."
 },
 {
  "id": "q-x27",
  "lessonId": "qr",
  "text": "Trước khi chuyển tiền bằng mã QR ở cửa hàng, bạn nên kiểm tra gì?",
  "options": [
   "Không cần kiểm tra.",
   "Tên người nhận hiện trên ứng dụng có đúng cửa hàng không.",
   "Chỉ cần mã QR rõ nét."
  ],
  "correct": 1,
  "explanation": "Mã QR có thể bị dán đè. Tên người nhận giúp phát hiện sai lệch."
 },
 {
  "id": "q-x28",
  "lessonId": "romance",
  "text": "Người quen qua mạng từ chối gọi video nhưng thường xuyên xin tiền. Đây là dấu hiệu gì?",
  "options": [
   "Họ ngại ngùng.",
   "Dấu hiệu lừa đảo tình cảm.",
   "Bình thường với bạn ở xa."
  ],
  "correct": 1,
  "explanation": "Né tránh gặp mặt, gọi video và hỏi tiền là dấu hiệu rõ ràng."
 },
 {
  "id": "q-x29",
  "lessonId": "refund",
  "text": "Bạn muốn hỏi về hoàn tiền đơn hàng. Nên liên hệ ở đâu?",
  "options": [
   "Số điện thoại ai đó bình luận dưới bài đăng.",
   "Mục hỗ trợ trong ứng dụng của sàn.",
   "Trang mạng xã hội cá nhân xưng là sàn."
  ],
  "correct": 1,
  "explanation": "Số hỗ trợ trong bình luận thường là của kẻ gian."
 },
 {
  "id": "q-x30",
  "lessonId": "scholar",
  "text": "Cách xác minh một học bổng là thật?",
  "options": [
   "Tin vào logo trong email.",
   "Đối chiếu trên website chính thức và hỏi nhà trường.",
   "Hỏi chính người gửi email."
  ],
  "correct": 1,
  "explanation": "Logo dễ sao chép. Hãy kiểm tra qua nguồn độc lập."
 },
 {
  "id": "q-x31",
  "lessonId": "account",
  "text": "Cách bảo vệ tài khoản mạng xã hội tốt nhất là?",
  "options": [
   "Dùng một mật khẩu cho mọi nơi.",
   "Bật xác thực hai lớp và không chia sẻ mã.",
   "Lưu mật khẩu trong ghi chú công khai."
  ],
  "correct": 1,
  "explanation": "Xác thực hai lớp giúp chặn kẻ gian dù họ biết mật khẩu."
 },
 {
  "id": "q-x32",
  "lessonId": "account",
  "text": "Bạn bè nhắn: “Bình chọn giúp mình, đăng nhập Facebook ở link này nhé”. Bạn nên?",
  "options": [
   "Đăng nhập giúp bạn.",
   "Gọi hỏi bạn, không đăng nhập qua link lạ.",
   "Chia sẻ link cho người khác."
  ],
  "correct": 1,
  "explanation": "Link bình chọn giả dùng để chiếm tài khoản và lan tiếp."
 },
 {
  "id": "q-x33",
  "lessonId": "remoteapp",
  "text": "Dấu hiệu điện thoại có thể đã bị cài ứng dụng điều khiển?",
  "options": [
   "Pin tốt hơn.",
   "Màn hình tự thao tác, ứng dụng lạ xin quyền trợ năng.",
   "Nhận nhiều tin nhắn từ bạn bè."
  ],
  "correct": 1,
  "explanation": "Hãy tắt mạng, gỡ ứng dụng lạ và liên hệ ngân hàng ngay."
 },
 {
  "id": "q-x34",
  "lessonId": "remoteapp",
  "text": "Nguồn tải ứng dụng an toàn nhất là?",
  "options": [
   "File .apk gửi qua Zalo.",
   "CH Play hoặc App Store, đúng nhà phát triển.",
   "Link rút gọn trong tin nhắn."
  ],
  "correct": 1,
  "explanation": "Ứng dụng chính thức có trên kho ứng dụng và đúng tên nhà phát triển."
 },
 {
  "id": "q-x35",
  "lessonId": "crypto",
  "text": "Sàn đòi “phí rút tiền” hoặc “thuế” mới cho rút lợi nhuận. Bạn nên?",
  "options": [
   "Đóng phí để rút.",
   "Không đóng, lưu bằng chứng và báo cáo.",
   "Nạp thêm để đủ hạn mức rút."
  ],
  "correct": 1,
  "explanation": "Đòi phí để rút tiền là dấu hiệu sàn lừa đảo."
 },
 {
  "id": "q-x36",
  "lessonId": "hospital",
  "text": "Khi nhận tin người thân gặp nạn, điều đầu tiên nên làm là?",
  "options": [
   "Chuyển tiền ngay.",
   "Bình tĩnh gọi trực tiếp cho người thân hoặc nơi họ đang ở.",
   "Đăng lên mạng xin giúp đỡ."
  ],
  "correct": 1,
  "explanation": "Kiểm tra trực tiếp giúp phát hiện tin giả trong vài phút."
 },
 {
  "id": "q-x37",
  "lessonId": "upgrade",
  "text": "Ngân hàng có gọi điện hỏi mã OTP để hủy giao dịch không?",
  "options": [
   "Có, khi cần hủy giao dịch.",
   "Không bao giờ.",
   "Chỉ với khách VIP."
  ],
  "correct": 1,
  "explanation": "Ngân hàng không yêu cầu khách đọc OTP qua điện thoại."
 },
 {
  "id": "q-x38",
  "lessonId": "wrongpay",
  "text": "Vì sao không nên tự chuyển trả tiền “chuyển nhầm” vào tài khoản người lạ đưa?",
  "options": [
   "Vì mất phí chuyển khoản.",
   "Vì có thể bị lừa hai lần hoặc liên quan khoản vay giả.",
   "Vì ngân hàng cấm."
  ],
  "correct": 1,
  "explanation": "Hoàn trả qua ngân hàng giúp tiền về đúng nơi và bảo vệ bạn."
 },
 {
  "id": "q-x39",
  "lessonId": "charity",
  "text": "Dấu hiệu của một bài kêu gọi từ thiện giả là?",
  "options": [
   "Có xác nhận của địa phương, công khai sao kê.",
   "Tài khoản cá nhân, thúc giục, trang mới lập.",
   "Có số điện thoại tổ chức rõ ràng."
  ],
  "correct": 1,
  "explanation": "Hãy ủng hộ qua tổ chức có xác nhận và công khai."
 },
 {
  "id": "q-x40",
  "lessonId": "otp",
  "text": "Bạn đã lỡ đọc OTP cho người lạ. Việc cần làm ngay?",
  "options": [
   "Chờ xem có chuyện gì không.",
   "Gọi ngay tổng đài ngân hàng để khóa tài khoản, thẻ.",
   "Đổi hình nền điện thoại."
  ],
  "correct": 1,
  "explanation": "Liên hệ ngân hàng ngay để chặn giao dịch."
 },
 {
  "id": "q-x41",
  "lessonId": "bank",
  "text": "Ứng dụng ngân hàng an toàn nhất nên được mở bằng cách nào?",
  "options": [
   "Bấm link trong tin nhắn.",
   "Mở trực tiếp ứng dụng đã cài từ kho chính thức.",
   "Tìm trên mạng rồi bấm kết quả đầu tiên."
  ],
  "correct": 1,
  "explanation": "Mở ứng dụng trực tiếp tránh được trang giả mạo."
 },
 {
  "id": "q-x42",
  "lessonId": "job",
  "text": "Bạn được nhờ cho mượn tài khoản ngân hàng để “nhận lương hộ” và được trả công. Bạn nên?",
  "options": [
   "Đồng ý vì có thêm tiền.",
   "Từ chối vì tài khoản có thể bị dùng để rửa tiền lừa đảo.",
   "Cho mượn nhưng đổi mật khẩu sau."
  ],
  "correct": 1,
  "explanation": "Cho mượn, bán tài khoản ngân hàng là vi phạm pháp luật và tiếp tay lừa đảo."
 },
 {
  "id": "q-x43",
  "lessonId": "relative",
  "text": "Bạn nên làm gì để người lớn tuổi trong nhà phòng lừa đảo?",
  "options": [
   "Không cần nói gì.",
   "Lưu sẵn số người thân tin cậy và dặn hỏi trước khi chuyển tiền.",
   "Đưa họ mật khẩu ngân hàng của bạn."
  ],
  "correct": 1,
  "explanation": "Một danh sách người thân tin cậy giúp ông bà, cha mẹ có người hỏi khi gặp chuyện lạ."
 },
 {
  "id": "q-x44",
  "lessonId": "authority",
  "text": "Nếu đã chuyển tiền cho kẻ gian, bạn nên làm gì?",
  "options": [
   "Giữ im lặng vì xấu hổ.",
   "Báo ngay ngân hàng và cơ quan công an, lưu lại bằng chứng.",
   "Chuyển thêm để lấy lại tiền."
  ],
  "correct": 1,
  "explanation": "Báo sớm giúp tăng cơ hội phong tỏa và hỗ trợ."
 },
 {
  "id": "q-x45",
  "lessonId": "delivery",
  "text": "Tin nhắn giao hàng có link rút gọn (bit.ly, tinyurl...). Bạn nên?",
  "options": [
   "Bấm vì link ngắn gọn.",
   "Không bấm, tra mã đơn trong ứng dụng chính thức.",
   "Chuyển cho người khác bấm thử."
  ],
  "correct": 1,
  "explanation": "Link rút gọn che giấu địa chỉ thật của trang."
 }
];
