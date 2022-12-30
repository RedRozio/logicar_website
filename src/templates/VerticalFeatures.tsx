import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Funksjoner og tjenester"
    description="Logicar tilbyr en suite med tjenester og API integreringer for å effektivisere din bedrifts kjøretøyflåte."
  >
    <VerticalFeatureRow
      title="Brukere og tillatelser"
      description="Vi tilbyr en omfattende og fleksibel brukeradministrasjon som gir bedrifter kontroll over hvem som har tilgang til kjøretøy og hva de har lov til å gjøre med dem."
      image="/assets/images/users.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Kjøretøy og bestillinger"
      description="Logicar gjør det enkelt å organisere kjøretøy og bestillinger, samt reparasjon, dekkskifte, skader og annet vedlikehold."
      image="/assets/images/vehicle.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Alle holdes oppdaterte"
      description="Når noe viktig skjer med bilen, får alle involverte push-varsel i appen, slik at ingenting viktig forblir glemt eller ukjent."
      image="/assets/images/notification.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
