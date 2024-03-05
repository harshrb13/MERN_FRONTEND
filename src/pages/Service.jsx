import React from 'react'
import { useAuth } from '../store/auth'
import "./services.css"
function Service() {
  const { services } = useAuth()



  return (

    <>

      <div className="service-section">
        {
          services.map((elem, index) => {
            const { service, description, provider, price } = elem;
            return (
              <div className="card" key={index}>
                <h2>{service}</h2>
                <p>{description}</p>
                <div className="card-footer">
                  <p>{provider}</p>
                  <p>{price}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Service