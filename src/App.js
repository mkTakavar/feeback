import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import { FeedbackProvider } from './context/FeedbackContext';
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import Post from './components/Post';


function App() {
  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path='/' element={
            <>
              <FeedbackForm  />
              <FeedbackStats  />
               <FeedbackList  />
               <AboutIconLink />
            
            </>
          }
          />
 
          <Route path='/about' element={<AboutPage />} /> 
          {/* /* هر المنتی میشه اما بدون آن باید المنت خاصی باشه */}
          <Route path='/post/*' element={<Post />} />
          
        </Routes>    
      </div>
      </Router>
      </FeedbackProvider>
  )
  
}
 
export default App 