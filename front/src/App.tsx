import Container from './ui/Container';

import WebSockets from './pages/WebSockets';
import LongPolling from './pages/LongPolling';
import EventSource from './pages/EventSource';

const App = () => (
  <Container>
    <LongPolling />
    {/* <EventSource /> */}
    {/* <WebSockets /> */}
  </Container>
);

export default App;
