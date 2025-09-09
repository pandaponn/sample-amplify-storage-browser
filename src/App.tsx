import {
  createAmplifyAuthAdapter,
  createStorageBrowser,
} from '@aws-amplify/ui-react-storage/browser';
import '@aws-amplify/ui-react-storage/styles.css';
import './App.css';

import config from '../amplify_outputs.json';
import { Amplify } from 'aws-amplify';
import { Authenticator, Button } from '@aws-amplify/ui-react';
Amplify.configure(config);

const { StorageBrowser } = createStorageBrowser({
  config: createAmplifyAuthAdapter(),
});

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <>
          <div className="header">
            <div className="header-left">
              <img src="https://www.mandainature.org/content/dam/mandai-nature/resources/en/img/mandai-nature-full.svg" alt="Logo" className="logo" />
              <h1>{`Hello ${user?.username}`}</h1>
            </div>
            <Button onClick={signOut}>Sign out</Button>
          </div>
          <StorageBrowser />
        </>
      )}
    </Authenticator>
  );
}

export default App;
