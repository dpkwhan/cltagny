import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Card, Icon } from 'antd';

import joinus from './joinus.jpg';
import login from './login.jpg';
import conference from './conference.jpg';

const { Footer, Content } = Layout;
const { Meta } = Card;

function Home() {
  return (
    <Fragment>
      <Layout>
        <Content style={{ padding: 0 }}>
          <div style={{ background: '#fff', padding: 10, minHeight: 280 }}>
            <Row type="flex" justify="center" align="bottom">
              <Col xs={24} sm={12} md={6} lg={6} xl={4} style={{ padding: 10 }}>
                <Link to="signup">
                  <Card style={{ height: 300 }} cover={<img alt="joinus" src={joinus} height={200} />}>
                    <Meta avatar={<Icon type="user-add" style={{ fontSize: '24px' }} />} title="Sign up | 开通账户" />
                  </Card>
                </Link>
              </Col>
              <Col xs={24} sm={12} md={6} lg={6} xl={4} style={{ padding: 10 }}>
                <Link to="login">
                  <Card style={{ height: 300 }} cover={<img alt="login" src={login} height={200} />}>
                    <Meta avatar={<Icon type="login" style={{ fontSize: '24px' }} />} title="Sign in | 登录账户" />
                  </Card>
                </Link>
              </Col>
              <Col xs={24} sm={12} md={6} lg={6} xl={4} style={{ padding: 10 }}>
                <Link to="register">
                  <Card style={{ height: 300 }} cover={<img alt="conference" src={conference} height={200} />}>
                    <Meta avatar={<Icon type="schedule" style={{ fontSize: '24px' }} />} title="Register | 报名参会" />
                  </Card>
                </Link>
              </Col>
            </Row>
          </div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          <span>
            Copyright <Icon type="copyright" /> 2019
          </span>
          <br />
          <span>
            <a href="http://www.dpkwhan.com">KW Web Solutions</a>
          </span>
        </Footer>
      </Layout>
    </Fragment>
  );
}

export default Home;
