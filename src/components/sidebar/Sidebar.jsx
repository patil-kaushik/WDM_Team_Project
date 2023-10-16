import { Link } from 'react-router-dom';
import './sidebar.scss';

const Sidebar = ({ peoples }) => {
  return (
    <div className="sidebar">
      {peoples.map((people, index) => (
        <Link key={index}>
            {people.label}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
