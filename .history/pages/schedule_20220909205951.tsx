import Layout from '../components/Layout'

export default function Schedule(){
    return(
        <Layout name="Prizes" noNavbar>
      <Navbar />
      <SectionHead title="Prizes" subtitle="Compete in our hackathon to win over $200K in prizes!"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3">
      <Card title="BEST ONE" valuation="1 billion" info="-Water"/>
      <Card title="First Place" valuation="1 billion" info="-Water"/>
      <Card title="BEST ONE" valuation="1 billion" info="-Water"/>
      <Card title="BEST ONE" valuation="1 billion" info="-Water"/>
      <Card title="BEST ONE" valuation="1 billion" info="-Water"/>
      </div>
      
    </Layout>
    )
}