import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { selectContacts, selectFilter } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredData = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ul className={s.list}>
        {filteredData.map((contact) => {
          return (
            <li className={s.item} key={contact.id}>
              <Contact
                id={contact.id}
                name={contact.name}
                number={contact.number}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
