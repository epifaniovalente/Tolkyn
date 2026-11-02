import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  url?: string
}

export default function SEO({ title, description, url = '' }: SEOProps) {
  const fullTitle = `${title} | Kubata Web`
  const siteUrl = 'https://kubata-web.vercel.app'
  

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${siteUrl}${url}`} />

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      <link rel="canonical" href={`${siteUrl}${url}`} />
    </Helmet>
  )
}