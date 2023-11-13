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
import {
  notificationsOutline,
  accessibilityOutline,
  locationOutline,
} from 'ionicons/icons';
import Olympia from '../../assets/images/Screenshot 2023-11-13 at 10.53.51.png';
import Maps from '../../assets/images/MAPS.png';
import './Location.css';

const Location: React.FC = () => {
  return (
    <IonPage
      style={{
        paddingLeft: 10,
        paddingRight: 10,
        background: 'rgba(17,35,48)',
      }}
    >
      <IonHeader class='ion-head-color location-page-toolbar'>
        <IonGrid>
          <IonRow>
            <IonToolbar class='ion-color'>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <IonAvatar>
                  <img
                    alt="Silhouette of a person's head"
                    src='https://ionicframework.com/docs/img/demos/avatar.svg'
                  />
                </IonAvatar>
                <IonText>
                  St.Andrew memory <br /> After event celebration
                </IonText>
              </div>
              <IonButtons slot='end'>
                <IonButton
                  fill='outline'
                  shape='round'
                  style={{ width: '77px', height: '40px' }}
                >
                  <IonText>Join</IonText>
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonRow>
        </IonGrid>
      </IonHeader>

      <IonContent class='back' fullscreen>
        <IonGrid>
          <IonRow>
            <div
              style={{
                display: 'flex',
                width: '100%',
                background: 'rgb(188,246,227)',
                borderRadius: 30,
              }}
            >
              <IonCol>
                <IonText color='dark'>
                  <p style={{ textAlign: 'center' }}>
                    Current event:st.Andrew memory
                  </p>
                </IonText>
              </IonCol>
            </div>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <div className='info-card location-info-card'>
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
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '35px' }}>
                      <IonIcon size='large' icon={locationOutline} />
                    </div>
                    <IonText>
                      <b style={{ fontSize: 23 }}>
                        {' '}
                        NOW AT: <br /> WEST ALFRIDGE ST.27
                      </b>
                    </IonText>
                  </div>
                </div>
              </div>

              <IonRow style={{ width: '100%', paddingTop: 33 }}>
                <IonCol size='8'>
                  <IonText>
                    <b>Length 7.5 km</b>
                  </IonText>
                </IonCol>
                <IonCol size='4'>
                  <IonText style={{ fontSize: 15 }}>
                    <b>Age: from 18</b>
                  </IonText>
                </IonCol>
              </IonRow>
            </div>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <IonCol size='8'>
              <IonText color='light'>
                <b style={{ fontSize: 93 }}>12:14</b>
              </IonText>
            </IonCol>
            <IonCol size='4'>
              <div
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                }}
              >
                <IonText color='light'>Average Pace</IonText>
                <IonText color='light'>Per km</IonText>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <div className='info-card map-info-card'>
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
                  <div
                    style={{
                      display: 'flex',
                      gap: 23,
                      height: '100px',
                      width: '100%',
                      //   justifyContent: 'space-between',
                    }}
                  >
                    <IonText>
                      Covered
                      <br />
                      <b style={{ fontSize: 33 }}> 2.4km</b>
                    </IonText>
                    <IonText>
                      Speed
                      <br />
                      <b style={{ fontSize: 33 }}>6km/h</b>
                    </IonText>
                    <IonText>
                      Left
                      <br />
                      <b style={{ fontSize: 33 }}>4.6km</b>
                    </IonText>
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: '100%',
                  height: '100%',
                  paddingBottom: 55,
                }}
              >
                <img
                  style={{
                    height: '100%',
                    width: '100%',
                    marginTop: '15px',
                    borderRadius: '35px',
                  }}
                  src={Maps}
                />
              </div>
            </div>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Location;
