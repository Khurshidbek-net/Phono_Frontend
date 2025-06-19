import { Metadata } from 'next';
import { WebSocketProvider } from '../contexts/WebSocketContext';


export const metadata: Metadata = {
  title: "Phono Marketplace",
  description: "Phone marketplace",
  icons: {
    icon: "/favicon.svg",
  },
} 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <WebSocketProvider>
          {children}
        </WebSocketProvider>
      </body>
    </html>
  )
}
