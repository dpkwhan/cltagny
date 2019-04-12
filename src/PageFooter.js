import React from 'react';
import { Layout, Icon } from 'antd';
import './PageFooter.css';
const { Footer } = Layout;

function PageFooter(props) {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <Footer className="page-footer" style={{ textAlign: 'center' }}>
      <span>
        Copyright <Icon type="copyright" /> {year}
      </span>
      <br />
      <span>
        <a href="http://www.dpkwhan.com">KW Web Solutions</a>
      </span>
    </Footer>
  );
}

export default PageFooter;
