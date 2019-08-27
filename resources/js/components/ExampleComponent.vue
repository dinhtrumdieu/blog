<template>
    <div>
        <header id="main-header">
            <nav id="myDIV" class="navbar fixed-top navbar-expand-lg navbar-light">
                <div class="container">
                    <!-- Site Logo -->
                    <a id="main-logo" class="navbar-brand" href="#">Đô Thị Viva Park</a>
                    <!-- Dropdown Button -->
                    <button id="hamburger" class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!-- Navigation Links -->
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#trangChu"><strong>Trang chủ</strong></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#features"><strong>Giới thiệu</strong></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#viTri"><strong>Vị trí</strong></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#matBang"><strong>Tiện ích & Mặt bằng</strong></a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#thuVien"><strong>Thư viện</strong></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#cta"><strong>Liên hệ <span class="phone">(096 222 3618)</span></strong></a>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </header><!-- Header End -->
        <!-- /// HERO SECTION /// -->
        <div id="hero-section">
            <a id="trangChu"></a>
            <div class="row hero-unit angled-section large-margin">
                <div class="container">
                    <div class="row">
                        <div class="hide-on-mobile col-md-6 hero-caption">
                            <form action="https://ecogreensaigon.phathung.vn/gui-email" class="contactForm" data-toggle="validator" method="post"
                                  data-confirm="Bạn đã điền đúng mẫu?">
                                <input type="hidden" name="_token" value="7hkrEzu9LgYzH8sEGzf5HyjPtXN3bGAxdFPBBqRO">                        <div class="form-group">
                                <!-- First Name Field -->
                                <input
                                    v-model="username"
                                    class="name eco-form" type="text" id="name" name="name" placeholder="Tên*" required
                                       size="35"
                                       data-error="Tên không được để trống">
                                <div class="help-block with-errors"></div>
                            </div>
                                <div class="form-group">
                                    <!-- Phone Number Field -->
                                    <input
                                        v-model="phone"
                                        class="phone eco-form" type="tel" id="phone" name="phone" placeholder="Số điện thoại*" required
                                           size="35"
                                           data-error="Số điện thoại không được để trống">
                                    <div class="phone-error help-block with-errors"></div>
                                </div>
                                <div class="form-group">
                                    <!-- Email Field -->
                                    <input
                                        v-model="email"
                                        class="email eco-form" type="email" id="email" name="email" placeholder="Email"
                                           data-error="Email không được để trống"
                                           size="35">
                                    <div class="help-block with-errors"></div>
                                </div>
                                <div class="form-group">
                                    <!-- Message Field -->
                                    <textarea
                                        v-model="message"
                                        class="message" id="message" name="message" placeholder="Yêu cầu"
                                              data-error="Message cannot be empty"></textarea>
                                    <div class="help-block with-errors"></div>
                                    <p class="subtle">*Bắt buộc</p>
                                    <!-- Submit Button -->
                                    <button
                                        @click="submit"
                                        id="findYourNewHouse" type="button"
                                            class="button">ĐĂNG KÝ NGAY</button>
                                    <!-- Success Message -->
                                    <div class="msgSubmit text-center hidden"></div>
                                </div>
                            </form>
                        </div>

                        <div class="col-md-6">
                            <div class="hero-caption"><!-- Main Tagline -->
                                <div class="animation-element pop-in in-view">
                                    <img id="can" src="images/logo/can.png" class="img-fluid" alt="logo">
                                    <img id="logo" src="images/logo/vina_city.png" class="img-fluid" alt="logo">
                                </div>
                                <div class="animation-element slide-down in-view">
                                    <p>Phong cách  <span class="eco-yellow"><strong>Đà Lạt</strong></span> nơi cửa ngõ sài gòn</p>
                                    <p>Dự án nhà phố biệt thự thông minh biệt lập trong lòng khu sinh thái</p>
                                </div>
                                <a class="show-on-mobile button " href="#cta">Liên hệ với chúng tôi</a>
                            </div>
                        </div>

                        <div class="col-12 text-center in-view">
                            <i id="arrow" class="lnr lnr-chevron-down colored"></i>
                        </div>
                    </div>

                </div>
            </div>
        </div><!-- Hero Section End -->
        <div class="eco-full">
            <div class="container small-margin"> <!-- /// Container /// -->
                <!-- /// ABOUT SECTION /// -->
                <div id="about-section">
                    <a id="features"></a><!-- Nav Anchor -->

                    <div class="row justify-content-center tiny-margin">
                        <h2 class="heading">Giới thiệu</h2>
                    </div>
                    <div class="eco-introduce row small-margin">
                        <!-- Feature Card -->
                        <div class="col-md-4">
                            <div class="feature animation-element slide-down delayed-1 in-view">
                                <i class="lnr lnr-map-marker"></i>
                                <h3 class="text-center">Vị trí</h3>
                                <p class="text-justify"><strong>Vị trí độc tôn</strong>: NGAY CỬA NGÕ PHÍA ĐÔNG VÀO THÀNH PHỐ.
                                    Viva Park sở hữu một “vị trí vàng” ngay cửa ngõ đi vào TP. HCM và Biên Hòa là hai thành phố lớn của khu vực Đông Nam Bộ.
                                    Dự án nằm giữa trục kết nối với nhiều tuyến giao thông quan trọng mang tầm quốc tế như cao tốc TPHCM – Long Thành – Dầu Giây, cao tốc Biên Hòa – Vũng Tàu…
                                    Đặc biệt, chỉ chưa đầy 5 phút, cư dân Viva Park Đồng Nai có thể đến ngay với sân bay quốc tế Long Thành và chỉ mất 40 phút để đến TP. HCM
                                </p>
                            </div>
                        </div>

                        <!-- Feature Card -->
                        <div class="col-md-4">
                            <div class="feature animation-element slide-down delayed-1 in-view">
                                <i class="lnr lnr-apartment"></i>
                                <h3 class="text-center">Hệ thống tiện ích</h3>
                                <p class="text-justify">Dự án tích hợp đa dạng các tiện ích khép kín, mang lại cho cư dân một cuộc sống đẳng cấp bậc nhất. Cư dân có thể mua sắm tại hệ thốngTrung tâm thương mại, thư giãn tại các phòng xông hơi, Phòng Gym – yoga, Hồ bơi Skyview…
                                    Đặc biệt dự án có hệ thống công viên Viva Rosa rộng gần 1,3ha, Quảng trường Cầu vồng,
                                    Trường mẫu giáo rộng 3.093m2, TTTM, Trung tâm y tế Vivapark 1.510m2, các tuyến phố thương mại sầm uất, khu dịch vụ giải trí sôi động, Khu vui chơi giành cho trẻ em…
                                    .</p>
                            </div>
                        </div>
                        <!-- Feature Card -->
                        <div class="col-md-4">
                            <div class="feature animation-element slide-down delayed in-view">
                                <i class="lnr lnr-diamond"></i>
                                <h3 class="text-center">Thiết kế</h3>
                                <p class="text-justify">Với thiết kế nội thất theo phong cách châu âu, các đường cong mềm mại có tính thuyết phục hơn.
                                    Một không gian châu Âu phải là sự hòa quyện và thăng hoa của cảm xúc.
                                    Bạn có thể bắt gặp những đặc điểm này trên các đường cong chỉ tường, sopha, bàn trà...
                                </p>
                            </div>
                        </div>

                        <div class="hide-on-mobile col-12 small-margin"></div>

                        <div class="col-12 small-margin">
                            <div class="text-center feature animation-element slide-down delayed-1 in-view">
                                <i class="lnr lnr-tag"></i>
                                <h3>Chính sách bán hàng</h3>
                                <p class="animation-element fade-in-left delayed in-view">
                                    Thanh Toán Chỉ 25% đợt đầu và trả góp trong vòng 24 tháng 0% đến khi nhận nhà
                                    Ngân hàng Vietcombank hỗ trợ vay vốn 60% - 90% ( Giải ngân theo tiến độ )
                                </p>
                                <p class="animation-element fade-in-right delayed in-view">
                                    Chiết khấu lên đến 5% cho khách hàng khi thanh toán 75%
                                </p>
                            </div>
                        </div>

                    </div>

                    <!-- Feature Box -->
                    <div class="row small-margin">
                        <div class="col-md-7">
                            <iframe class="youtube-video" src="https://www.youtube.com/embed/5smSTaYI-d8" frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                        </div>
                        <div class="col-md-5 ">
                            <div class="eco-text-wrapper text-wrapper">
                                <h3 class="text-center short-hr-center animation-element fade-in in-view">SỐNG XANH MỖI NGÀY!</h3>
                                <p class="text-justify animation-element fade-in delayed in-view">
                                    Với địa hình đồi cao và kiến trúc thấp tầng và nằm ven sông, chỉ cần đến đây  ai cũng  cảm nhận  được cái se se lạnh của thiên nhiên khí trời.
                                    Đặc biệt là vào sáng sớm, cái lạnh càng trở nên rõ nét hơn. Nằm trải dài trên những ngọn đồi thoai thoải với những thảm cỏ xanh non trải tận chân trời, những hàng cây xanh rợp lá phủ bóng toàn khu, khu đô thị Viva Park được con sông Buông hiền hòa ôm trọn.
                                    Theo chuyên gia khoa học phong thủy, chính con sông bao quanh <span class="eco-green"><strong> Viva Park </strong></span> tạo nên những mạch nước ngầm bên dưới dự án sẽ mang lại nhiều yếu tố có lợi cho sức khỏe của cư dân sinh sống tại đây.
                                </p>
                            </div>
                            <div class="border-box"></div>
                        </div>
                    </div>

                    <!-- Feature Box -->
                    <div class="row small-margin">
                        <div class="col-md-5">
                            <div class="text-wrapper flipped">
                                <h3 class="text-center short-hr-center animation-element fade-in in-view">Chủ đầu tư Long Điền Group ( LGD )</h3>
                                <p class="text-justify animation-element fade-in delayed in-view">
                                    LDG Group được chính thức thành lập vào năm 2010 từ sự kết hợp của hai tập đoàn hàng đầu về bất động sản và du lịch.
                                    Hiện tại, tập đoàn có vốn điều lệ hơn 2000 tỷ đồng và sở hữu tổng tài sản lên tới gần 4000 tỷ đồng.
                                </p>
                            </div>
                            <div class="border-box flipped"></div>
                        </div>
                        <div class="col-md-7">
                            <iframe class="youtube-video b-lazy b-loaded"
                                    src="https://www.youtube.com/embed/yaYrCuF3jQM"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen>
                            </iframe>
                        </div>
                    </div>

                    <!-- Feature Box -->
                    <div class="row small-margin">
                        <div class="col-md-7">
                            <img class="eco-img img-fluid b-lazy b-loaded"
                                 src="https://ecogreensaigon.phathung.vn/images/noi-that/Can B6_banlcon.jpg" alt="product-img">
                        </div>
                        <div class="col-md-5">
                            <div class="text-wrapper">
                                <h3 class="text-center short-hr-center animation-element fade-in in-view">Phong cách sang trọng và hiện đại</h3>
                                <p class="text-justify animation-element fade-in delayed in-view">
                                    Toàn bộ các căn nhà phố liên kế lẫn biệt thự sân vườn tại khu đô thị <span class="eco-screen"> <strong>Viva park</strong> </span> đều được thiết kế hiện đại với
                                    cảm hứng là những căn biệt thự cổ kính theo phong cách Châu Âu mang văn hóa người Việt tạo nên nét đặc trưng tinh tế dành cho chuyên gia
                                </p>
                            </div>
                            <div class="border-box"></div>
                        </div>
                    </div>

                    <!-- Feature Box -->
                    <div class="row small-margin">
                        <div class="col-md-5">
                            <div class="text-wrapper flipped">
                                <h3 class="text-center short-hr-center animation-element fade-in in-view">Thư giãn sang trọng</h3>
                                <p class="text-justify animation-element fade-in delayed in-view">
                                    Các căn nhà phố và biệt thự tại Viva Park được thiết kế thông minh,
                                    tối ưu hoá diện tích sử dụng nhưng vẫn đảm bảo sự thông thoáng, tiện lợi và thoải mái cho cư dân.
                                    Các chi tiết thiết kế về không gian sống cũng như về cảnh quan đáp ứng theo nhu cầu
                                    khắt khe nhất của các chuyên gia trong việc tạo ra môi trường sống hoàn hảo, tinh tế,
                                    khoáng đạt với tổng thể và hài hòa trong phong thủy.
                                </p>
                            </div>
                            <div class="border-box flipped"></div>
                        </div>
                        <div class="col-md-7">
                            <img class="eco-img img-fluid b-lazy b-loaded"
                                 src="https://ecogreensaigon.phathung.vn/images/noi-that/Can B6_PK.jpg" alt="product-img">
                        </div>
                    </div>

                    <div class="text-center material-btn">
                        <a class="contact btn btn-danger waves-effect waves-light animation-element slide-in-right in-view"
                           href="#cta">Liên hệ tham quan nhà mẫu</a>
                    </div>
                </div>

            </div>
        </div>
        <div id="testimonial-section" class="large-margin">
            <a id="viTri"></a>
            <div class="container">
                <div class="row">
                    <div class="testimonial-wrapper text-center animation-element fade-in in-view">
                        <h2>
                            Vị trí
                        </h2>
                        <br>

                        <div class="row">
                            <div class="col-md-5">
                                <p class="text-justify">
                                    với vị trí đắc địa của Viva Park là nắm giữa các tuyến đường huyết mạch về giao thông,
                                    dù là Thành phố Hồ Chí Minh hoa lệ, một Biên Hòa đang trỗi mình vươn lên hay biển Vũng Tàu mát mẻ cũng gia đình sau những tuần bận rộn.
                                    Khu du lịch sinh thái cũng là một lựa chọn tuyệt vời để hàn gắn gia đình và những người hàng xóm thân thương, một công đồng văn minh đang được hình thành và phát triển.
                                </p>
                            </div>
                            <div class="col-md-7">
                                <br>
                                <img class="img-fluid" src="images/vitri3.gif" alt="Vị trí">
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="eco-full">
            <div class="container small-margin"> <!-- /// Container /// -->
                <!-- /// PRICING SECTION /// -->
                <div id="plans-and-pricing-section">
                    <a id="matBang"></a>
                    <div class="row justify-content-center tiny-margin">
                        <h2 class="heading">Tiện ích & Mặt bằng</h2>
                    </div>


                    <div class="row medium-margin">
                        <div class="mt-sm-0 mt-3 col-md-5 feature-list animation-element fade-in-right in-view">
                            <div>
                                <h3 class="short-hr-left">Tiện ích ngoại khu</h3>
                                <p class="text-justify">Bên cạnh những tiện ích nội khu, từ vị trí của dự án Viva Park Giang Điền,
                                    cư dân có thể dễ dàng tiếp cận với các tụ điểm trọng điểm khu vực ngoại khu như:</p>
                                <ul class="text-justify">
                                    <li><i class="lnr lnr-checkmark-circle colored"></i> <span
                                        class="eco-green"><strong>Đô Thị Viva Park</strong></span>
                                        Với vị trí trên sườn đồi thoai thoải, cũng những con đường với hai hàng cây trải dài rợp bóng mát,
                                        dòng sông đem đến không khí mát mẻ trong lành quanh năm.
                                    </li>
                                    <li>
                                        <i class="lnr lnr-checkmark-circle colored"></i> Khu du lịch Thác Giang Điền
                                    </li>
                                    <li>
                                        <i class="lnr lnr-checkmark-circle colored"></i> Đô thị Tam Phước
                                    </li>
                                    <li><i class="lnr lnr-checkmark-circle colored"></i>
                                        Khu công nghệ Tam Phước
                                    </li>
                                    <li><i class="lnr lnr-checkmark-circle colored"></i>
                                        Khu công nghệ cao Giang Điền
                                    </li>
                                    <li><i class="lnr lnr-checkmark-circle colored"></i>
                                        Cách trung tâm Tp. Biên Hoà 15 phút di chuyển
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- Floor Plans Carousel -->
                        <div class="col-md-7 animation-element fade-in-left in-view">
                            <div id="custom-carousel2" class="eco-noi-khu-carousel carousel slide" data-ride="carousel"
                                 data-interval="3000">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="img-fluid"
                                             src="images/tien-ich/ngoai-khu/ngoaikhu.jpg"
                                             alt="Tiện ích ngoại khu">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="row medium-margin">
                        <!-- Floor Plans Carousel -->
                        <div class="col-md-7 animation-element slide-in-right in-view">
                            <div id="custom-carousel3" class="eco-noi-khu-carousel carousel slide" data-ride="carousel" data-interval="3000">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="img-fluid"
                                             src="images/tien-ich/noi-khu/2a.jpg"
                                             alt="Tiện ích nội khu">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="img-fluid"
                                             src="images/tien-ich/noi-khu/3a.jpg"
                                             alt="Tiện ích nội khu">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="img-fluid"
                                             src="images/tien-ich/noi-khu/4a.jpg"
                                             alt="Tiện ích nội khu">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="img-fluid"
                                             src="images/tien-ich/noi-khu/5a.jpg"
                                             alt="Tiện ích nội khu">
                                    </div>
                                </div>
                                <ol class="carousel-indicators">
                                    <li data-target="#custom-carousel3" data-slide-to="0"></li>
                                    <li data-target="#custom-carousel3" data-slide-to="1" class="active"></li>
                                    <li data-target="#custom-carousel3" data-slide-to="2"></li>
                                    <li data-target="#custom-carousel3" data-slide-to="4"></li>
                                </ol>
                            </div>
                        </div>
                        <div class="mt-sm-0 mt-3 col-md-5 feature-list animation-element fade-in-left in-view">
                            <div>
                                <h3 class="short-hr-left">Tiện ích nội khu</h3>

                                <ul class="text-justify">
                                    <li><i class="lnr lnr-checkmark-circle colored"></i>
                                        Trái ngược hoàn toàn với không khí tấp nập, ồn ào chen chúc của những vùng trung tâm.
                                        Khu đô thị thương mại Viva Park mang lại một làn gió mới, một cuộc sống tận hưởng sau những giờ làm việc mệt mỏi.
                                    </li>
                                    <li><i class="lnr lnr-checkmark-circle colored"></i>
                                        Nơi đây mang lại một cuộc sống yên ả, trái ngược với chốn phồn hoa đô thị.
                                    </li>
                                    <li><i class="lnr lnr-checkmark-circle colored"></i>
                                        Sát bên cạnh là khu du lịch Thác Giang Điền, nơi vô cùng lý tưởng cho các cuộc hội họp gia đình, bạn bè vào dịp nghỉ ngơi thư giãn.
                                    <li><i class="lnr lnr-checkmark-circle colored"></i>
                                        Và hệ thống tiện ích nội khu đa dạng Như : Công viên Viva Rosa rộng 1,3ha.
                                        Trường mẫu giáo rộng 3.093 m2, Trung tâm Y tế rộng 1.510 m2 vv….
                                    </li>
                                    <li><i class="lnr lnr-checkmark-circle colored"></i> Trung tâm tổ chức sự kiện rộng hơn
                                        2.300 m2.
                                    </li>
                                    <li><i class="lnr lnr-checkmark-circle colored"></i>
                                        Dự án Viva Park Giang Điền mang lại một không gian sống tuyệt vời cho cư dân ở đây.
                                        Ngoài trung tâm y tế, thể thao, trường học. Nơi đây còn được tích hợp trung tâm thương mại cùng các khu phố giải trí.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="row justify-content-center tiny-margin">
                        <h2 class="heading">Phân Lô Và Phối Cảnh Dự Án</h2>
                    </div>
                    <div class="row medium-margin">
                        <div class="col-md-5 feature-list animation-element fade-in-left in-view">
<!--                            <div>-->
<!--                                <h3 class="short-hr-left">Phân Lô Và Phối Cảnh Dự Án </h3>-->
<!--                            </div>-->
                                <img class="img-test" src="images/tien-ich/trang-thiet-bi/tk3.png"
                                     alt="Mẫu căn hộ B-A3">
                        </div>
                        <!-- Floor Plans Carousel -->
                        <div class="col-md-7 animation-element fade-in-right in-view">
                            <div id="custom-carousel" class="carousel slide" data-ride="carousel" data-interval="4000">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="img-fluid-test" src="images/tien-ich/trang-thiet-bi/5.jpg"
                                             alt="Mẫu căn hộ A-A1">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="img-fluid-test" src="images/tien-ich/trang-thiet-bi/tk.jpg"
                                             alt="Mẫu căn hộ A-A3">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="img-fluid-test" src="images/tien-ich/trang-thiet-bi/tk2.jpg"
                                             alt="Mẫu căn hộ A-A4">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="img-fluid-test" src="images/tien-ich/trang-thiet-bi/viva-park-mat-bang-phan-lo-1.jpg"
                                             alt="Mẫu căn hộ B-A1">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="img-fluid-test" src="images/tien-ich/trang-thiet-bi/viva-park-quy-hoach-tong-the2.jpg"
                                             alt="Mẫu căn hộ B-A3">
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#custom-carousel" role="button" data-slide="prev">
                                    <span class="prev-next-icon lnr lnr-chevron-left"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#custom-carousel" role="button" data-slide="next">
                                    <span class="prev-next-icon lnr lnr-chevron-right"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                                <ol class="carousel-indicators">
                                    <li data-target="#custom-carousel" data-slide-to="0"></li>
                                    <li data-target="#custom-carousel" data-slide-to="1"></li>
                                    <li data-target="#custom-carousel" data-slide-to="2" class="active"></li>
                                    <li data-target="#custom-carousel" data-slide-to="3"></li>
                                    <li data-target="#custom-carousel" data-slide-to="4"></li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    <a id="tienIch"></a>

                    <div class="text-center material-btn">
                        <a href="#cta-section" class=" btn btn-danger waves-effect waves-light animation-element slide-in-left">
                            LIÊN HỆ LẤY BÁO GIÁ
                        </a>
                    </div>

                </div>
            </div> <!-- /// Container End /// -->
        </div>
        <div class="container">
            <div id="thuVienHinhAnh" class="large-margin">
                <a id="thuVien"></a>
                <div class="row justify-content-center tiny-margin">
                    <h2 class="heading">Thư viện hình ảnh</h2>
                </div>
                <div class="vertical-center-4">
                        <a href="images/lib/cana3/large/1.jpg" class="lightbox-wrapper"
                               data-lightbox="c1">
                                <img src="images/add.svg" class="icon-open" alt="plus-icon">
                                <img class="img-slide-show product-image b-lazy"
                                     src="images/lib/cana3/small/1.jpg"
                                     data-src="images/lib/cana3/small/1.jpg"
                                     alt="product-img">
                        </a>
                        <a href="images/lib/cana3/large/2.jpg" class="lightbox-wrapper"
                           data-lightbox="c2">
                            <img src="images/add.svg" class="icon-open" alt="plus-icon">
                            <img class="img-slide-show product-image b-lazy"
                                 src="images/lib/cana3/small/2.jpg"
                                 data-src="images/lib/cana3/small/2.jpg"
                                 alt="product-img">
                        </a>
                        <a href="images/lib/cana3/large/6.jpg" class="lightbox-wrapper"
                           data-lightbox="c3">
                            <img src="images/add.svg" class="icon-open" alt="plus-icon">
                            <img class="img-slide-show product-image b-lazy"
                                 src="images/lib/cana3/small/6.jpg"
                                 data-src="images/lib/cana3/small/6.jpg"
                                 alt="product-img">
                        </a>

                        <a href="images/lib/cana3/large/4.jpg" class="lightbox-wrapper"
                           data-lightbox="c4">
                            <img src="images/add.svg" class="icon-open" alt="plus-icon">
                            <img class="img-slide-show product-image b-lazy"
                                 src="images/lib/cana3/small/4.jpg"
                                 data-src="images/lib/cana3/small/4.jpg"
                                 alt="product-img">
                        </a>

                        <a href="images/lib/cana3/large/5.jpg" class="lightbox-wrapper"
                           data-lightbox="c5">
                            <img src="images/add.svg" class="icon-open" alt="plus-icon">
                            <img class="img-slide-show product-image b-lazy"
                                 src="images/lib/cana3/small/5.jpg"
                                 data-src="images/lib/cana3/small/5.jpg"
                                 alt="product-img">
                        </a>
                        <a href="images/lib/canb6/large/1.jpg" class="lightbox-wrapper"
                           data-lightbox="b1">
                            <img src="images/add.svg" class="icon-open" alt="plus-icon">
                            <img class="img-slide-show product-image b-lazy"
                                 src="images/lib/canb6/small/1.jpg"
                                 data-src="images/lib/canb6/small/1.jpg"
                                 alt="product-img">
                        </a>

                        <a href="images/lib/canb6/large/2.jpg" class="lightbox-wrapper"
                           data-lightbox="b2">
                            <img src="images/add.svg" class="icon-open" alt="plus-icon">
                            <img class="img-slide-show product-image b-lazy"
                                 src="images/lib/canb6/small/2.jpg"
                                 data-src="images/lib/canb6/small/2.jpg"
                                 alt="product-img">
                        </a>
                        <a href="images/lib/canb6/large/3.jpg" class="lightbox-wrapper"
                           data-lightbox="b3">
                            <img src="images/add.svg" class="icon-open" alt="plus-icon">
                            <img class="img-slide-show product-image b-lazy"
                                 src="images/lib/canb6/small/3.jpg"
                                 data-src="images/lib/canb6/small/3.jpg"
                                 alt="product-img">
                        </a>
                        <a href="images/lib/canb6/large/4.jpg" class="lightbox-wrapper"
                           data-lightbox="b4">
                            <img src="images/add.svg" class="icon-open" alt="plus-icon">
                            <img class="img-slide-show product-image b-lazy"
                                 src="images/lib/canb6/small/4.jpg"
                                 data-src="images/lib/canb6/small/4.jpg"
                                 alt="product-img">
                        </a>
                        <a href="images/lib/canb6/large/5.jpg" class="lightbox-wrapper"
                           data-lightbox="b5">
                            <img src="images/add.svg" class="icon-open" alt="plus-icon">
                            <img class="img-slide-show product-image b-lazy"
                                 src="images/lib/canb6/small/5.jpg"
                                 data-src="images/lib/canb6/small/5.jpg"
                                 alt="product-img">
                        </a>
                        <a href="images/lib/canb6/large/6.jpg" class="lightbox-wrapper"
                           data-lightbox="b6">
                            <img src="images/add.svg" class="icon-open" alt="plus-icon">
                            <img class="img-slide-show product-image b-lazy"
                                 src="images/lib/canb6/small/6.jpg"
                                 data-src="images/lib/canb6/small/6.jpg"
                                 alt="product-img">
                        </a>
                        <a href="images/lib/view/large/1.jpg" class="lightbox-wrapper"
                           data-lightbox="v1">
                            <img src="images/add.svg" class="icon-open" alt="plus-icon">
                            <img class="img-slide-show product-image b-lazy"
                                 src="images/lib/view/small/1.jpg"
                                 data-src="images/lib/view/small/1.jpg"
                                 alt="product-img">
                        </a>
                        <a href="images/lib/view/large/5.jpg" class="lightbox-wrapper"
                           data-lightbox="b5">
                            <img src="images/add.svg" class="icon-open" alt="plus-icon">
                            <img class="img-slide-show product-image b-lazy"
                                 src="images/lib/view/small/5.jpg"
                                 data-src="images/lib/view/small/5.jpg"
                                 alt="product-img">
                        </a>
                        <a href="images/lib/view/large/6.jpg" class="lightbox-wrapper"
                           data-lightbox="b6">
                            <img src="images/add.svg" class="icon-open" alt="plus-icon">
                            <img class="img-slide-show product-image b-lazy"
                                 src="images/lib/view/small/6.jpg"
                                 data-src="images/lib/view/small/6.jpg"
                                 alt="product-img">
                        </a>
                        <a href="images/lib/view/large/1.jpg" class="lightbox-wrapper"
                           data-lightbox="v1">
                            <img src="images/add.svg" class="icon-open" alt="plus-icon">
                            <img class="img-slide-show product-image b-lazy"
                                 src="images/lib/view/small/1.jpg"
                                 data-src="images/lib/view/small/1.jpg"
                                 alt="product-img">
                        </a>
                        <a href="images/lib/view/large/2.jpg" class="lightbox-wrapper"
                           data-lightbox="v2">
                            <img src="images/add.svg" class="icon-open" alt="plus-icon">
                            <img class="img-slide-show product-image b-lazy"
                                 src="images/lib/view/small/2.jpg"
                                 data-src="images/lib/view/small/2.jpg"
                                 alt="product-img">
                        </a>

                         <a href="images/lib/thuvienhinh6.jpg" class="lightbox-wrapper"
                           data-lightbox="v4">
                            <img src="images/add.svg" class="icon-open" alt="plus-icon">
                            <img class="img-slide-show product-image b-lazy"
                                 src="images/lib/thuvienhinh6.jpg"
                                 data-src="images/lib/thuvienhinh6.jpg"
                                 alt="product-img">
                        </a>

                    <div class="slick-c-prev"><strong><span class="lnr lnr-chevron-left"></span></strong></div>
                    <div class="slick-c-next"><strong><span class="lnr lnr-chevron-right"></span></strong></div>

                </div>
            </div>
        </div>
        <div class="modal fade show" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="registerModal"  aria-modal="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header text-white">
                        <h5 class="modal-title" id="registerModal">ĐĂNG KÝ NHẬN TƯ VẤN</h5>
                        <button type="button" class="text-white close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="text-center modal-body">
                        <form class="contactForm" data-toggle="validator" method="post" data-confirm="Bạn đã điền đúng mẫu?" novalidate="true">
                            <input type="hidden" name="_token" value="9QdbgG43hqjrUStv0JnFvB4yCSMLZlcksbWGtxFu">                    <div class="form-group">
                            <!-- First Name Field -->
                            <input class="name eco-form" type="text" name="name" placeholder="Tên*" required="" size="35" data-error="Tên không được để trống">
                            <div class="help-block with-errors"></div>
                        </div>
                            <div class="form-group">
                                <!-- Phone Number Field -->
                                <input class="phone eco-form" type="tel" name="phone" placeholder="Số điện thoại*" required="" size="35" data-error="Số điện thoại không được để trống">
                                <div class="phone-error help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <!-- Email Field -->
                                <input class="email eco-form" type="email" name="email" placeholder="Email" data-error="Email không được để trống" size="35">
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <!-- Message Field -->
                                <textarea class="message" name="message" placeholder="Yêu cầu" data-error="Message cannot be empty"></textarea>
                                <div class="help-block with-errors"></div>
                                <p class="subtle">*Bắt buộc</p>
                                <!-- Submit Button -->
                                <button id="submitFormModal" type="submit" class="button disabled">ĐĂNG KÝ NGAY</button>
                                <!-- Success Message -->
                                <div class="msgSubmit colored hidden"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
            <!-- /// CTA SECTION /// -->
            <div id="cta-section">
                <div class="container">
                    <a id="cta"></a><!-- Nav Anchor -->
                    <div class="row justify-content-center tiny-margin text-center">
                        <h1 class="short-hr-center">Đăng ký nhận tư vấn</h1>
                    </div>
                    <div class="row">
                        <div class="col-md-6 text-center">
                            <form class="contactForm" data-toggle="validator" method="post" data-confirm="Bạn đã điền đúng mẫu?">
                                <input type="hidden" name="_token" value="7hkrEzu9LgYzH8sEGzf5HyjPtXN3bGAxdFPBBqRO">                    <div class="form-group">
                                <!-- First Name Field -->
                                <input class="name eco-form" type="text" id="name" name="name" placeholder="Tên*" required size="35"
                                       data-error="Tên không được để trống">
                                <div class="help-block with-errors"></div>
                            </div>
                                <div class="form-group">
                                    <!-- Phone Number Field -->
                                    <input class="phone eco-form" type="tel" id="phone" name="phone" placeholder="Số điện thoại*" required size="35"
                                           data-error="Số điện thoại không được để trống">
                                    <div class="phone-error help-block with-errors"></div>
                                </div>
                                <div class="form-group">
                                    <!-- Email Field -->
                                    <input class="email eco-form" type="email" id="email" name="email" placeholder="Email"
                                           data-error="Email không được để trống"
                                           size="35">
                                    <div class="help-block with-errors"></div>
                                </div>
                                <div class="form-group">
                                    <!-- Message Field -->
                                    <textarea class="message" id="message" name="message" placeholder="Yêu cầu"
                                              data-error="Message cannot be empty"></textarea>
                                    <div class="help-block with-errors"></div>
                                    <p class="subtle">*Bắt buộc</p>
                                    <!-- Submit Button -->
                                    <button id="findYourNewHouse2" type="submit" class="button">ĐĂNG KÝ NGAY</button>
                                    <!-- Success Message -->
                                    <div class="msgSubmit text-center hidden"></div>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-6 text-center">
                            <div class="agent-card">
                                <img src="images/logo/logo.png" class="eco-footer-logo img-fluid" alt="agent-photo">
                                <p class="agent-name short-hr-center">Đô Thị Viva Park</p>
                                <p><b>Số điện thoại:</b> <a href="tel:+84962223618">(+84) 096.222.3618</a></p>
                                <p><b>Email:</b> <a href="mailto:ngocphu3618@gmail.com" target="_top">ngocphu3618@gmail.com</a></p>
                                <p><b>Địa chỉ:</b> 147 Đường Liên Phường , P. Phước Long B , Quận 9 , TP.HCM</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="footer">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <p>Copyright <span class="eco-logo"><strong>Đô Thị Viva Park</strong></span>
                                <span id="year"> </span></p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    window.addEventListener("scroll", function(event) {
        var top = this.scrollY;
        var element = document.getElementById("myDIV");
        if(top >= 600){
            element.classList.add("scrolled");
        }else{
            element.classList.remove("scrolled");
        }
    }, false);
    import rf from '../../request/RequestFactory';
    export default {
        data(){
            return{
                message: '',
                username: '',
                phone: '',
                email: '',
            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        methods:{
            submit(){
                rf.getRequest('UserRequest').register(this.email,this.username, this.phone, this.message)
                    .then(response => {
                        this.resetForm();
                    })
                    .catch(error => {
                        alert(error)
                    });
            },
            resetForm(){
                this.phone = '';
                this.username = '';
                this.email = '';
                this.message = '';
            }
        }
    }
</script>
