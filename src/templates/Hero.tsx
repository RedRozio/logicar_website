import Link from 'next/link';

import { Background } from '../components/background/Background';
import { Button } from '../components/button/Button';
import { HeroOneButton } from '../components/hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { AppConfig } from '../utils/AppConfig';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
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
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Styr flåten enkelt og effektivt\n'}
            <span className="text-primary-500">med Logicar</span>
          </>
        }
        description="Vi tilbyr en skybasert flåtestyringsløsning som gir bedrifter en enkel og effektiv måte å administrere sine kjøretøy."
        button={
          <Link href={AppConfig.support_mail}>
            <a>
              <Button xl>Ta kontakt</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
