import './globals.css'
export const metadata = {
  title: 'BajaTuVideo',
  description: 'Web Para descargar videos de youtube en formato MP3/MP4',
  author: 'YisusCode06',
  keywords: ['descargar','youtube','videos','descargar videos', 'descargar videos de youtube']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7225880587624505"
        crossOrigin="anonymous"></script>
    </html>
  )
}
