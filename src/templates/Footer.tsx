import Link from 'next/link';

import { Background } from '../components/background/Background';
import { CenteredFooter } from '../components/footer/CenteredFooter';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter logo={<Logo />}>
        <li>
          <Link href={AppConfig.support_mail}>
            <a>Ta kontakt</a>
          </Link>
        </li>
        <li>
          <Link href={AppConfig.login_url}>
            <a>Logg inn</a>
          </Link>
        </li>
        <li>
          <Link href={'/privacyPolicy'}>
            <a>Personvern</a>
          </Link>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
