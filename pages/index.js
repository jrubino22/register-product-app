

const Index = ({warranties}) => (
    
   warranties.map(({_id, customerEmail, product, purchaseLocation, claims}) => (
        <>
        <p key={_id}>Warranty Id: {_id.slice(_id.length - 6)} | Customer Email: {customerEmail} | Product: {product} | Purchase Location: {purchaseLocation} | Claims: {claims}</p>
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