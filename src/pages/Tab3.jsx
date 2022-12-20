import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { Player, Video ,Hls , DefaultUi} from '@vime/react';
const Tab3 = () => {


function Example() {
  /**
   * @see https://hls-js.netlify.app/api-docs/file/src/config.ts.html.
   */
  const hlsConfig = {
    // ...
  };

  return (
    <Player  className='hj'>
      <Hls version="latest" config={hlsConfig} poster="/media/poster.png">
        <source data-src="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.mp4/.m3u8" type="application/x-mpegURL" />
      </Hls>
      <DefaultUi/>
    </Player>
  );
}  


  return (
    <IonPage>
      <IonContent>
        <IonTitle>bae</IonTitle>
        <IonContent className='name'>
        <div className='name'>
         <Example/>
        </div>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
