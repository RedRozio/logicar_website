import Link from 'next/link';

import { Button } from '../components/button/Button';
import { CTABanner } from '../components/cta/CTABanner';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';

const Banner = () => (
  <Section>
    <CTABanner
      title="Se hvordan Logicar kan hjelpe deg med din kjøretøyflåte."
      subtitle="Vi tilpasser oss etter dine behov og ønsker."
      button={
        <Link href={AppConfig.support_mail}>
          <a>
            <Button>Ta kontakt</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
