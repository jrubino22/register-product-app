

const Index = ({warranties}) => {

    const warrantyButton = async (_id) => {

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
        };
        const response = await fetch(`https://5e2e-2603-8080-6f00-aa5c-a115-23be-caac-6449.ngrok.io/warranty/${_id}`, requestOptions);
        await response.json();   
        location.reload()
        return false
    }


    return(
   warranties.map(({_id, customerEmail, product, purchaseLocation, warrantyStatus}) => (
        <span>
        <p key={_id}><span>Warranty Id: {_id.slice(_id.length - 6)} </span>|<span> Customer Email: {customerEmail} </span>
         |<span> Product: {product} </span> |<span> Purchase Location: {purchaseLocation} </span>
         |<span key={_id}> Warranty Status: {warrantyStatus} </span>         
         {warrantyStatus === "active" &&
          <button id="wb" onClick={() => warrantyButton(_id)} key={_id}>Warranty Claimed</button>
         }</p> 
        </span>
    )))
}

export async function getServerSideProps(){
    const response = await fetch('https://5e2e-2603-8080-6f00-aa5c-a115-23be-caac-6449.ngrok.io/' + 'warranties')
    const data = await response.json()

    return {
        props: {
            warranties: data
        }
    }
}


export default Index