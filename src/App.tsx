import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonButton ,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonNavLink
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Login from './pages/Login';

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

const Main = () => (
  <IonApp>

  <IonContent>
    <IonGrid className="body-app">

      <IonRow className="header" style={{height:"5%", background:"#A8AEB1"}}>
        <IonCol className="name">Welcome, Rahadyan</IonCol>
        <IonCol className="logout">
          <IonButton href="/login">Logout</IonButton>
        </IonCol>
      </IonRow>

      <IonRow style={{height:"95%"}}>

        <IonCol style={{display:(window.location.pathname=='/login')?'':'none'}}>
          <IonReactRouter>
            <Route exact path="/login">
              <Login />
            </Route>
          </IonReactRouter>
        </IonCol>

        {console.log(window.location.pathname)}

        <IonCol style={{display:(window.location.pathname=='/login')?'none':''}}>
          <IonReactRouter>
            <IonTabs>
            <IonButton>Default</IonButton>
              <IonRouterOutlet>
                <Route exact path="/tab1">
                  <Tab1 />
                </Route>
                <Route exact path="/tab2">
                  <Tab2 />
                </Route>
                <Route exact path="/tab3">
                  <Tab3 />
                </Route>
                <Route exact path="/">
                  <Redirect to="/tab1" />
                </Route>
              </IonRouterOutlet>

              <IonTabBar slot="bottom">
                <IonTabButton tab="tab1" href="/tab1">
                  <IonLabel>Badminton</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href="/tab2">
                  <IonLabel>Ping Pong</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab3" href="/tab3">
                  <IonLabel>Bola</IonLabel>
                </IonTabButton>
              </IonTabBar>

            </IonTabs>
          </IonReactRouter>
        </IonCol>
      </IonRow>

    </IonGrid>
  </IonContent>

  </IonApp>
);

export default Main;
