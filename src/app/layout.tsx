import './globals.css'
export const metadata = {
  title: 'BajaTuVideo',
  description: 'by YisusCode06',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}