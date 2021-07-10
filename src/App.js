import { useState } from 'react';
import './App.css';
import Layout from './Containers/Hoc/Layout';
import Template from './Containers/Todo/template';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

function App() {

  const [container, setContainer] = useState('Inbox');
  const getComponent = () => {
    switch(container){
      case 'To Do' :
        return (<Template></Template>);
    }
  }

  return (
    <BrowserRouter>
      <div>
        <Layout name={container} handleContainer={(value)=>{setContainer(value)}}>
         <Switch>
          <Route path="/home" component={()=>{return (<div>Welcome to Home</div>)}} />
          <Route path="/todo" component={Template}/>
          {/* <Redirect to="/todo" from="/" /> */}
         </Switch>
          
        </Layout>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
