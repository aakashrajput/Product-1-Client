const Navbar = () => {
  return (
    <header className="header header--absolute header--transparent" id="site-header">
        <div className="container">
          <div className="header-content-wrapper">
            <a href="index.html" className="site-logo">
              <img className="puzzle-icon" src="assets/img/svg/01_logo_white.svg" alt="logo" width="120" />
            </a>

            <nav id="primary-menu" className="primary-menu">
              <a href='javascript:void(0)' id="menu-icon-trigger" className="menu-icon-trigger showhide">
                <span className="mob-menu--title">Menu</span>
                <span id="menu-icon-wrapper" className="menu-icon-wrapper">
                  <svg width="1000px" height="1000px">
                    <path id="pathD" d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"></path>
                    <path id="pathE" d="M 300 500 L 700 500"></path>
                    <path id="pathF" d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"></path>
                  </svg>
                </span>
              </a>

              <ul className="primary-menu-menu">
                <li>
                  <a href="index.html">Home</a>
                </li>

                <li className="">
                  <a href="02_how_it_works.html">How it Works</a>
                </li>

                <li className="menu-item-has-children">
                  <a href="index.html#">Employers
                    <span className="show indicator">
                      <i className="puzzle-icon far fa-angle-down"></i>
                    </span>
                  </a>

                  <ul className="sub-menu">

                    <li>
                      <a href="03_job_lists_row_map.html">Job lists</a>
                    </li>

                    <li>
                      <a href="04_job_lists_grid.html">Job lists grid</a>
                    </li>

                    <li>
                      <a href="05_job_details.html">Job details</a>
                    </li>

                    <li>
                      <a href="06_company_profile.html">Company profile</a>
                    </li>

                    <li>
                      <a href="07_company_lists_alphabet.html">Company lists</a>
                    </li>

                  </ul>
                </li>

                <li className="menu-item-has-children">
                  <a href="index.html#">Candidates
                    <span className="show indicator">
                      <i className="puzzle-icon far fa-angle-down"></i>
                    </span>
                  </a>
                  <ul className="sub-menu">

                    <li>
                      <a href="08_candidate_lists_row_map.html">Candidate lists</a>
                    </li>

                    <li>
                      <a href="09_candidate_lists_grid.html">Candidate lists grid</a>
                    </li>

                    <li>
                      <a href="10_candidate_details.html">Candidate details</a>
                    </li>

                    <li>
                      <a href="11_submit_resume.html">Submit resume</a>
                    </li>

                    <li>
                      <a href="12_resume_preview.html">Resume preview</a>
                    </li>

                    <li>
                      <a href="13_resume_added.html">Resume added</a>
                    </li>

                  </ul>
                </li>

                <li className="menu-item-has-children">
                  <a href="index.html#">News
                    <span className="show indicator">
                      <i className="puzzle-icon far fa-angle-down"></i>
                    </span>
                  </a>
                  <ul className="sub-menu">

                    <li>
                      <a href="15_news_grid.html">News page</a>
                    </li>

                    <li>
                      <a href="16_standard_news_with_sidebar.html">Standard news with sidebar</a>
                    </li>

                    <li>
                      <a href="17_news_details_standard.html">News details standard</a>
                    </li>

                    <li>
                      <a href="18_news_details_gallery.html">News details gallery</a>
                    </li>

                    <li>
                      <a href="19_news_details_with_video.html">News details with video</a>
                    </li>

                  </ul>
                </li>

                <li className="menu-item-has-mega-menu menu-item-has-children">
                  <a href="index.html#">Pages
                    <span className="show indicator">
                      <i className="puzzle-icon far fa-angle-down"></i>
                    </span>
                  </a>
                  <div className="megamenu">
                    <div className="megamenu-row">

                      <div className="col3">
                        <ul>
                          <li className="megamenu-item-info">
                            <h6 className="megamenu-item-info-title">Pages</h6>
                          </li>
                          <li>
                            <a href="14_pricing_plan.html"><i className="puzzle-icon fas fa-caret-right"></i>Pricing plans</a>
                          </li>
                          <li>
                            <a href="20_contacts.html"><i className="puzzle-icon fas fa-caret-right"></i>Contacts</a>
                          </li>
                          <li>
                            <a target="_blank" href="21_send_message.html"><i className="puzzle-icon fas fa-caret-right"></i>Send message</a>
                          </li>
                          <li>
                            <a href="23_coming_soon.html"><i className="puzzle-icon fas fa-caret-right"></i>Coming Soon Page</a>
                          </li>
                          <li>
                            <a href="22_404.html"><i className="puzzle-icon fas fa-caret-right"></i>Error 404</a>
                          </li>
                          <li>
                            <a target="_blank" href="41_sign_up.html"><i className="puzzle-icon fas fa-caret-right"></i>Sign Up</a>
                          </li>
                          <li>
                            <a target="_blank" href="40_login.html"><i className="puzzle-icon fas fa-caret-right"></i>Login</a>
                          </li>
                        </ul>
                      </div>

                      <div className="col3">
                        <ul>
                          <li className="megamenu-item-info">
                            <h6 className="megamenu-item-info-title">Classic Styles</h6>
                          </li>
                          <li>
                            <a href="33_classic_accordions.html"><i className="puzzle-icon fas fa-caret-right"></i>Accordions</a>
                          </li>
                          <li>
                            <a href="34_classic_button_styles.html"><i className="puzzle-icon fas fa-caret-right"></i>Button Styles</a>
                          </li>
                          <li>
                            <a href="35_classic_forms.html"><i className="puzzle-icon fas fa-caret-right"></i>Forms</a>
                          </li>
                          <li>
                            <a href="36_classic_icon_with_text.html"><i className="puzzle-icon fas fa-caret-right"></i>Icon with Text</a>
                          </li>
                          <li>
                            <a href="38_classic_link_styles.html"><i className="puzzle-icon fas fa-caret-right"></i>Link Styles</a>
                          </li>
                          <li>
                            <a href="37_classic_tab_styles.html"><i className="puzzle-icon fas fa-caret-right"></i>Tab Styles</a>
                          </li>
                        </ul>
                      </div>

                      <div className="col3">
                        <ul>
                          <li className="megamenu-item-info">
                            <h6 className="megamenu-item-info-title">Typography</h6>
                          </li>
                          <li>
                            <a href="29_typography_heading_styles.html"><i className="puzzle-icon fas fa-caret-right"></i>Heading Styles</a>
                          </li>
                          <li>
                            <a href="30_typography_highlights.html"><i className="puzzle-icon fas fa-caret-right"></i>Highlights</a>
                          </li>
                          <li>
                            <a href="32_typography_blockquotes.html"><i className="puzzle-icon fas fa-caret-right"></i>Blockquotes</a>
                          </li>
                          <li>
                            <a href="28_typography_columns.html"><i className="puzzle-icon fas fa-caret-right"></i>Columns</a>
                          </li>
                          <li>
                            <a href="31_typography_lists.html"><i className="puzzle-icon fas fa-caret-right"></i>Lists</a>
                          </li>
                          <li>
                            <a href="43_typography-icons.html"><i className="puzzle-icon fas fa-caret-right"></i>Icons</a>
                          </li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </li>
              </ul>

            </nav>

            <nav className="login-menu">
              <ul>
                <li>
                  <a href="index.html#" data-toggle="modal" data-target="#signupModal">Sign Up</a>
                </li>
                <li>
                  <button type="button" className="crumina-button button--primary button--s button--hover-primary" data-toggle="modal" data-target="#loginModal">Login</button>
                </li>
              </ul>
            </nav>

            <select className="puzzle--select language-switcher" data-minimum-results-for-search="Infinity" data-dropdown-css-class="language-switcher-dropdown">
              <option value="Ua" data-href="">Ua</option>
              <option value="En" data-href="">En</option>
              <option value="Fr" data-href="">Fr</option>
              <option value="De" data-href="">De</option>
              <option value="It" data-href="">It</option>
            </select>

          </div>
        </div>
      </header>
  );
};


export default Navbar;