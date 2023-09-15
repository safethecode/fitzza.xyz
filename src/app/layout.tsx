import { constructMetadata } from '@/utils/next';
import {
  WorkSansFontStyle,
  BebasNenuFontStyle,
} from '@/styles/globalFontsStyle';

import Providers from './providers';

import '@/styles/globalStyle.css';

export const metadata = constructMetadata({
  title: 'VE_',
  description: 'I Love VE ❤️',
  keywords: ['VE', 'I Love VE'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${WorkSansFontStyle.variable} ${BebasNenuFontStyle.variable}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
