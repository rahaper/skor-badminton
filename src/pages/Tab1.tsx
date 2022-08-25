import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonGrid, 
  IonRow, 
  IonButton,
  IonAlert,
  IonCol } from '@ionic/react';
import { useState } from 'react';
import './Tab1.css';

const Tab1 = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [showAlert2, setShowAlert2] = useState(false);
  const [teamAlert, setTeamAlert] = useState('');

  function tambahScore(team: string){

    switch (team) {
      case 'a':
        setCount(count + 1);
      break;

      case 'b':
        setCount2(count2 + 1);
      break;
    }

    if( ((count >= 21) || (count2 >= 21)) && (count != count2) ){
      if((count-count2)>=2 ){
        setTeamAlert('Team A');
        setShowAlert2(true);
      }
      else if( (count2-count)>=2 ){
        setTeamAlert('Team B');
        setShowAlert2(true);
      }
    }

  }

  function resetScore(){
    setTeamAlert('');
    setCount(0);
    setCount2(0);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Badminton Scoring</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        
        <IonGrid>

          <IonRow>
            <IonCol>
              <IonTitle>Team A</IonTitle>
              <div className="scoreContainer">
                {count}
              </div>
            </IonCol>
            <IonCol className='cls-vertical-mid'>
              <IonButton size="large" className="btn-adjs" onClick={() => tambahScore('a')}>+</IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonTitle>Team B</IonTitle>
              <div className="scoreContainer">
                {count2}
              </div>
            </IonCol>
            <IonCol className='cls-vertical-mid'>
              <IonButton size="large" className="btn-adjs" onClick={() => tambahScore('b')}>+</IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol><IonButton size='large' className='btn-adjs' onClick={()=>resetScore()}>Reset</IonButton></IonCol>
          </IonRow>

        </IonGrid>

        <IonAlert
          isOpen={showAlert2}
          onDidDismiss={() => setShowAlert2(false)}
          cssClass='my-custom-class'
          header={'Congratulations'}
          message={teamAlert+' is Win'}
          buttons={['Ok']}
        />

      </IonContent>

    </IonPage>


  );
};

export default Tab1;
