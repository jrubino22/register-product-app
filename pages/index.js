

const Index = ({warranties}) => {

//    const increment = ({claims}) => {
//         if()
//         claims + 1
//     }

    return(
   warranties.map(({_id, customerEmail, product, purchaseLocation, claims}) => (
        <span>
        <p key={_id}><span>Warranty Id: {_id.slice(_id.length - 6)} </span>|<span> Customer Email: {customerEmail} </span>
         |<span> Product: {product} </span> |<span> Purchase Location: {purchaseLocation} </span>
         |<span key={_id}> Claims: {claims} </span><button key={_id}>Add Claim</button></p> 
        </span>
    )))
}

export async function getServerSideProps(){
    const response = await fetch('https://9df8-2603-8080-6f00-aa5c-dd1b-88f2-def4-9733.ngrok.io/' + 'warranties')
    const data = await response.json()

    return {
        props: {
            warranties: data
        }
    }
}

export default Index