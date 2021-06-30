import './App.css';
import Dashboard from './components/dashboard'
import  useMediaQuery  from 'react-responsive'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Desktop } from "./components/desktop/desktop.component";
import { Laptop } from "./components/laptop/laptop.component";
import { BigScreen } from "./components/big-screen/big-screen.component";
import { Mobile } from "./components/mobile/mobile.component";
import { TabletMobile } from "./components/tablet-mobile/tablet-mobile.component";
import Contact from './components/contact';
import Error from './components/Error';


function App() {
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });
  
  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });
  
  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });
  
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });
  
  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });

  return (
    
    <div className="App">
      {isMobileDevice && <Mobile />}
      {isTabletDevice && <>
          <TabletMobile />
          {isDesktop && <Desktop />}
          {isLaptop && <Laptop />}
          {isBigScreen && <BigScreen />}
        </>}
        <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={Dashboard} exact/>
             <Route path="/Contact" component={Contact}/>
            <Route component={Error}/>
           </Switch>

        </div> 
      </BrowserRouter>
    </div>
  );
}

export default App;
