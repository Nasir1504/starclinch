
import SmoothScroll from "@components/SmothScroll"

export const metadata = {
  title: 'Starclinch',
  description: `Book top artists, performers, and event services effortlessly with StarClinch. India's leading online platform for hiring talent for events, weddings, parties, and corporate shows.`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll >
          {children}
        </SmoothScroll>

      </body>
    </html>
  )
}
