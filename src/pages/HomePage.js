import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom/dist';

import { ContactFormDisabled } from 'components/ContactForm/ContactForm';
import { Container } from 'utils/Container';
import { Section, SectionContent } from 'utils/Section';

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigateToRegister = () => {
    navigate('/register');
  };

  return (
    <Container>
      <Section>
        <ContactFormDisabled />
      </Section>
      <SectionContent>
        <p>
          With our app, you can conveniently and reliably store your phone
          contacts and access them from anywhere in the world at your favorite
          time. A handy movie will quickly and easily help you find the right
          contact, and our disability system will help you prevent accidental
          duplicate contacts. Store important people in two clicks.{' '}
          <Link
            onClick={handleNavigateToRegister}
            href="#"
            style={{ textDecoration: 'none', color: '#dd7f0c' }}
          >
            Register
          </Link>{' '}
          now and experience all the benefits of our app:)
        </p>
      </SectionContent>
    </Container>
  );
};

export default HomePage;
