import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

Reactotron
  .configure({ name: 'Earn It App'})
  .use(reactotronRedux())
  .connect();
