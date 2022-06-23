

const Index = ({warranties}) => (
    
   warranties.map(({warrantyId, customerEmail, product, purchaseLocation}) => (
        <>
        <p key={warrantyId}>Warranty Id: {warrantyId} | Customer Email: {customerEmail} | Product: {product} | Purchase Location: {purchaseLocation}</p>
        </>
    ))
)

export default Index

export async function getServerSideProps(){
    const response = await fetch('https://8111-2603-8080-6f00-aa5c-dd1b-88f2-def4-9733.ngrok.io/' + 'warranties')
    const data = await response.json()

    return {
        props: {
            warranties: data
        }
    }
}