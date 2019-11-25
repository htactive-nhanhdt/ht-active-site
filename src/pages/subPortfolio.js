import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
 

import SubSlider from "../components/Portfolio/sliderSubPortfolio"
 
class subPortfolio extends React.Component {
  constructor() {
    super()
    this.state = {
      openTab: false,
    }
  }
  handleOpenTab(value) {
    this.setState({
      openTab: value,
    })
  }
  render() {
    let { openTab } = this.state
 
    return (
      <Layout>
        <SEO title="Portfolio" />
        <div className="page-intro">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ol className="breadcrumb">
                  <li>
                    <i className="fa fa-home pr-10" />
                    <a href="products">Web Application</a>
                  </li>
                  <li className="active">Site HT Active</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
 
        <section className="main-container" style={{ marginTop: "0px" }}>
          <div className="container">
            <div className="row">
              {/* main start */}
              {/* ================ */}
              <div className="main col-md-12">
                {/* page-title start */}
                {/* ================ */}
                <h1 className="page-title margin-top-clear">Site HT Active</h1>
                {/* page-title end */}
                <div className="row">
                  <div className="col-md-4">
                    {/* Nav tabs */}
                    <ul
                      className="nav nav-pills white space-top"
                      role="tablist"
                    >
                      <li>
                        <button title="images" className="active">
                          <i className="fa fa-camera pr-2" />
                          Image
                        </button>
                      </li>
                      <li>
                        <button title="video">
                          <i className="fa fa-video-camera pr-2" />
                          Video
                        </button>
                      </li>
                    </ul>
                    {/* Tab panes start*/}
                    <div className="tab-content clear-style">                     
                     <SubSlider/>
                      <div className="tab-pane" id="product-video">
                        <div className="embed-responsive embed-responsive-16by9"></div>
                      </div>
                    </div>
                    {/* Tab panes end*/}
                    <hr />
                  </div>
                  {/* product side start */}
                  <aside className="col-md-8">
                    <div className="sidebar">
                      <div className="side product-item vertical-divider-left">
                        <div className="tabs-style-2">
                          {/* Nav tabs */}
                          <ul className="nav nav-tabs" role="tablist">
                            <li>
                              <button
                                onClick={() => this.handleOpenTab(false)}
                                className={`btn ${
                                  openTab ? "" : "btn-default"
                                }`}
                              >
                                <i className="fa fa-file-text-o pr-3" />
                                Product
                              </button>
                            </li>
                            <li>
                              <button
                                onClick={() => this.handleOpenTab(true)}
                                className={`btn ${
                                  openTab ? "btn-default" : ""
                                }`}
                              >
                                <i className="fa fa-files-o pr-3" />
                                Description
                              </button>
                            </li>
                          </ul>
                          {/* Tab panes */}
                          <div className="tab-content padding-top-clear padding-bottom-clear">
                            {openTab === false && (
                              <div
                                className="tab-pane fade in active"
                                id="h2tab1"
                              >
                                <h4 className="title">Information</h4>
                                <p>
                                  Website to advertise and show our business,
                                  with services, projects and portfolios.{" "}
                                </p>
                                <h4 className="title">Technology</h4>
                                <p>Asp.Net core 2.0, MySQL, Bootstraps</p>
                              </div>
                            )}
                            {openTab === true && (
                              <div className="tab-pane">
                                <h4 className="space-top">
                                  HT Active Description
                                </h4>
                                <hr />
                                <dl className="dl-horizontal">
                                  <dt>Backend</dt>
                                  <dd>ASP.Net core 2.0</dd>
                                  <dt>Database</dt>
                                  <dd>MySQL, EF Core code first</dd>
                                  <dt>Frontend</dt>
                                  <dd>Razor view, JQuery, Bootstraps</dd>
                                </dl>
                                <hr />
                              </div>
                            )}
 
                            <div className="tab-pane fade" id="h2tab3">
                              {/* comments start */}
                              <div className="comments margin-clear space-top"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </aside>
                  {/* product side end */}
                </div>
              </div>
              {/* main end */}
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
export default subPortfolio
 
