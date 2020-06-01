import React from "react";
import { Typography} from 'antd';
import { withRouter } from "react-router-dom";
const { Title } = Typography;


function loginpage() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
        <Title level={2} >LoginPage Test</Title>
      </div>
    </div>
  )
}

export default withRouter(loginpage);