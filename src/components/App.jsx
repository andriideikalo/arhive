import { Profile } from "../Profile/Profile";
import users from "../users"

export const App = () => {
  return (
    <div>
      < Profile users={users}/>
    </div>
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