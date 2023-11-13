import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { notificationsOutline, accessibilityOutline } from 'ionicons/icons';
import Olympia from '../../assets/images/Screenshot 2023-11-13 at 10.53.51.png';
import './Toolbar.css';

const Tab1: React.FC = () => {
  return (
    <IonPage
      style={{
        paddingLeft: 10,
        paddingRight: 10,
        background: 'rgba(17,35,48)',
      }}
    >
      <IonHeader class='ion-head-color'>
        <IonGrid>
          <IonRow>
            <IonToolbar class='ion-head-color ion-color'>
              <IonButtons slot='start'>
                <IonButton>
                  Welcome <br /> Bella!
                </IonButton>
              </IonButtons>
              <IonButtons slot='end'>
                <IonButton>
                  <IonIcon icon={notificationsOutline} />
                </IonButton>
                <IonAvatar
                  style={{ background: 'red', width: '40px', height: '40px' }}
                >
                  <img
                    alt="Silhouette of a person's head"
                    src='https://ionicframework.com/docs/img/demos/avatar.svg'
                  />
                </IonAvatar>
              </IonButtons>
            </IonToolbar>
          </IonRow>
        </IonGrid>
      </IonHeader>

      <IonContent class='back' fullscreen>
        <IonGrid>
          <IonRow>
            <div style={{ display: 'flex' }}>
              <IonCol
                style={{ display: 'flex', gap: 1, alignItems: 'center' }}
                size='10'
              >
                <IonButton color='white' shape='round'>
                  <IonIcon color='white' icon={accessibilityOutline} />
                </IonButton>
                <IonText color='light'>
                  Running pals <br /> Event of the month
                </IonText>
              </IonCol>
              <IonCol>
                <IonButton
                  style={{ fontSize: '11px' }}
                  color='light'
                  shape='round'
                >
                  <IonText>Join</IonText>
                </IonButton>
              </IonCol>
            </div>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <img style={{ width: '100%', borderRadius: 30 }} src={Olympia} />
            <div className='mozaik-card'></div>
            <div className='mozaik-card'></div>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <div className='info-card'>
              <div style={{ width: '100%' }}>
                <div
                  style={{
                    display: 'flex',
                    height: 50,
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    width: '100%',
                  }}
                >
                  <div style={{ display: 'flex', gap: 5, height: '100px' }}>
                    <IonAvatar
                      style={{
                        background: 'red',
                        width: '40px',
                        height: '40px',
                      }}
                    >
                      <img
                        alt="Silhouette of a person's head"
                        src='https://ionicframework.com/docs/img/demos/avatar.svg'
                      />
                    </IonAvatar>
                    <IonText>
                      WRO <br /> You are interested
                    </IonText>
                  </div>
                  <IonButton
                    style={{ fontSize: 11 }}
                    fill='outline'
                    shape='round'
                    color='dark'
                  >
                    <b>Join</b>
                  </IonButton>
                </div>

                <IonText>International Event</IonText>
              </div>

              <div className='participant-box'>
                <IonText>Participant are allowed to bring their pets</IonText>
              </div>

              <IonRow style={{ width: '100%' }}>
                <IonCol size='8'>
                  <IonText>
                    Los Angeles <br /> Annual Marathon
                  </IonText>
                </IonCol>
                <IonCol size='4'>
                  <IonText>
                    <b>21</b>
                  </IonText>
                  <br />
                  <IonText>November</IonText>
                </IonCol>
              </IonRow>
            </div>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
