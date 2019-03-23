import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Card } from 'antd';

import joinus from './joinus.jpg';
import login from './login.jpg';
import conference from './conference.jpg';

const { Content } = Layout;

function Home() {
  return (
    <Fragment>
      <Layout>
        <Content style={{ padding: 0 }}>
          <div style={{ background: '#fff', padding: 10, minHeight: 280 }}>
            <Row type="flex" justify="center" align="bottom">
              <Col xs={24} sm={12} md={6} lg={6} xl={4} style={{ padding: 10 }}>
                <Link to="signup">
                  <Card cover={<img alt="joinus" src={joinus} height={200} />}>
                    <div className="center">
                      <p />
                      <p>Sign up | 成为会员</p>
                      <p />
                    </div>
                  </Card>
                </Link>
              </Col>
              <Col xs={24} sm={12} md={6} lg={6} xl={4} style={{ padding: 10 }}>
                <Link to="login">
                  <Card cover={<img alt="login" src={login} height={200} />}>
                    <div className="center">
                      <p />
                      <p>Sign in | 登录账户</p>
                      <p />
                    </div>
                  </Card>
                </Link>
              </Col>
              <Col xs={24} sm={12} md={6} lg={6} xl={4} style={{ padding: 10 }}>
                <Link to="register">
                  <Card cover={<img alt="conference" src={conference} height={200} />}>
                    <div className="center">
                      <p />
                      <p>Register | 报名参会</p>
                      <p />
                    </div>
                  </Card>
                </Link>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </Fragment>
  );
}

export default Home;
