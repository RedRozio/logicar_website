import { useRouter } from 'next/router';

import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '25' : '16';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  const router = useRouter();

  return (
    <span
      className={`text-gray-900 inline-flex items-center justify-center gap-2 ${fontStyle}`}
    >
      <img
        src={`${router.basePath}/assets/logo/logo.svg`}
        alt=""
        height={size}
        width={size}
      />
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
