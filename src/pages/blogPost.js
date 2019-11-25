import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
const blogPost = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <section className="main-container">
        <div className="container">
          <div className="row">
            {/* main start */}
            {/* ================ */}
            <div className="main col-md-8">
              {/* page-title start */}
              {/* ================ */}
              <h1 className="page-title">
                Những Material component tuyệt vời trong React Native.
              </h1>
              {/* page-title end */}
              {/* blogpost start */}
              <article className="clearfix blogpost full">
                <div className="blogpost-body">
                  <div className="side">
                    <div className="post-info">
                      <span className="day">15</span>
                      <span className="month">Jun 2018</span>
                    </div>
                    <div id="affix" className="affix-top">
                      <span className="share">Share this</span>
                      <div id="share" className="sharrre">
                        <ul className="social-links clearfix">
                          <li className="facebook">
                            <a href="/">
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li className="twitter">
                            <a href="/"> 
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li className="googleplus">
                            <a href="/">
                              <i className="fa fa-google-plus" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="blogpost-content">
                    <header>
                      <div className="submitted">
                        <i className="fa fa-user pr-5" /> by{" "}
                        <a href="/">Mạnh Nguyễn</a>
                      </div>
                    </header>
                    Ngày đầu tiên khi mình tiếp cận React Native là năm 2016,
                    tại thời điểm này, việc implement một giao diện người dùng
                    đẹp đẽ, thân thiện thật sự là rất khó khăn. React và React
                    Native ra đời để hỗ trợ việc render giao diện chứ không hỗ
                    trợ lập trình viên cũng như nhà phát triển ứng dụng để họ có
                    thể tối ưu hóa UI/UX trên giao diện của họ. Thời điểm đó,
                    gần như không có library, toolkit hoặc các thứ tương tự để
                    xây dựng giao diện. Tuy nhiên theo thời gian, mọi thứ đã
                    thay đổi, hôm nay React có thể đã được xem như là một trend,
                    một xu hướng của front-end, và theo đó lần lượt các thư
                    viện, các toolkit về UI/UX ra đời (cả cho ReactJS và
                    ReactNative).
                    <br />
                    Riêng về React Native thì đến ngày hôm nay, có rất nhiều
                    UI/UX toolkit ra đời và hỗ trợ rất nhiều cho developer.
                    Chúng ta chỉ đơn giản cài đặt, sử dụng và làm theo hướng dẫn
                    trong các toolkit này thì sẽ có một giao diện đẹp mắt và
                    thân thiện. Vấn đề của toolkit là nó quá lớn, quá cồng kềnh
                    và khó custom. Đọc đến đây có thể một vài bạn sẽ không đồng
                    ý và cho rằng hoàn toàn có thể custom được những toolkit này
                    vì nó là open source. Okay fine! trong thời buổi open source
                    này, cái gì cũng custom được, mình đồng ý. Tuy nhiên trong
                    giới hạn của bài viết này, mình sẽ không đề cập đến các
                    toolkit mà sẽ giới thiệu các library UI trong React Native
                    theo thiên hướng Material design để các bạn có thể dễ dàng
                    integrate và sử dụng.
                    <br />
                    Những thư viện bên dưới theo mình đánh giá là nhỏ, nhẹ, dễ
                    dàng quản lý và đặc biệt là vẫn đang được maintenance tính
                    đến thời điểm bài viết này được viết (tháng 6 năm 2018).
                    <br />
                    <h3>1. react-native-material-bottom-navigation</h3>
                    <br />
                    Thư viện này hỗ trợ cho mình một cái bottom navigation theo
                    thiên hướng Material design cực kì đẹp mắt và "chuẩn cơm mẹ
                    nấu".
                    <br />
                    <img
                      src="https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/bottom-navigation.png"
                      alt="bottom-navigation-example"
                    />
                    <br />
                    <img
                      src="https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/bottom-navigation-1.gif"
                      alt="bottom-navigation-example"
                    />
                    <br />
                    <img
                      src="https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/bottom-navigation-2.gif"
                      alt="bottom-navigation-example"
                    />
                    <br />
                    <img
                      src="https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/bottom-navigation-3.gif"
                      alt="bottom-navigation-example"
                    />
                    <br />
                    Nó là thuần javascript, không sử dụng native, đơn giản dễ
                    cài đặt, dễ sử dụng. Hơn nữa, hiện tại nó là một standalone
                    library, có thể sử dụng chung với các library về router hoặc
                    navigator tùy sở thích.
                    <br />
                    Link github:{" "}
                    <a href="https://github.com/timomeh/react-native-material-bottom-navigation">
                      https://github.com/timomeh/react-native-material-bottom-navigation
                    </a>
                    <br />
                    <h3>2. react-native-snap-carousel</h3>
                    <br />
                    Mình từng dùng và biết cũng cơ số những component như này
                    trong ReactNative. Nhìn chung thì chúng đều ổn và chạy OK.
                    Nhưng thư viện này thật sự gây ấn tượng khá tốt với cá nhân
                    mình. Cũng chẳng biết phải giải thích như thế nào, thôi thì
                    upload vài cái ảnh gif lên đây để các bạn cùng đánh giá.
                    <br />
                    <img
                      src="https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/snap-carousel-1.gif"
                      alt="snap-carousel"
                    />
                    <br />
                    <img
                      src="https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/snap-carousel-2.gif"
                      alt="snap-carousel"
                    />
                    <br />
                    <img
                      src="https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/snap-carousel-3.gif"
                      alt="snap-carousel"
                    />
                    <br />
                    Trong các ứng dụng thực tế:
                    <br />
                    <img
                      src="https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/snap-carousel-4.gif"
                      alt="snap-carousel"
                    />
                    <br />
                    <img
                      src="https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/snap-carousel-5.gif"
                      alt="snap-carousel"
                    />
                    <br />
                    <img
                      src="https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/snap-carousel-6.gif"
                      alt="snap-carousel"
                    />
                    <br />
                    Thư viện này hiện đang được bảo trì và support khá tốt từ
                    nhóm phát triển, nó hiện đang sử dụng flatlist và lazy load
                    nên trông rất mượt mà về performance. Example của thư viện
                    này là một cái app hoàn chỉnh, các bạn có thể xem và học hỏi
                    các component khác trong example đó.
                    <br />
                    Link github:{" "}
                    <a href="https://github.com/archriss/react-native-snap-carousel">
                      https://github.com/archriss/react-native-snap-carousel
                    </a>
                    <br />
                    <h3>3. react-native-material-dropdown</h3>
                    <br />
                    Bạn đang tìm kiếm một component drop-down có dáng dấp của
                    native? Yeah, bạn đến đúng chỗ rồi đấy!!! Thư viện này cung
                    cấp một drop-down component mà thích hợp cho cả IOS và
                    Android cả về UI, UX. Cá nhân mình đảm bảo rằng các bạn sẽ
                    thích nó khi sử dụng.
                    <br />
                    <img
                      src="https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/dropdown-material.gif"
                      alt="dropdown-material"
                    />
                    <br />
                    Link github:{" "}
                    <a href="https://github.com/n4kz/react-native-material-dropdown">
                      https://github.com/n4kz/react-native-material-dropdown
                    </a>
                    <br />
                    <h3>4. react-native-material-textfield</h3>
                    <br />
                    Cũng đến từ cùng một nhà phát triển với dropdown ở trên, thư
                    viện này cho ta các components input theo đúng chuẩn
                    Material design
                    <br />
                    <img
                      src="https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/input.gif"
                      alt="input"
                    />
                    <br />
                    Link github:{" "}
                    <a href="https://github.com/n4kz/react-native-material-textfield">
                      https://github.com/n4kz/react-native-material-textfield
                    </a>
                    <br />
                    <h3>5. react-native-material-menu</h3>
                    <br />
                    Dự án của bạn đang cần implement một cái button mà khi bấm
                    vào đó sẽ có 1 cái menu overflow hiện ra và bạn đang đi tìm
                    thư viện cho nó? Yeah, nó đây chứ đâu !!! Mô tả nhiều thì
                    lan man, đại khái nó là pure javascript, không có native
                    module, có animation đẹp và có support ripple. Tóm lại là
                    nhìn như native :)
                    <br />
                    <img
                      src="https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/menu.gif"
                      alt="menu"
                    />
                    <br />
                    Link github:{" "}
                    <a href="https://github.com/mxck/react-native-material-menu">
                      https://github.com/mxck/react-native-material-menu
                    </a>
                    <br />
                    <h3>6. react-native-snackbar</h3>
                    <br />
                    Nếu bạn đang tìm kiếm một component cho snack bar hoặc toast
                    đơn giản dể dùng, không cần phải render trong hàm render, có
                    thể dễ dàng gọi ra ở bất cứ đâu trong code (sau một callback
                    api, hoặc một action sagas) thì bạn sẽ cần thư viện này.
                    <br />- Không cần thêm trong hàm render.
                    <br />- Dễ dàng invoke trong business logic.
                    <br />
                    <code>
                      Snackbar.show({"{"}
                      <br />
                      title: 'Hello world',
                      <br />
                      duration: Snackbar.LENGTH_SHORT,
                      <br />
                      {"}"});
                      <br />
                    </code>
                    <br />
                    Trên đây là một số thư viện khá hay về UI mà mình muốn giới
                    thiệu, vẫn còn một số nữa nhưng mà bài viết có vẻ dài quá
                    rồi. Hẹn gặp lại ở phần 2 nhé!
                  </div>
                </div>
              </article>
              {/* blogpost end */}
            </div>
            {/* main end */}
            {/* sidebar start */}
            <aside className="col-md-3 col-md-offset-1">
              <div className="sidebar">
                <div className="block clearfix">
                  <h3 className="title">Related posts</h3>
                  <div className="separator" />
                  <div className="image-box">
                    <div className="overlay-container">
                      <img
                        src="https://www.techworm.net/wp-content/uploads/2018/03/wc-swift.jpg"
                        alt=""
                      />
                      <div className="overlay">
                        <div className="overlay-links">
                          <a
                            href="https://www.techworm.net/wp-content/uploads/2018/03/wc-swift.jpg"
                            className="popup-img-single"
                            title="image title"
                          >
                            <i className="fa fa-search-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="image-box-body">
                      <h3 className="title">
                        <a href="news-detail/1/hello-world-voi-swift">
                          Hello World với Swift
                        </a>
                      </h3>
                      <p>
                        Hôm nay mình sẽ hướng dẫn các bạn viết chương trình
                        Hello World sử dụng Swift. Để bắt đầu, chúng ta sẽ viết
                        1 chương trình đơn giản như sau ...
                      </p>
                      <a
                        href="news-detail/1/hello-world-voi-swift"
                        className="link"
                      >
                        <span>Read more</span>
                      </a>
                    </div>
                  </div>
                  <div className="image-box">
                    <div className="overlay-container">
                      <img
                        src="https://scontent.fdad3-2.fna.fbcdn.net/v/t31.0-0/p180x540/14054324_10154624375358984_2240899986652458346_o.jpg?oh=53816cd88c9c9eb2305b12fd8bcbd1de&oe=5A46DDF2"
                        alt=""
                      />
                      <div className="overlay">
                        <div className="overlay-links">
                          <a
                            href="https://scontent.fdad3-2.fna.fbcdn.net/v/t31.0-0/p180x540/14054324_10154624375358984_2240899986652458346_o.jpg?oh=53816cd88c9c9eb2305b12fd8bcbd1de&oe=5A46DDF2"
                            className="popup-img-single"
                            title="image title"
                          >
                            <i className="fa fa-search-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="image-box-body">
                      <h3 className="title">
                        <a href="news-detail/2/huong-dan-assembly-64-bit">
                          Hướng dẫn Assembly 64bit.
                        </a>
                      </h3>
                      <p>
                        Suốt hàng ngàn năm, con người đã sử dụng các ngôn ngữ
                        lập trình để bắt máy tính phải “hiểu" mình và làm theo
                        mệnh lệnh của mình. Các bạn đừng bị thầy cô lừa dối, bởi
                        vì máy tính vốn chỉ hiểu một ngôn ngữ duy nhất, đó là
                        ngôn ngữ máy (machine code).
                      </p>
                      <a
                        href="news-detail/2/huong-dan-assembly-64-bit"
                        className="link"
                      >
                        <span>Read more</span>
                      </a>
                    </div>
                  </div>
                  <div className="image-box">
                    <div className="overlay-container">
                      <img
                        src="https://scontent.fdad3-2.fna.fbcdn.net/v/t31.0-0/p180x540/14054324_10154624375358984_2240899986652458346_o.jpg?oh=53816cd88c9c9eb2305b12fd8bcbd1de&oe=5A46DDF2"
                        alt=""
                      />
                      <div className="overlay">
                        <div className="overlay-links">
                          <a
                            href="https://scontent.fdad3-2.fna.fbcdn.net/v/t31.0-0/p180x540/14054324_10154624375358984_2240899986652458346_o.jpg?oh=53816cd88c9c9eb2305b12fd8bcbd1de&oe=5A46DDF2"
                            className="popup-img-single"
                            title="image title"
                          >
                            <i className="fa fa-search-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="image-box-body">
                      <h3 className="title">
                        <a href="news-detail/3/huong-dan-assembly-64-bit-bai-2">
                          Hướng dẫn Assembly 64bit - Bài 2.
                        </a>
                      </h3>
                      <p>
                        Tiếp theo bài trước, sau khi các bác đã có 1 chương
                        trình hoàn chỉnh hiển thị dòng chữ “Hello World!”, bài
                        này sẽ hướng dẫn các bạn viết một hàm hoàn chỉnh trong
                        assembly nhằm mục đích mô-đun hoá ứng dụng.
                      </p>
                      <a
                        href="news-detail/3/huong-dan-assembly-64-bit-bai-2"
                        className="link"
                      >
                        <span>Read more</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            {/* sidebar end */}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default blogPost
