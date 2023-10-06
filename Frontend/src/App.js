import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Home from './components/Home/Home';
import RouteNotFound from './routes/RouteNotFound/RouteNotFound';
import RealTimeWeather from './components/RealTimeWeather/RealTimeWeather';
import ChatVoiceBot from './components/ChatVoiceBot/ChatVoiceBot';
import DocumentsOnMars from './components/DocumentsOnMars/DocumentsOnMars';
import RoverMissionImages from './components/RoverMissionImages/RoverMissionImages';
import DocumentOnMarsDetails from './components/DocumentOnMarsDetails/DocumentOnMarsDetails';
import ImagesPerSol from './components/ImagesPerSol/ImagesPerSol';
import ImagesPerCamera from './components/ImagesPerCamera/ImagesPerCamera';
import ImagesPerCameraFhaz from './components/ImagesPerCameraFhaz/ImagesPerCameraFhaz';
import ImagesPerCameraRhaz from './components/ImagesPerCameraRhaz/ImagesPerCameraRhaz';
import ImagesPerCameraMast from './components/ImagesPerCameraMast/ImagesPerCameraMast';
import ImagesPerCameraChemcam from './components/ImagesPerCameraChemcam/ImagesPerCameraChemcam';
import ImagesPerCameraMahli from './components/ImagesPerCameraMahli/ImagesPerCameraMahli';
import ImagesPerCameraMardi from './components/ImagesPerCameraMardi/ImagesPerCameraMardi';
import ImagesPerCameraNavcam from './components/ImagesPerCameraNavcam/ImagesPerCameraNavcam';
import ImagesPerCameraPancam from './components/ImagesPerCameraPancam/ImagesPerCameraPancam';
import ImagesPerCameraMinites from './components/ImagesPerCameraMinites/ImagesPerCameraMinites';
import MarsQuizzes from './components/MarsQuizzes/MarsQuizzes';
import MarsQuizDetails from './components/MarsQuizDetails/MarsQuizDetails';
import ResearchPaper from './components/ResearchPaper/ResearchPaper';
import PromoteResearch from './components/PromoteResearch/PromoteResearch';
import ScienceMagazine from './components/ScienceMagazine/ScienceMagazine';
import PapersFromTwentyThree from './components/PapersFromTwentyThree/PapersFromTwentyThree';
import PapersFromTwentyTwo from './components/PapersFromTwentyTwo/PapersFromTwentyTwo';
import PapersFromTwentyOne from './components/PapersFromTwentyOne/PapersFromTwentyOne';
import PapersFromTwenty from './components/PapersFromTwenty/PapersFromTwenty';
import PapersFromNineteen from './components/PapersFromNineteen/PapersFromNineteen';
import PapersFromEighteen from './components/PapersFromEighteen/PapersFromEighteen';
import PapersFromSeventeen from './components/PapersFromSeventeen/PapersFromSeventeen';
import PapersFromSixteen from './components/PapersFromSixteen/PapersFromSixteen';
import PapersFromFifteen from './components/PapersFromFifteen/PapersFromFifteen';
import PapersFromFourteen from './components/PapersFromFourteen/PapersFromFourteen';
import PapersFromThirteen from './components/PapersFromThirteen/PapersFromThirteen';
import PapersFromTwelve from './components/PapersFromTwelve/PapersFromTwelve';
import PapersFromEightToEleven from './components/PapersFromEightToEleven/PapersFromEightToEleven';
import InPress from './components/InPress/InPress';
import ImagesPerEarthDate from './components/ImagesPerEarthDate/ImagesPerEarthDate';
import MarsTrekWMTS from './components/MarsTrekWMTS/MarsTrekWMTS';
import SurveysFeedback from './components/SurveysFeedback/SurveysFeedback';
// require('dotenv').config();


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/real_time_weather',
          element: <RealTimeWeather></RealTimeWeather>,
        },
        {
          path: '/chat_voice_bot',
          element: <ChatVoiceBot></ChatVoiceBot>,
        },
        {
          path: '/mars_trek_wmts',
          element: <MarsTrekWMTS></MarsTrekWMTS>,
        },
        {
          path: '/mars_quizzes',
          loader: async () => {
            return fetch('https://mmarvel-backend.vercel.app/quiz_topics');
          },
          element: <MarsQuizzes></MarsQuizzes>,
        },
        {
          path: '/mars_quiz/:id',
          loader: async ({ params }) => {
            return fetch(`https://mmarvel-backend.vercel.app/quiz_topics/${params.id}`);
          },
          element: <MarsQuizDetails></MarsQuizDetails>,
        },
        {
          path: '/research_on_mars',
          // loader: async () => {
          //   return fetch('https://mars-marvel-backend.vercel.app/document_categories');
          // },
          element: <DocumentsOnMars></DocumentsOnMars>,
        },
        {
          path: '/research_on_mars/:id',
          // loader: async ({ params }) => {
          //   return fetch(`https://mars-marvel-backend.vercel.app/document_category/${params.id}`);
          // },
          element: <DocumentOnMarsDetails></DocumentOnMarsDetails>
        },
        {
          path: '/research_on_mars/research_paper',
          // loader: async () => {
          //   return fetch('https://mars-marvel-backend.vercel.app/document_categories');
          // },
          element: <ResearchPaper></ResearchPaper>,
        },
        {
          path: '/research_on_mars/research_paper/in_press',
          // loader: async () => {
          //   return fetch('https://mars-marvel-backend.vercel.app/document_categories');
          // },
          element: <InPress></InPress>,
        },
        {
          path: '/research_on_mars/research_paper/2023',
          // loader: async () => {
          //   return fetch('https://mars-marvel-backend.vercel.app/document_categories');
          // },
          element: <PapersFromTwentyThree></PapersFromTwentyThree>,
        },
        {
          path: '/research_on_mars/research_paper/2022',
          // loader: async () => {
          //   return fetch('https://mars-marvel-backend.vercel.app/document_categories');
          // },
          element: <PapersFromTwentyTwo></PapersFromTwentyTwo>,
        },
        {
          path: '/research_on_mars/research_paper/2021',
          // loader: async () => {
          //   return fetch('https://mars-marvel-backend.vercel.app/document_categories');
          // },
          element: <PapersFromTwentyOne></PapersFromTwentyOne>,
        },
        {
          path: '/research_on_mars/research_paper/2020',
          // loader: async () => {
          //   return fetch('https://mars-marvel-backend.vercel.app/document_categories');
          // },
          element: <PapersFromTwenty></PapersFromTwenty>,
        },
        {
          path: '/research_on_mars/research_paper/2019',
          // loader: async () => {
          //   return fetch('https://mars-marvel-backend.vercel.app/document_categories');
          // },
          element: <PapersFromNineteen></PapersFromNineteen>,
        },
        {
          path: '/research_on_mars/research_paper/2018',
          // loader: async () => {
          //   return fetch('https://mars-marvel-backend.vercel.app/document_categories');
          // },
          element: <PapersFromEighteen></PapersFromEighteen>,
        },
        {
          path: '/research_on_mars/research_paper/2017',
          // loader: async () => {
          //   return fetch('https://mars-marvel-backend.vercel.app/document_categories');
          // },
          element: <PapersFromSeventeen></PapersFromSeventeen>,
        },
        {
          path: '/research_on_mars/research_paper/2016',
          // loader: async () => {
          //   return fetch('https://mars-marvel-backend.vercel.app/document_categories');
          // },
          element: <PapersFromSixteen></PapersFromSixteen>,
        },
        {
          path: '/research_on_mars/research_paper/2015',
          // loader: async () => {
          //   return fetch('https://mars-marvel-backend.vercel.app/document_categories');
          // },
          element: <PapersFromFifteen></PapersFromFifteen>,
        },
        {
          path: '/research_on_mars/research_paper/2014',
          // loader: async () => {
          //   return fetch('https://mars-marvel-backend.vercel.app/document_categories');
          // },
          element: <PapersFromFourteen></PapersFromFourteen>,
        },
        {
          path: '/research_on_mars/research_paper/2013',
          // loader: async () => {
          //   return fetch('https://mars-marvel-backend.vercel.app/document_categories');
          // },
          element: <PapersFromThirteen></PapersFromThirteen>,
        },
        {
          path: '/research_on_mars/research_paper/2012',
          // loader: async () => {
          //   return fetch('https://mars-marvel-backend.vercel.app/document_categories');
          // },
          element: <PapersFromTwelve></PapersFromTwelve>,
        },
        {
          path: '/research_on_mars/research_paper/2008_2011',
          // loader: async () => {
          //   return fetch('https://mars-marvel-backend.vercel.app/document_categories');
          // },
          element: <PapersFromEightToEleven></PapersFromEightToEleven>,
        },
        {
          path: '/research_on_mars/promote_research',
          // loader: async () => {
          //   return fetch('https://mars-marvel-backend.vercel.app/document_categories');
          // },
          element: <PromoteResearch></PromoteResearch>,
        },
        {
          path: '/research_on_mars/science_magazine',
          // loader: async () => {
          //   return fetch('https://mars-marvel-backend.vercel.app/document_categories');
          // },
          element: <ScienceMagazine></ScienceMagazine>,
        },
        {
          path: '/rover_mission_images',
          element: <RoverMissionImages></RoverMissionImages>,
        },
        {
          path: '/rover_mission_images/sol',
          element: <ImagesPerSol></ImagesPerSol>,
        },
        {
          path: '/rover_mission_images/camera',
          element: <ImagesPerCamera></ImagesPerCamera>,
        },
        {
          path: '/rover_mission_images/camera/fhaz',
          element: <ImagesPerCameraFhaz></ImagesPerCameraFhaz>,
        },
        {
          path: '/rover_mission_images/camera/rhaz',
          element: <ImagesPerCameraRhaz></ImagesPerCameraRhaz>,
        },
        {
          path: '/rover_mission_images/camera/mast',
          element: <ImagesPerCameraMast></ImagesPerCameraMast>,
        },
        {
          path: '/rover_mission_images/camera/chemcam',
          element: <ImagesPerCameraChemcam></ImagesPerCameraChemcam>,
        },
        {
          path: '/rover_mission_images/camera/mahli',
          element: <ImagesPerCameraMahli></ImagesPerCameraMahli>,
        },
        {
          path: '/rover_mission_images/camera/mardi',
          element: <ImagesPerCameraMardi></ImagesPerCameraMardi>,
        },
        {
          path: '/rover_mission_images/camera/navcam',
          element: <ImagesPerCameraNavcam></ImagesPerCameraNavcam>,
        },
        {
          path: '/rover_mission_images/camera/pancam',
          element: <ImagesPerCameraPancam></ImagesPerCameraPancam>,
        },
        {
          path: '/rover_mission_images/camera/minites',
          element: <ImagesPerCameraMinites></ImagesPerCameraMinites>,
        },
        {
          path: '/rover_mission_images/earth_date',
          element: <ImagesPerEarthDate></ImagesPerEarthDate>,
        },
        {
          path: '/surveys_feedback',
          element: <SurveysFeedback></SurveysFeedback>,
        }
      ]
    },
    { path: '*', element: <RouteNotFound></RouteNotFound> }
  ])


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
