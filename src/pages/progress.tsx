import { useState } from 'react';
import { ladder } from "../shared/constants/ladder";
import { Card } from "../shared/ui/card";

const ProgressPage = () => {
   // Состояние для отметки посещения карточек
   const [visitedCards, setVisitedCards] = useState({});

   const sortedLadder = ladder.sort((a, b) => a.value - b.value);
   // Обработчик изменения состояния чекбокса
   const handleCheckboxChange = (rank) => {
     setVisitedCards((prevVisitedCards) => ({
       ...prevVisitedCards,
       [rank]: !prevVisitedCards[rank]
     }));
   };
 
   return (
     <div className="flex flex-col items-center w-full ml-6 mr-6">
       <h2 className="text-2xl font-bold text-white mb-4">Прогресс</h2>
       {sortedLadder.map((item) => (
         <Card
           key={item.id}
           rank={item.rank}
           visited={visitedCards[item.rank]}
           handleCheckboxChange={handleCheckboxChange}
         />
       ))}
     </div>
   );
 };

export default ProgressPage;