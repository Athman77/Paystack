
  
  // configure assest folder based on node environment
  //const baseUrl = process.env.VERCEL_URL ? `${process.env.VERCEL_URL}` : '/static'
  interface SpringMailProps {
    userName: string
  }
  
  export const SpringSalesMail = ({ userName = 'Mary' }: SpringMailProps) => (
    <main>
    
      <h1>Dear {userName},</h1>
    </main>
  )
  
  export default SpringSalesMail
  
  const main = {
    backgroundColor: '#FFFFFF',
    margin: 'auto auto',
    color: '#000',
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  }
  
  const headingLink = {
    display: 'block',
    fontSize: '1.2rem',
    padding: '0.5rem 0',
    fontWeight: '700',
    color: '#66634B',
    textAlign: 'center' as const,
  }
  
  const paragraph = {
    fontSize: '1rem',
  }
  
  const link = {
    color: '#000',
    textDecoration: 'underline',
  }
  
  const parentContainer = {
    border: '1px solid #eaeaea',
    margin: '40px auto',
    width: '390px',
  }
  
  const container = {
    maxWidth: '90%',
    margin: '0 auto',
    padding: '1.2rem',
  }
  
  const heroSection = {
    position: 'relative' as const,
    width: '100%',
    display: 'inline-block',
  }
  
  const banner = {
    width: 'inherit' as const,
    height: 'auto',
  }
  
  const cta = {
    padding: '13px 20px',
    borderRadius: '5px',
    backgroundColor: '#D13928',
    textAlign: 'center' as const,
    color: '#fff',
    display: 'block',
    width: '45%',
    margin: '0.5rem auto 0 auto',
  }
  
  const secondaryCTA = {
    padding: '0.7rem 1rem',
    border: '2px solid #D13928',
    color: '#D13928',
    borderRadius: '15px',
    margin: '0 1rem',
  }
  
  const plantName = {
    fontWeight: '600',
    fontSize: '1.125rem',
  }
  
  const plantImg = {
    borderRadius: '15px',
    objectFit: 'cover' as const,
  }
  
  const plantCopy = {
    color: '#000',
    padding: '0 0.8rem',
  }
  
  const unsubscribe = {
    textAlign: 'center' as const,
    width: 'inherit' as const,
    margin: '1rem auto',
  }
  
  const storeLinks = {
    margin: '2.5rem 0',
    display: 'flex',
    justifyContent: 'space-around',
  }
  
  const sectionHeading = {
    fontSize: '1.125rem',
    fontWeight: 'bold',
  }
  
  const socialLinks = {
    width: '150px',
    margin: '0 auto',
  }
  
  const socialIcon = {
    display: 'flex',
    width: '30px',
    height: '30px',
    margin: '0 0.5rem',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: '#000',
  }