import './App.css';


import Header from "./Header";
import Footer from "./Footer"
import Avatar from "./Avatar";
import Card from './Card';
import raiders from "./raiders.jpg";
import Badge from './Badge';

function App() {
  return (
    <div className="App">
      <Header title= "React Beginner's Quiz"/>
    
    <div className="Card-container">
      <Card title= "Card 1" content ="Insert content 1" />
      <Card title= "Card 2" content= "Insert content 2" />
      <Card title= "Card 3" content= "Insert content 3" />

      <Badge label= "New" color='success'/>

      <Avatar 
      imageSrc= {raiders}
      description= "This is my Avatar" />
    </div>

      <Footer content= "Created with ❤️ by Pepe"/>
    </div> 
  );
}

export default App;