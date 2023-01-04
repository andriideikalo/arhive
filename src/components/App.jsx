import { Profile } from "./Profile/Profile";
import {Statistics} from "./Statistics/Statistics";
import users from "../data/users";
import data from "../data/data";


export const App = () => {
  return (
    <>
      <Profile users={users}/>
      <Statistics data={data}/>
    </>
  );
};


// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };