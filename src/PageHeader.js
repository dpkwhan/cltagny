import React from 'react';

function findSuffix(confNum) {
  confNum = +confNum;
  const mod = confNum % 10;
  if (mod === 1) {
    return 'st';
  } else if (mod === 2) {
    return 'nd';
  } else if (mod === 3) {
    return 'rd';
  } else {
    return 'th';
  }
}

function PageHeader(props) {
  const { confNum, date, address, city } = props;
  const suffix = findSuffix(confNum);
  return (
    <div className="conference-title" style={{ background: '#001529', paddingTop: 20, paddingBottom: 20 }}>
      <h2>
        <font className="en-title">
          The {confNum}
          <sup>{suffix}</sup> New York International Conference on Chinese Teaching
        </font>
      </h2>
      <h2>
        <font className="ch-title">第{confNum}届纽约中文教学国际研讨会</font>
      </h2>
      <h3>
        <font className="ch-title">
          {date}, {address}, {city}
        </font>
      </h3>
    </div>
  );
}

export default PageHeader;
