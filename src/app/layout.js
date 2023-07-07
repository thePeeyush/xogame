import './globals.css'

export const metadata = {
  title: 'XO game',
  description: 'single page xo game',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
