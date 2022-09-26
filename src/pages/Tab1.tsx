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
import React from 'react'
// import { useState, useEffect } from 'react';
import './Tab1.css';

class Tab11 extends React.Component<any, any>{

  constructor(props:any) {
    super(props);
    this.state = { count: 0, count2:0, showAlert2:false, teamAlert:'', btnDisable:false};
  }

  pantauScore(){
    if( ((this.state.count > 20) || (this.state.count2 > 20)) && (this.state.count !== this.state.count2) ){
      if((this.state.count-this.state.count2)>=2 ){
        this.setState( {teamAlert:'Team A', showAlert2:true, btnDisable:true} );
      }
      else if( (this.state.count2-this.state.count)>=2 ){
        this.setState( {teamAlert:'Team B', showAlert2: true, btnDisable:true} );
      }
    }
  }

  tambahScore(team: string){

    switch (team) {
      case 'a':
        // this.setState({ count:(this.state.count+1) });
        // this.setState({ count:(this.state.count) });
        this.setState(
          (state:any) => ({count: state.count+1}),
          () => { 
            this.pantauScore();
          }
        )
      break;

      case 'b':
        // this.setState({ count2:(this.state.count2+1) });
        this.setState(
          (state:any) => ({count2: state.count2+1}),
          () => { 
            this.pantauScore();
          }
        )
      break;
    }
  }


  resetScore(){
    this.setState( {teamAlert:'', count:0, count2:0, btnDisable:false} );
  }


  render(){
    return(

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
                    {this.state.count}
                  </div>
                </IonCol>
                <IonCol className='cls-vertical-mid'>
                  <IonButton size="large" className="btn-adjs" disabled={this.state.btnDisable} onClick={(e) => this.tambahScore('a')}>+</IonButton>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol>
                  <IonTitle>Team B</IonTitle>
                  <div className="scoreContainer">
                    {this.state.count2}
                  </div>
                </IonCol>
                <IonCol className='cls-vertical-mid'>
                  <IonButton size="large" className="btn-adjs" disabled={this.state.btnDisable} onClick={(e) => this.tambahScore('b')}>+</IonButton>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol><IonButton size='large' className='btn-adjs' onClick={(e)=>this.resetScore()}>Reset</IonButton></IonCol>
              </IonRow>

            </IonGrid>

            <IonAlert
              isOpen={this.state.showAlert2}
              onDidDismiss={() => this.setState({showAlert2:false})}
              cssClass='my-custom-class'
              header={'Congratulations'}
              message={this.state.teamAlert+' is Win'}
              buttons={['Ok']}
            />

          </IonContent>

        </IonPage>
      
    );

  }
}

// const Tab1 = () => {
//   const [count, setCount] = useState(0);
//   const [count2, setCount2] = useState(0);
//   const [showAlert2, setShowAlert2] = useState(false);
//   const [teamAlert, setTeamAlert] = useState('');

//   function tambahScore(team: string){

//     switch (team) {
//       case 'a':
//         // setCount(count + 1);
//         useEffect(() => { setCount(count + 1) }, [count])
//       break;

//       case 'b':
//         // setCount2(count2 + 1);
//         useEffect(() => { setCount2(count + 1) }, [count2])
//       break;
//     }

//     console.log(count);

//     if( ((count > 20) || (count2 > 20)) && (count != count2) ){
//       if((count-count2)>=2 ){
//         setTeamAlert('Team A');
//         setShowAlert2(true);
//       }
//       else if( (count2-count)>=2 ){
//         setTeamAlert('Team B');
//         setShowAlert2(true);
//       }
//     }

//   }

//   function resetScore(){
//     setTeamAlert('');
//     setCount(0);
//     setCount2(0);
//   }

//   return (
//     <IonPage>
//       <IonHeader>
//         <IonToolbar>
//           <IonTitle>Badminton Scoring</IonTitle>
//         </IonToolbar>
//       </IonHeader>

//       <IonContent fullscreen>
        
//         <IonGrid>

//           <IonRow>
//             <IonCol>
//               <IonTitle>Team A</IonTitle>
//               <div className="scoreContainer">
//                 {count}
//               </div>
//             </IonCol>
//             <IonCol className='cls-vertical-mid'>
//               <IonButton size="large" className="btn-adjs" onClick={() => tambahScore('a')}>+</IonButton>
//             </IonCol>
//           </IonRow>

//           <IonRow>
//             <IonCol>
//               <IonTitle>Team B</IonTitle>
//               <div className="scoreContainer">
//                 {count2}
//               </div>
//             </IonCol>
//             <IonCol className='cls-vertical-mid'>
//               <IonButton size="large" className="btn-adjs" onClick={() => tambahScore('b')}>+</IonButton>
//             </IonCol>
//           </IonRow>

//           <IonRow>
//             <IonCol><IonButton size='large' className='btn-adjs' onClick={()=>resetScore()}>Reset</IonButton></IonCol>
//           </IonRow>

//         </IonGrid>

//         <IonAlert
//           isOpen={showAlert2}
//           onDidDismiss={() => setShowAlert2(false)}
//           cssClass='my-custom-class'
//           header={'Congratulations'}
//           message={teamAlert+' is Win'}
//           buttons={['Ok']}
//         />

//       </IonContent>

//     </IonPage>


//   );
// };

export default Tab11;
