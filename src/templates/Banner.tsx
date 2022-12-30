import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Se hvordan Logicar kan hjelpe deg med din kjøretøyflåte."
      subtitle="Vi tilpasser oss etter dine behov og ønsker."
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <a>
            <Button>Ta kontakt</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
