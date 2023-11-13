import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Toolbar from './pages/Toolbar/Toolbar';
import Location from './pages/Location/Location';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path='/tab1'>
          <Tab1 />
        </Route>
        <Route exact path='/tab2'>
          <Tab2 />
        </Route>
        <Route path='/tab3'>
          <Tab3 />
        </Route>
        <Route path='/toolbar'>
          <Toolbar />
        </Route>
        <Route path='/location'>
          <Location />
        </Route>
        <Route exact path='/'>
          <Redirect to='/tab1' />
        </Route>
      </IonRouterOutlet>
      {/* <IonTabs>
        <IonRouterOutlet>
          <Route exact path='/tab1'>
            <Tab1 />
          </Route>
          <Route exact path='/tab2'>
            <Tab2 />
          </Route>
          <Route path='/tab3'>
            <Tab3 />
          </Route>
          <Route path='/toolbar'>
            <Toolbar />
          </Route>
          <Route path='/location'>
            <Location />
          </Route>
          <Route exact path='/'>
            <Redirect to='/tab1' />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot='bottom'>
          <IonTabButton tab='toolbar' href='/toolbar'>
            <IonIcon aria-hidden='true' icon={triangle} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab='location' href='/location'>
            <IonIcon aria-hidden='true' icon={ellipse} />
            <IonLabel>Location</IonLabel>
          </IonTabButton>
          <IonTabButton tab='tab3' href='/tab3'>
            <IonIcon aria-hidden='true' icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs> */}
    </IonReactRouter>
  </IonApp>
);

export default App;
