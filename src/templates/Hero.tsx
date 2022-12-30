import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { AppConfig } from '../utils/AppConfig';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a>Ta kontakt</a>
          </Link>
        </li>
        <li>
          <Link href={AppConfig.loginUrl}>
            <a>Logg inn</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Styr kjøretøyene dine enkelt og effektivt\n'}
            <span className="text-primary-500">med Logicar</span>
          </>
        }
        description="Vi tilbyr en webbasert kjøretøystyringsløsning som gir bedrifter en enkel og effektiv måte å administrere sin flåte av kjøretøy."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
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
