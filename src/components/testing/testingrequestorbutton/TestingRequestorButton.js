import React, { useState } from 'react';
import  TestingService from '../../../services/TestingService';

function TestingRequestorButton() {
  const testingService = new TestingService();
  const [something, setSomething] = useState(null);

  function getTester(port) {
    console.log("Hello from the tester button")
    testingService.getTesting(port)
      .then(data => {
        console.log('Receiving data', data);
        setSomething(data);
      })
  }

  return (
    <button onClick={() => getTester('9100')}>
      REQUESTOR BUTTON. DELETE ME FOR PROD RELEASES {something}
    </button>
  );
}

export default TestingRequestorButton;
