import type { Metadata } from 'next';
import StyledComponentsRegistry from './lib/registry';
import './globals.css';
import ReduxProvider from '@/redux/provider';

export const metadata: Metadata = {
  title: '반장창고',
  description: 'houstep 프론트엔드 과제',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <ReduxProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ReduxProvider>
      </body>
    </html>
  )
}
