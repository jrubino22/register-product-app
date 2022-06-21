

const Index = ({warranties}) => (
    
   warranties.map(({warrantyId, customerEmail, product, purchaseLocation}) => (
        <>
        <p key={warrantyId}>Warranty Id: {warrantyId} | Customer Email: {customerEmail} | Product: {product} | Purchase Location: {purchaseLocation}</p>
        </>
    ))
)

export default Index

export async function getServerSideProps(){
    const response = await fetch('http://localhost:3000/' + 'warranties')
    const data = await response.json()

    return {
        props: {
            warranties: data
        }
    }
}