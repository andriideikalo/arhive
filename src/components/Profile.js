export const Profile = ({ users }) => {
    return <div>
       { users.map(user => <div> {user.username}</div> )}
    </div>;
};