import { useState } from "react";
import './index.css'
export default function App(){
  const [level, setlevel] = useState(10);

  return(
    <>
    <h1>Level {level}</h1>
    <div>
    <img className="m" src="https://static.thairath.co.th/media/4DQpjUtzLUwmJZZSGobOaoB2l01CJneHJRJAJg0MevRX.jpg" alt="" />
    </div>

    <img src="https://www.disthai.com/images/content/original-1696393000736.jpg" alt="แตงโม"  />
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15Q78P04pHmhvL0F3qwGJYsIwoHkUpCO3TQ&s" alt="ฟักทอง"  />
    <img src="https://www.chokchai.go.th/wp-content/uploads/2022/08/image-photo2-95902.jpg" alt="หญ้า" />
    </>
  );
}